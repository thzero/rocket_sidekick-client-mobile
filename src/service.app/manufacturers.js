import AppConstants from '@/constants';

// import LibraryClientUtility from '@thzero/library_client/utility/index';

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

		let response = await this._serviceDatabase.manufacturers(correlationId, params);
		this._logger.debug('MobileManufacturersService', '_listingCommunication', 'response', response, correlationId);
		if (this._hasFailed(response))
			return response;
		response.results = { data: response.results }; // match standard http response

		// Update in the database the external...
		// const responseUpdate = await this._serviceDatabase.contentUpdate(correlationId, response.results);
		// this._logger.debug('MobileUtilityService', '_contentCommunication', 'response.update', responseUpdate, correlationId);
		// if (this._hasFailed(responseUpdate))
		// 	return responseUpdate;

		if (!response) {
			this._logger.debug('MobileUtilityService', '_contentCommunication', 'no response', response, correlationId);
			response = this._successResponse([], correlationId);
		}

		return response;
	}

	async _retrieveCommunication(correlationId, id) {
		// if (LibraryClientUtility.online)
		// 	return super._retrieveCommunication(correlationId, params);

		const response = await this._serviceDatabase.manufacturers(correlationId, params);
		this._logger.debug('MobileManufacturersService', '_listingCommunication', 'response', response, correlationId);
		if (this._hasFailed(response))
			return response;
		response.results = { data: response.results }; // match standard http response
		return response;
	}
}

export default MobileManufacturersService;
