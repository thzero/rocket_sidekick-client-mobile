import BaseChecklistsDatabaseService from '@/service.app/database/checklists';

class ChecklistsDatabaseService extends BaseChecklistsDatabaseService {
	async doh(correlationId) {
		const response = await this._serviceDatabase.query('SELECT * FROM test');
		if (this._hasFailed(response))
			return response;
		const response2 = await this._serviceDatabase.query('SELECT * FROM checklists');
		if (this._hasFailed(response2))
			return response;
		return this._successResponse([ response.results, response2.results ], correlationId);
	}

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
