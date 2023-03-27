import BaseChecklistsDatabaseService from '@/service.app/database/checklists';

class ChecklistsDatabaseService extends BaseChecklistsDatabaseService {
	async checklist(correlationId, id) {
		return this._serviceDatabase.selectJsonById(correlationId, ChecklistsDatabaseService.TableNameChecklists, id);
	}

	async checklists(correlationId, params) {
		return this._serviceDatabase.selectJson(correlationId, ChecklistsDatabaseService.TableNameChecklists, '*');
	}

	async checklistsClear(correlationId) {
	}

	async checklistsIsEmpty(correlationId) {
	}

	async checklistsLoad(correlationId, id, checklist) {
		this._serviceDatabase.insert(correlationId, ChecklistsDatabaseService.TableNameChecklists, id, checklist);
	}

	static TableNameChecklists = 'checklists';
}

export default ChecklistsDatabaseService;
