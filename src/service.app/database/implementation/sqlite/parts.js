import BasePartsDatabaseService from '@/service.app/database/parts';

class PartsDatabaseService extends BasePartsDatabaseService {
	async parts(correlationId, params) {
		return await this._serviceDatabase.selectJson(correlationId, PartsDatabaseService.TableNameParts, '*');
	}

	async partsClear(correlationId) {
	}

	async partsIsEmpty(correlationId) {
	}

	async partsLoad(correlationId, id, manufacturer) {
		await this._serviceDatabase.insert(correlationId, PartsDatabaseService.TableNameParts, id, manufacturer);
	}

	static TableNameParts = 'parts';
}

export default PartsDatabaseService;
