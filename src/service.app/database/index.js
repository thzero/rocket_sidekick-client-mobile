import AppConstants from '@/constants';

import LibraryCommonUtility from '@thzero/library_common/utility';

import Service from '@thzero/library_client/service/index';

class BaseDatabaseService extends Service {
	constructor() {
		super();

		this._serviceDatabase = null;
	}

	async init(injector) {
		await super.init(injector);

		this._serviceDatabase = this._injector.getService(AppConstants.InjectorKeys.SERVICE_DATABASE);

		await this._load(LibraryCommonUtility.correlationId());
	}

	async _load(correlationId) {
	}
}

export default BaseDatabaseService;
