import LibraryCommonUtility from '@thzero/library_common/utility';

import Service from '@thzero/library_client/service/index';

class DatabaseImplementationService extends Service {
	async init(injector) {
		await super.init(injector);

		await this._initialize(LibraryCommonUtility.correlationId());
	}

	async _initialize(correlationId) {
	}
}

export default DatabaseImplementationService;
