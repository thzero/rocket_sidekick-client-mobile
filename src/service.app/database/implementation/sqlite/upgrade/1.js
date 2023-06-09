import UpgradeSqliteDatabaseScript from '@/service.app/database/implementation/sqlite/upgrade/index';

class UpgradeSqliteDatabaseScript_1 extends UpgradeSqliteDatabaseScript {
	constructor() {
		super(1);
	}

	statements() {
		return [
			'CREATE TABLE IF NOT EXISTS checklists (identifier TEXT PRIMARY KEY, json TEXT, name TEXT, isDefault INTEGER DEFAULT 0, statusId TEXT, typeId TEXT, syncTimestamp INTEGER, deleted INTEGER DEFAULT 0)',
			'CREATE TABLE IF NOT EXISTS launches (identifier TEXT PRIMARY KEY, json TEXT, name TEXT, syncTimestamp INTEGER, deleted INTEGER DEFAULT 0)',
			'CREATE TABLE IF NOT EXISTS locations (identifier TEXT PRIMARY KEY, json TEXT, name TEXT, syncTimestamp INTEGER, deleted INTEGER DEFAULT 0)',
			'CREATE TABLE IF NOT EXISTS manufacturers (identifier TEXT PRIMARY KEY, json TEXT, name TEXT, typeIds TEXT, syncTimestamp INTEGER, deleted INTEGER DEFAULT 0)',
			'CREATE TABLE IF NOT EXISTS motors (identifier TEXT PRIMARY KEY, json TEXT, name TEXT, impulseClass TEXT, diameter INTEGER, singleUse INTEGER, sparky INTEGER, deleted INTEGER DEFAULT 0)',
			'CREATE TABLE IF NOT EXISTS parts (identifier TEXT PRIMARY KEY, json TEXT, name TEXT, typeId TEXT, syncTimestamp INTEGER, deleted INTEGER DEFAULT 0)',
			'CREATE TABLE IF NOT EXISTS rockets (identifier TEXT PRIMARY KEY, json TEXT, name TEXT, diameterMajor INTEGER NULL, typeId TEXT NULL, syncTimestamp INTEGER, deleted INTEGER DEFAULT 0)',
			'CREATE TABLE IF NOT EXISTS users (identifier TEXT PRIMARY KEY, json TEXT, externalIdentifier TEXT, syncTimestamp INTEGER, deleted INTEGER DEFAULT 0)',
			'CREATE TABLE IF NOT EXISTS ttl (identifier TEXT PRIMARY KEY, json TEXT)',

			'CREATE TABLE IF NOT EXISTS content (identifier TEXT PRIMARY KEY, json TEXT, type TEXT, ttl INTEGER, deleted INTEGER DEFAULT 0)',
			'CREATE TABLE IF NOT EXISTS initialize (identifier TEXT PRIMARY KEY, json TEXT, ttl INTEGER, deleted INTEGER DEFAULT 0)',
			'CREATE TABLE IF NOT EXISTS news (identifier TEXT PRIMARY KEY, json TEXT, ttl INTEGER, deleted INTEGER DEFAULT 0)',
			'CREATE TABLE IF NOT EXISTS openSource (identifier TEXT PRIMARY KEY, json TEXT, ttl INTEGER, deleted INTEGER DEFAULT 0)',

			'CREATE INDEX IF NOT EXISTS checklists_identifier ON checklists (identifier ASC, deleted ASC)',
			'CREATE INDEX IF NOT EXISTS checklists_search ON checklists (isDefault, statusId, typeId ASC, deleted ASC)',
			'CREATE INDEX IF NOT EXISTS checklists_searchName ON checklists (name, isDefault, statusId, typeId ASC, deleted ASC)',
			'CREATE INDEX IF NOT EXISTS checklists_syncTimestamp ON checklists (syncTimestamp ASC)',
			'CREATE INDEX IF NOT EXISTS launches_identifier ON launches (identifier ASC, deleted ASC)',
			'CREATE INDEX IF NOT EXISTS launches_syncTimestamp ON launches (syncTimestamp ASC)',
			'CREATE INDEX IF NOT EXISTS locations_identifier ON locations (identifier ASC, deleted ASC)',
			'CREATE INDEX IF NOT EXISTS locations_syncTimestamp ON locations (syncTimestamp ASC)',
			'CREATE INDEX IF NOT EXISTS manufacturers_identifier ON manufacturers (identifier ASC, deleted ASC)',
			'CREATE INDEX IF NOT EXISTS manufacturers_syncTimestamp ON manufacturers (syncTimestamp ASC)',
			'CREATE INDEX IF NOT EXISTS motors_identifier ON motors (identifier ASC, deleted ASC)',
			'CREATE INDEX IF NOT EXISTS motors_search ON motors (impulseClass ASC, diameter ASC, singleUse ASC, deleted ASC)',
			'CREATE INDEX IF NOT EXISTS motors_searchName ON motors (name ASC, impulseClass ASC, diameter ASC, singleUse ASC, deleted ASC)',
			'CREATE INDEX IF NOT EXISTS parts_identifier ON parts (identifier ASC, deleted ASC)',
			'CREATE INDEX IF NOT EXISTS parts_syncTimestamp ON parts (syncTimestamp ASC)',
			'CREATE INDEX IF NOT EXISTS rockets_identifier ON rockets (identifier ASC, deleted ASC)',
			'CREATE INDEX IF NOT EXISTS rockets_syncTimestamp ON rockets (syncTimestamp ASC)',
			'CREATE INDEX IF NOT EXISTS users_identifier ON users (identifier ASC)',
			'CREATE INDEX IF NOT EXISTS users_externalIdentifier ON users (externalIdentifier ASC)',
			'CREATE INDEX IF NOT EXISTS users_syncTimestamp ON users (syncTimestamp ASC)',

			'CREATE INDEX IF NOT EXISTS content_identifier ON content (identifier ASC)',
			'CREATE INDEX IF NOT EXISTS content_type ON content (type ASC)',
			'CREATE INDEX IF NOT EXISTS initialize_identifier ON initialize (identifier ASC)',
			'CREATE INDEX IF NOT EXISTS news_identifier ON news (identifier ASC)',
			'CREATE INDEX IF NOT EXISTS openSource_identifier ON openSource (identifier ASC)'
		];
	}
}

export default UpgradeSqliteDatabaseScript_1;
