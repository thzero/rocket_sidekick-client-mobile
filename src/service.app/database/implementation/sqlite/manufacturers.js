import BaseManufacturersDatabaseService from '@/service.app/database/manufacturers';

class ManufacturersDatabaseService extends BaseManufacturersDatabaseService {
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
		return this._serviceDatabase.selectById(correlationId, ManufacturersDatabaseService.TableNameManufacturers, id);
	}

	async manufacturers(correlationId, params) {
		return this._serviceDatabase.select(correlationId, ManufacturersDatabaseService.TableNameManufacturers, '*');
	}

	async manufacturersClear(correlationId) {
	}

	async manufacturersIsEmpty(correlationId) {
	}

	async manufacturersLoad(correlationId, id, manufacturer) {
		this._serviceDatabase.insert(correlationId, ManufacturersDatabaseService.TableNameManufacturers, id, manufacturer);
	}

	static TableNameManufacturers = 'manufacturers';
}

export default ManufacturersDatabaseService;
