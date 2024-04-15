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

	async manufacturersUpdate(correlationId, manufacturers) {
		this._enforceNotNull('ManufacturersDatabaseService', 'manufacturersUpdate', manufacturers, 'manufacturers', correlationId);

		let response = null;
		try {
			const ttl = LibraryMomentUtility.getTimestamp() + this._ttlDefault;
			for (const item of manufacturers) {
				response = await this._serviceDatabase.insert(correlationId, ManufacturersDatabaseService.TableNameManufacturers, item.id, {
					json: JSON.stringify(item),
					name: item.name,
					typeIds: item.types.join(','),
					ttl: ttl
				});
				if (this._hasFailed(response))
					return response;
			}
		}
		catch (err) {
			return this._error('ChecklistsService', 'delete', null, err, null, null, correlationId);
		}
		return response;
	}

	static TableNameManufacturers = 'manufacturers';
}

export default ManufacturersDatabaseService;
