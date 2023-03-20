import AppConstants from '@/constants';

// import LibraryClientUtility from '@thzero/library_client/utility/index';

import ChecklistsService from '@/service/checklists';

class MobileChecklistsService extends ChecklistsService {
	constructor() {
		super();

		this._serviceDatabase = null;
	}

	async init(injector) {
		await super.init(injector);

		this._serviceDatabase = this._injector.getService(AppConstants.InjectorKeys.SERVICE_DATABASE_CHECKLISTS);
	}

	async _listingCommunication(correlationId, params) {
		// if (LibraryClientUtility.online)
		// 	return super._listingCommunication(correlationId, params);

		const response = await this._serviceDatabase.checklists(correlationId, params);
		this._logger.debug('MobileChecklistsService', '_listingCommunication', 'response', response, correlationId);
		if (this._hasFailed(response))
			return response;
		response.results = { data: response.results }; // match standard http response
		return response;
	}

	async _retrieveCommunication(correlationId, id) {
		// if (LibraryClientUtility.online)
		// 	return super._retrieveCommunication(correlationId, params);

		const response = await this._serviceDatabase.checklists(correlationId, params);
		this._logger.debug('MobileChecklistsService', '_listingCommunication', 'response', response, correlationId);
		if (this._hasFailed(response))
			return response;
		response.results = { data: response.results }; // match standard http response
		return response;
	}
}

export default MobileChecklistsService;
