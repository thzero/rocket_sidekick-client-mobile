import AppConstants from '@/constants';

import AppUtility from '@/utility/app';
import LibraryClientUtility from '@thzero/library_client/utility/index';
import LibraryCommonUtility from '@thzero/library_common/utility';

import AppUtilityService from '@/service/utility';

class MobileUtilityService extends AppUtilityService {
	constructor() {
		super();

		this._serviceDatabase = null;
	}

	async init(injector) {
		await super.init(injector);

		this._serviceDatabase = this._injector.getService(AppConstants.InjectorKeys.SERVICE_DATABASE_UTILITY);
	}

	async _contentCommunication(correlationId, params) {
		try {
			let response = await this._serviceDatabase.content(correlationId, params);
			this._logger.debug('MobileUtilityService', '_contentCommunication', 'response.database', response, correlationId);
			if (this._hasFailed(response))
				return response;

			if (!LibraryCommonUtility.isNull(response.results)) {
				if (AppUtility.ttlDelta(response.results.ttl))
					return this._successResponse(response.results.json, correlationId);
			}

			if (!LibraryClientUtility.online) {
				this._logger.debug('MobileUtilityService', '_contentCommunication', 'requires data, not online', response, correlationId);
				return this._successResponse([], correlationId);
			}

			response = await super._contentCommunication(correlationId, params);
			this._logger.debug('MobileUtilityService', '_contentCommunication', 'response.external', response, correlationId);
			if (this._hasFailed(response))
				return response;

			// Update in the database the external...
			const responseUpdate = await this._serviceDatabase.contentUpdate(correlationId, response.results);
			this._logger.debug('MobileUtilityService', '_contentCommunication', 'response.update', responseUpdate, correlationId);
			if (this._hasFailed(responseUpdate))
				return responseUpdate;

			if (!response) {
				this._logger.debug('MobileUtilityService', '_contentCommunication', 'no response', response, correlationId);
				response = this._successResponse([], correlationId);
			}

			return response;
		}
		catch (err) {
			return this._error('MobileUtilityService', '_contentCommunication', null, err, null, null, correlationId);
		}
	}

	async _contentMarkupCommunication(correlationId, params) {
		try {
			let response = await this._serviceDatabase.contentMarkup(correlationId, params);
			this._logger.debug('MobileUtilityService', '_contentMarkupCommunication', 'response.database', response, correlationId);
			if (this._hasFailed(response))
				return response;

			if (!LibraryCommonUtility.isNull(response.results)) {
				if (AppUtility.ttlDelta(response.results.ttl))
					return this._successResponse(response.results.json, correlationId);
			}

			if (!LibraryClientUtility.online) {
				this._logger.debug('MobileUtilityService', '_contentMarkupCommunication', 'requires data, not online', response, correlationId);
				return this._successResponse({}, correlationId);
			}

			response = await super._contentMarkupCommunication(correlationId, params);
			this._logger.debug('MobileUtilityService', '_contentMarkupCommunication', 'response.external', response, correlationId);
			if (this._hasFailed(response))
				return response;

			// Update in the database the external...
			const responseUpdate = await this._serviceDatabase.contentMarkupUpdate(correlationId, response.results);
			this._logger.debug('MobileUtilityService', '_contentMarkupCommunication', 'response.update', responseUpdate, correlationId);
			if (this._hasFailed(responseUpdate))
				return responseUpdate;

			if (!response) {
				this._logger.debug('MobileUtilityService', '_contentMarkupCommunication', 'no response', response, correlationId);
				response = this._successResponse({}, correlationId);
			}

			return response;
		}
		catch (err) {
			return this._error('MobileUtilityService', '_contentCommunication', null, err, null, null, correlationId);
		}
	}

	async _initializeCommunication(correlationId) {
		try {
			let response = await this._serviceDatabase.initialize(correlationId);
			this._logger.debug('MobileUtilityService', '_initializeCommunication', 'response.database', response, correlationId);
			if (this._hasFailed(response))
				return response;

			if (!LibraryCommonUtility.isNull(response.results)) {
				if (AppUtility.ttlDelta(response.results.ttl))
					return this._successResponse(response.results.json, correlationId);
			}

			if (!LibraryClientUtility.online) {
				this._logger.debug('MobileUtilityService', '_initializeCommunication', 'requires data, not online', response, correlationId);
				return this._successResponse({}, correlationId);
			}

			response = await super._initializeCommunication(correlationId);
			this._logger.debug('MobileUtilityService', '_initializeCommunication', 'response.external', response, correlationId);
			if (this._hasFailed(response))
				return response;

			// Update in the database the external...
			const responseUpdate = await this._serviceDatabase.initializeUpdate(correlationId, response.results);
			this._logger.debug('MobileUtilityService', '_initializeCommunication', 'response.update', responseUpdate, correlationId);
			if (this._hasFailed(responseUpdate))
				return responseUpdate;

			if (!response) {
				this._logger.debug('MobileUtilityService', '_initializeCommunication', 'no response', response, correlationId);
				response = this._successResponse({}, correlationId);
			}

			return response;
		}
		catch (err) {
			return this._error('MobileUtilityService', '_contentCommunication', null, err, null, null, correlationId);
		}
	}

	async _loggerCommunication(correlationId, content) {
		if (LibraryClientUtility.online)
			return await super._loggerCommunication(correlationId, content);
	}

	async _openSourceCommunication(correlationId) {
		try {
			let response = await this._serviceDatabase.openSource(correlationId);
			this._logger.debug('MobileUtilityService', '_openSourceCommunication', 'response.database', response, correlationId);
			if (this._hasFailed(response))
				return response;

			if (!LibraryCommonUtility.isNull(response.results)) {
				if (AppUtility.ttlDelta(response.results.ttl))
					return this._successResponse(response.results.json, correlationId);
			}

			if (!LibraryClientUtility.online) {
				this._logger.debug('MobileUtilityService', '_openSourceCommunication', 'requires data, not online', response, correlationId);
				return this._successResponse({}, correlationId);
			}

			response = await super._openSourceCommunication(correlationId);
			this._logger.debug('MobileUtilityService', '_openSourceCommunication', 'response.external', response, correlationId);
			if (this._hasFailed(response))
				return response;

			// Update in the database the external...
			const responseUpdate = await this._serviceDatabase.openSourceUpdate(correlationId, response.results);
			this._logger.debug('MobileUtilityService', '_openSourceCommunication', 'response.update', responseUpdate, correlationId);
			if (this._hasFailed(responseUpdate))
				return responseUpdate;

			if (!response) {
				this._logger.debug('MobileUtilityService', '_openSourceCommunication', 'no response', response, correlationId);
				response = this._successResponse({}, correlationId);
			}

			return response;
		}
		catch (err) {
			return this._error('MobileUtilityService', '_contentCommunication', null, err, null, null, correlationId);
		}
	}
}

export default MobileUtilityService;
