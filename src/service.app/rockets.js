import AppConstants from '@/constants';

import LibraryClientUtility from '@thzero/library_client/utility/index';

import RocketsService from '@/service/rockets';

class MobileRocketsService extends RocketsService {
	constructor() {
		super();

		this._serviceDatabase = null;
	}

	// async init(injector) {
	// 	await super.init(injector);

	// 	this._serviceDatabase = this._injector.getService(AppConstants.InjectorKeys.SERVICE_DATABASE_ROCKETS);
	// }
}

export default MobileRocketsService;
