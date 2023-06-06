import BaseManufacturersDatabaseService from '@/service.app/database/manufacturers';

class ManufacturersDatabaseService extends BaseManufacturersDatabaseService {
	async manufacturer(correlationId, id) {
		return await this._serviceDatabase.selectJsonById(correlationId, ManufacturersDatabaseService.TableNameManufacturers, id);
	}

	async manufacturers(correlationId, params) {
		return await this._serviceDatabase.selectJson(correlationId, ManufacturersDatabaseService.TableNameManufacturers, '*');
	}

	async manufacturersClear(correlationId) {
	}

	async manufacturersIsEmpty(correlationId) {
	}

	async manufacturersLoad(correlationId, id, manufacturer) {
		await this._serviceDatabase.insert(correlationId, ManufacturersDatabaseService.TableNameManufacturers, id, manufacturer);
	}

	static TableNameManufacturers = 'manufacturers';
}

export default ManufacturersDatabaseService;
