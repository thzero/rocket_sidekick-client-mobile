import AppConstants from '@/utility/constants';
import LibraryClientConstants from '@thzero/library_client/constants.js';

import LibraryClientUtility from '@thzero/library_client/utility/index';

import ManufacturersService from '@/service/manufacturers';

class MobileManufacturersService extends ManufacturersService {
	constructor() {
		super();

		this._serviceDatabase = null;
	}

	async init(injector) {
		await super.init(injector);

		this._serviceDatabase = this._injector.getService(AppConstants.InjectorKeys.SERVICE_DATABASE_MANUFACTURERS);
	}

	async _listingCommunication(correlationId, params) {
		if (LibraryClientUtility.online)
			return super._listingCommunication(correlationId, params);

		const response = this._serviceDatabase.manufacturers(correlationId, params);
		this._logger.debug('ManufacturersService', '_listingCommunication', 'response', response, correlationId);
		return response;
	}

	async _retrieveCommunication(correlationId, id) {
		if (LibraryClientUtility.online)
			return super._retrieveCommunication(correlationId, params);

		const response = this._serviceDatabase.manufacturers(correlationId, params);
		this._logger.debug('ManufacturersService', '_listingCommunication', 'response', response, correlationId);
		return response;
	}
}

export default MobileManufacturersService;
