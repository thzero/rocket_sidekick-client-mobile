import BaseUtilityDatabaseService from '@/service.app/database/utility';

import LibraryCommonUtility from '@thzero/library_common/utility/index';

class UtilityDatabaseService extends BaseUtilityDatabaseService {
	constructor() {
		super();

		this._ttlDefault = 60 * 60 * 1000;
	}

	async content(correlationId, params) {
		return await this._serviceDatabase.selectJsonById(correlationId, UtilityDatabaseService.TableNameContent, UtilityDatabaseService.IdContent);
	}

	async contentMarkup(correlationId, params) {
		this._enforceNotNull('UtilityDatabaseService', 'contentMarkup', params, 'params', correlationId);
		this._enforceNotEmpty('UtilityDatabaseService', 'contentMarkup', params.contentId, 'params.contentId', correlationId);
		this._enforceNotEmpty('UtilityDatabaseService', 'contentMarkup', params.locale, 'params.locale', correlationId);

		const id = params.contentId + '-' + params.locale;
		return await this._serviceDatabase.selectJsonById(correlationId, UtilityDatabaseService.TableNameContent, id);
	}

	async contentMarkupUpdate(correlationId, content) {
		this._enforceNotNull('UtilityDatabaseService', 'contentMarkupUpdate', content, 'params', correlationId);
		this._enforceNotEmpty('UtilityDatabaseService', 'contentMarkupUpdate', content.id, 'content.id', correlationId);
		this._enforceNotNull('UtilityDatabaseService', 'contentMarkupUpdate', content.locales, 'content.locales', correlationId);

		let response = this._successResponse({}, correlationId);
		let ttl = LibraryCommonUtility.getTimestamp() + this._ttlDefault;
		let id;
		for (const locale of content.locales) {
			id = content.id + '-' + locale;
			response = await this._serviceDatabase.upcert(correlationId, UtilityDatabaseService.TableNameContent, id, { json: JSON.stringify(content), ttl: ttl });
			if (this._hasFailed(response))
				return response;
		}
		return response;
	}

	async contentUpdate(correlationId, content) {
		this._enforceNotNull('UtilityDatabaseService', 'contentUpdate', content, 'content', correlationId);

		let ttl = LibraryCommonUtility.getTimestamp() + this._ttlDefault;
		const response = await this._serviceDatabase.upcert(correlationId, UtilityDatabaseService.TableNameContent, UtilityDatabaseService.IdContent, { json: JSON.stringify(content), ttl: ttl });
		return response;
	}

	async initialize(correlationId) {
		return await this._serviceDatabase.selectJsonById(correlationId, UtilityDatabaseService.TableNameInitialize, UtilityDatabaseService.IdInitialize);
	}

	async initializeUpdate(correlationId, content) {
		this._enforceNotNull('UtilityDatabaseService', 'initializeUpdate', content, 'content', correlationId);

		let ttl = LibraryCommonUtility.getTimestamp() + this._ttlDefault;
		const response = await this._serviceDatabase.upcert(correlationId, UtilityDatabaseService.TableNameInitialize, UtilityDatabaseService.IdInitialize, { json: JSON.stringify(content), ttl: ttl });
		return response;
	}

	async openSource(correlationId) {
		return await this._serviceDatabase.selectJsonById(correlationId, UtilityDatabaseService.TableNameOpenSource, UtilityDatabaseService.IdOpenSource);
	}

	async openSourceUpdate(correlationId, content) {
		this._enforceNotNull('UtilityDatabaseService', 'openSourceUpdate', content, 'content', correlationId);

		let ttl = LibraryCommonUtility.getTimestamp() + this._ttlDefault;
		const response = await this._serviceDatabase.upcert(correlationId, UtilityDatabaseService.TableNameOpenSource, UtilityDatabaseService.IdOpenSource, { json: JSON.stringify(content), ttl: ttl });
		return response;
	}

	static IdContent = 'contentListing';
	static IdInitialize = 'initialize';
	static IdOpenSource = 'openSource';
	static TableNameContent = 'content';
	static TableNameInitialize = 'initialize';
	static TableNameOpenSource = 'openSource';
}

export default UtilityDatabaseService;
