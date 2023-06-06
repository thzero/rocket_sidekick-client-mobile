import { CapacitorSQLite, SQLiteConnection } from "@capacitor-community/sqlite";

import LibraryCommonUtility from '@thzero/library_common/utility';

import DatabaseImplementationService from '@/service.app/database/implementation/index';
import UpgradeSqliteDatabaseScript_1 from '@/service.app/database/implementation/sqlite/upgrade/1';

class SqliteDatabaseImplementationService extends DatabaseImplementationService {
	constructor() {
		super();

		this._db = null;
		this._dbName = 'rs';
		this._sqlite = null;
		this._upgrades = [];
	}

	async execute(correlationId, query) {
		try {
			const res = await this._db.execute(query);
			if (res.changes && res.changes.changes && res.changes.changes < 0)
				return this._error('SqliteDatabaseImplementationService', 'execute', 'Queried failed', null, null, null, correlationId);
			return this._success(correlationId);
		}
		catch (err) {
			return this._error('SqliteDatabaseImplementationService', 'execute', null, err, null, null, correlationId);
		}
	}

	async exists(correlationId, table, identifier) {
		const response = await this.select(correlationId, table, 'identifier', 'identifier = "' + identifier + '"');
		if (this._hasFailed(response))
			return response;
		return this._successResponse(response.results && response.results.length > 0, correlationId);
	}

	async insert(correlationId, table, identifier, values, deleted, syncTimestamp) {
		if (String.isNullOrEmpty(identifier))
			this._enforce('SqliteDatabaseImplementationService', 'insert', false, identifier, correlationId, 'Mo identifier.');
		if (!LibraryCommonUtility.isObject(values))
			this._enforce('SqliteDatabaseImplementationService', 'insert', false, values, correlationId, 'Not an object.');

		const responseFound = await this.exists(correlationId, table, identifier);
		if (this._hasFailed(responseFound))
			return responseFound;

		if (responseFound.results)
			return this._failed('SqliteDatabaseImplementationService', 'insert', `Item already exists for "${identifier}"`, null, null, correlationId);

		return await this._insertEx(correlationId, table, identifier, values, deleted, syncTimestamp);
	}

	async query(correlationId, query) {
		try {
			const res = await this._db.query(query);
			if (!res)
				return this._error('SqliteDatabaseImplementationService', 'query', 'Queried failed', null, null, null, correlationId);
			return this._successResponse(res.values, correlationId);
		}
		catch (err) {
			return this._error('SqliteDatabaseImplementationService', 'query', null, err, null, null, correlationId);
		}
	}

	async select(correlationId, table, select, where) {
		if (String.isNullOrEmpty(where))
			return await this.query(correlationId, `SELECT ${select} FROM ${table}`);
		return await this.query(correlationId, `SELECT ${select} FROM ${table} WHERE ${where}`);
	}

	async selectById(correlationId, table, id) {
		return await this.query(correlationId, `SELECT * FROM ${table} WHERE identifier="${id}"`);
	}

	async selectJson(correlationId, table, select, where) {
		const response = await this.select(correlationId, table, select, where);
		if (LibraryCommonUtility.isNull(response.results))
			return response;

		const results = [];
		let temp;
		for (const item of response.results) {
			temp = item['json'];
			if (temp) {
				for (const [key, value] of Object.entries(temp)) {
					if (key === 'json') {
						temp[key] = JSON.parse(value);
						break;
					}
				}
			}

			results.push(temp);
		}
		return this._successResponse(results, correlationId);
	}

	async selectJsonById(correlationId, table, id) {
		const response = await this.selectById(correlationId, table, id);
		if (LibraryCommonUtility.isNull(response.results))
			return response;

		// const results = [];
		// const temp = response.results[0]['json'];
		// if (temp)
		// 	results.push(JSON.parse(temp));

		const results = response.results[0];
		for (const [key, value] of Object.entries(results)) {
			if (key === 'json') {
				results[key] = JSON.parse(value);
				break;
			}
		}
		return this._successResponse(results, correlationId);
	}

	async upcert(correlationId, table, identifier, values, deleted, syncTimestamp) {
		if (String.isNullOrEmpty(identifier))
			this._enforce('SqliteDatabaseImplementationService', 'upcert', false, identifier, correlationId, 'Mo identifier.');
		if (!LibraryCommonUtility.isObject(values))
			this._enforce('SqliteDatabaseImplementationService', 'upcert', false, values, correlationId, 'Not an object.');

		const responseFound = await this.exists(correlationId, table, identifier);
		if (this._hasFailed(responseFound))
			return responseFound;

		if (!responseFound.results)
			return await this._insertEx(correlationId, table, identifier, values, deleted, syncTimestamp);

		return await this._updateEx(correlationId, table, identifier, values, deleted, syncTimestamp);
	}

	async update(correlationId, table, identifier, values, deleted, syncTimestamp) {
		if (String.isNullOrEmpty(identifier))
			this._enforce('SqliteDatabaseImplementationService', 'update', false, identifier, correlationId, 'Mo identifier.');
		if (!LibraryCommonUtility.isObject(values))
			this._enforce('SqliteDatabaseImplementationService', 'update', false, values, correlationId, 'Not an object.');

		const responseFound = await this.exists(correlationId, table, identifier);
		if (this._hasFailed(responseFound))
			return responseFound;

		if (!responseFound.results)
			return this._failed('SqliteDatabaseImplementationService', 'update', `Item does not exist for "${identifier}"`, null, null, correlationId);

		return await this._updateEx(correlationId, table, identifier, values, deleted, syncTimestamp);
	}

	async _initialize(correlationId) {
		try {
			const correlationId = LibraryCommonUtility.correlationId();

			this._sqlite = new SQLiteConnection(CapacitorSQLite);

			this._upgrades.push(new UpgradeSqliteDatabaseScript_1());

			for (const item of this._upgrades)
				await this._sqlite.addUpgradeStatement(this._dbName, item.version, item.statements());

			const ret = await this._sqlite.checkConnectionsConsistency();
			// this._logger.debug('SqliteDatabaseImplementationService', 'init', `after checkConnectionsConsistency ${ret.result}`, null, correlationId);
			const isConn = (await this._sqlite.isConnection(this._dbName)).result;
			// this._logger.debug('SqliteDatabaseImplementationService', 'init', `after isConnection ${isConn}`, null, correlationId);
			if (ret.result && isConn) {
				this._db = await this._sqlite.retrieveConnection(this._dbName);
			} else {
				this._db = await this._sqlite.createConnection(this._dbName, false, "no-encryption", 1);
			}
			// this._logger.debug('SqliteDatabaseImplementationService', 'init', `after create/retrieveConnection ${JSON.stringify(this._db)}`, null, correlationId);

			await this._db.open();
			this._logger.debug('SqliteDatabaseImplementationService', 'init', `db.open()`, null, correlationId);
		}
		catch (err) {
			if (this._sqlite)
				await this._sqlite.closeConnection(this._dbName);
			throw err;
		}
	}

	async _insertEx(correlationId, table, identifier, values, deleted, syncTimestamp) {
		if (String.isNullOrEmpty(identifier))
			this._enforce('SqliteDatabaseImplementationService', '_insertEx', false, identifier, correlationId, 'Mo identifier.');
		if (!LibraryCommonUtility.isObject(values))
			this._enforce('SqliteDatabaseImplementationService', '_insertEx', false, values, correlationId, 'Not an object.');

		values['deleted'] = this._deleted(deleted);
		if (syncTimestamp)
			values['syncTimestamp'] = syncTimestamp;

		const items = [
			this._value(identifier)
		];
		const names = [
			'identifier'
		];
		for (const [key, value] of Object.entries(values)) {
			names.push(key);
			items.push(this._value(value));
		}

		return await this.execute(correlationId, `INSERT INTO ${table} (${names.join(',')}) VALUES (${items.join(',')})`);
	}

	_deleted(deleted) {
		return deleted ? deleted ? 1 : 0 : 0;
	}

	_keyValue(key, value) {
		if ((typeof value === 'string' || value instanceof String))
			value = this._value(value);
		return `${key} = ${value}`;
	}

	async _updateEx(correlationId, table, identifier, values, deleted, syncTimestamp) {
		if (String.isNullOrEmpty(identifier))
			this._enforce('SqliteDatabaseImplementationService', '_updateEx', false, identifier, correlationId, 'Mo identifier.');
		if (!LibraryCommonUtility.isObject(values))
			this._enforce('SqliteDatabaseImplementationService', '_updateEx', false, values, correlationId, 'Not an object.');

		values['deleted'] = this._deleted(deleted);
		if (syncTimestamp)
			values['syncTimestamp'] = syncTimestamp;

		const items = [];
		for (const [key, value] of Object.entries(values))
			items.push(`${key}=${this._value(value)}`);

		return await this.execute(correlationId, `UPDATE ${table} SET ${items.join(',')} WHERE identifier=${this._value(identifier)}`);
	}

	_value(value) {
		const isString = (typeof value === 'string' || value instanceof String);
		if (!isString)
			return value;

		value = value.replaceAll("'", "''");
		value = `'${value}'`;
		return value;
	}

	async _load(correlationId) {
		return this._successResponse([ res.values, res2.values ], correlationId);
	}
}

export default SqliteDatabaseImplementationService;
