// import LibraryCommonUtility from '@thzero/library_common/utility';

import NotImplementedError from '@thzero/library_common/errors/notImplemented';

import BaseDatabaseService from '@/service.app/database/index';

class PartsDatabaseService extends BaseDatabaseService {
	async manufacturer(correlationId, id) {
		throw NotImplementedError();
	}

	async parts(correlationId, params) {
		throw NotImplementedError();
	}

	async partsClear(correlationId) {
		throw NotImplementedError();
	}

	async partsIsEmpty(correlationId) {
		throw NotImplementedError();
	}

	async _load(correlationId) {
		// for (const item of defaultData) {
		// 	this.partsLoad(correlationId, item.id, {
		// 		json: JSON.stringify(item),
		// 		name: item.name,
		// 		typeIds: item.types.join(',')
		// 	});
		// }
	}
}

export default PartsDatabaseService;
