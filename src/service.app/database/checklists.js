// import LibraryCommonUtility from '@thzero/library_common/utility';

import NotImplementedError from '@thzero/library_common/errors/notImplemented';

import BaseDatabaseService from '@/service.app/database/index';

class ChecklistsDatabaseService extends BaseDatabaseService {
	async checklist(correlationId, id) {
		throw NotImplementedError();
	}

	async checklists(correlationId, params) {
		throw NotImplementedError();
	}

	async checklistsClear(correlationId) {
		throw NotImplementedError();
	}

	async checklistsIsEmpty(correlationId) {
		throw NotImplementedError();
	}

	async _load(correlationId) {
		for (const item of defaultData) {
			this.checklistsLoad(correlationId, item.id, {
				json: JSON.stringify(item),
				name: item.name,
				typeIds: item.types.join(',')
			});
		}
	}
}

export default ChecklistsDatabaseService;
