import AppConstants from '@/constants';

import LibraryCommonUtility from '@thzero/library_common/utility';

import NewsService from '@thzero/library_client/service/news';

class MobileNewsService extends NewsService {
	constructor() {
		super();

		this._serviceDatabase = null;
		this._ttl = 0;
	}

	async init(injector) {
		await super.init(injector);

		this._serviceDatabase = this._injector.getService(AppConstants.InjectorKeys.SERVICE_DATABASE_NEWS);
	}

	async _latestCommunication(correlationId) {
		try {
			let response = await this._serviceDatabase.latest(correlationId);
			this._logger.debug('MobileNewsService', '_latestCommunication', 'response.database', response, correlationId);
			if (this._hasFailed(response))
				return response;

			if (!LibraryCommonUtility.isNull(response.results)) {
				// are they online? if so refresh if the online TTL has expried
				let refresh = !LibraryClientUtility.online ? AppUtility.ttlDelta(this._ttl) : false;
				// is the data old?
				refresh |= AppUtility.ttlDelta(response.results.ttl);
				// if no refresh, then return
				if (!refresh)
					return this._successResponse([], correlationId);
			}

			if (!LibraryClientUtility.online) {
				this._logger.debug('MobileNewsService', '_latestCommunication', 'requires data, not online', response, correlationId);
				return this._successResponse([], correlationId);
			}

			response = await super._latestCommunication(correlationId, params);
			this._logger.debug('MobileNewsService', '_latestCommunication', 'response.external', response, correlationId);
			if (this._hasFailed(response))
				return response;
			this._ttl = LibraryCommonUtility.getTimestamp() + 30 * 60 * 1000;

			// Update in the database the external...
			const responseUpdate = await this._serviceDatabase.update(correlationId, response.results);
			this._logger.debug('MobileNewsService', '_latestCommunication', 'response.update', responseUpdate, correlationId);
			if (this._hasFailed(responseUpdate))
				return responseUpdate;

			if (!response) {
				this._logger.debug('MobileNewsService', '_latestCommunication', 'no response', response, correlationId);
				response = this._successResponse([], correlationId);
			}

			return response;
		}
		catch (err) {
			return this._error('MobileNewsService', '_latestCommunication', null, err, null, null, correlationId);
		}
	}
}

export default MobileNewsService;
