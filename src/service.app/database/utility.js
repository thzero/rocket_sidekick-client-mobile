// import LibraryCommonUtility from '@thzero/library_common/utility';

import NotImplementedError from '@thzero/library_common/errors/notImplemented';

import BaseDatabaseService from '@/service.app/database/index';

class BaseUtilityDatabaseService extends BaseDatabaseService {
	async content(correlationId, params) {
		throw NotImplementedError();
	}

	async contentMarkup(correlationId, params) {
		throw NotImplementedError();
	}

	async contentMarkupUpdate(correlationId, content) {
		throw NotImplementedError();
	}

	async contentUpdate(correlationId, content) {
		throw NotImplementedError();
	}

	async initialize(correlationId) {
		throw NotImplementedError();
	}

	async initializeUpdate(correlationId, content) {
		throw NotImplementedError();
	}

	async openSource(correlationId) {
		throw NotImplementedError();
	}

	async openSourceUpdate(correlationId, content) {
		throw NotImplementedError();
	}
}

export default BaseUtilityDatabaseService;
