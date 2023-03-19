import BasePartsDatabaseService from '@/service.app/database/parts';

class PartsDatabaseService extends BasePartsDatabaseService {
	async doh(correlationId) {
		const response = await this._serviceDatabase.query('SELECT * FROM test');
		if (this._hasFailed(response))
			return response;
		const response2 = await this._serviceDatabase.query('SELECT * FROM checklists');
		if (this._hasFailed(response2))
			return response;
		return this._successResponse([ response.results, response2.results ], correlationId);
	}

	async manufacturer(correlationId, id) {
		return this._serviceDatabase.selectById(correlationId, PartsDatabaseService.TableNameParts, id);
	}

	async parts(correlationId, params) {
		return this._serviceDatabase.select(correlationId, PartsDatabaseService.TableNameParts, '*');
	}

	async partsClear(correlationId) {
	}

	async partsIsEmpty(correlationId) {
	}

	async partsLoad(correlationId, id, manufacturer) {
		this._serviceDatabase.insert(correlationId, PartsDatabaseService.TableNameParts, id, manufacturer);
	}

	static TableNameParts = 'parts';
}

export default PartsDatabaseService;
