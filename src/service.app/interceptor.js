import AppConstants from '@/constants';

// import LibraryClientConstants from '@thzero/library_client/constants';

import LibraryClientUtility from '@thzero/library_client/utility/index';
// import LibraryCommonUtility from '@thzero/library_common/utility/index';

import CommunicationService from '@thzero/library_client/service/communication';

class InterceptorCommunicationService extends CommunicationService {
	constructor() {
		super();

		this._serviceRestCommunicationService = null;
	}

    async init(injector) {
		await super.init(injector);

		this._serviceRestCommunicationService = injector.getService(AppConstants.InjectorKeys.SERVICE_REST_COMMUNICATION_SECONDARY);
    }

	async delete(correlationId, key, url, options) {
		// if (LibraryClientUtility.online)
			return await this._serviceRestCommunicationService.delete(correlationId, key, url, options);

		// return null;
	}

	async deleteById(correlationId, key, url, id, options) {
		// if (LibraryClientUtility.online)
			return await this._serviceRestCommunicationService.deleteById(correlationId, key, url, id, options);

		// return null;
	}

	async get(correlationId, key, url, options) {
		// if (LibraryClientUtility.online)
			return await this._serviceRestCommunicationService.get(correlationId, key, url, options);

		// return null;
	}

	async getById(correlationId, key, url, id, options) {
		// if (LibraryClientUtility.online)
			return await this._serviceRestCommunicationService.get(correlationId, key, url, id, options);

		// return null;
	}

	async post(correlationId, key, url, body, options) {
		// if (LibraryClientUtility.online)
			return await this._serviceRestCommunicationService.post(correlationId, key, url, body, options);

		// return null;
	}

	async postById(correlationId, key, url, id, body, options) {
		// if (LibraryClientUtility.online)
			return await this._serviceRestCommunicationService.postById(correlationId, key, url, id, body, options);

		// return null;
	}
}

export default InterceptorCommunicationService;
