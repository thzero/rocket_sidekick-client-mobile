import AppConstants from '@/constants';

import LibraryClientUtility from '@thzero/library_client/utility/index';

import PartsService from '@/service/parts';

class MobilePartsService extends PartsService {
	constructor() {
		super();

		this._serviceDatabase = null;
	}

	async init(injector) {
		await super.init(injector);

		this._serviceDatabase = this._injector.getService(AppConstants.InjectorKeys.SERVICE_DATABASE_PARTS);
	}

	async _listingCommunication(correlationId, params) {
		if (LibraryClientUtility.online)
			return super._listingCommunication(correlationId, params);

		const response = this._serviceDatabase.parts(correlationId, params);
		this._logger.debug('MobilePartsService', '_listingCommunication', 'response', response, correlationId);
		return response;
	}

	async _retrieveCommunication(correlationId, id) {
		if (LibraryClientUtility.online)
			return super._retrieveCommunication(correlationId, params);

		const response = this._serviceDatabase.parts(correlationId, params);
		this._logger.debug('MobilePartsService', '_listingCommunication', 'response', response, correlationId);
		return response;
	}
}

export default MobilePartsService;
