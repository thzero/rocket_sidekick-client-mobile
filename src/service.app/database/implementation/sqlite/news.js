import BaseUtilityDatabaseService from '@/service.app/database/utility';

import LibraryMomentUtility from '@thzero/library_common/utility/moment';

class NewsDatabaseService extends BaseUtilityDatabaseService {
	constructor() {
		super();

		this._ttlDefault = 60 * 60 * 1000;
	}

	async latest(correlationId) {
		return await this._serviceDatabase.selectJson(correlationId, NewsDatabaseService.TableNameNews, '*');
	}

	async update(correlationId, news) {
		this._enforceNotNull('NewsDatabaseService', 'contentUpdate', news, 'news', correlationId);

		let ttl = LibraryMomentUtility.getTimestamp() + this._ttlDefault;
		const response = await this._serviceDatabase.upcert(correlationId, NewsDatabaseService.TableNameNews, NewsDatabaseService.IdContent, { json: JSON.stringify(news), ttl: ttl });
		return response;
	}

	async initialize(correlationId) {
		return await this._serviceDatabase.selectJsonById(correlationId, NewsDatabaseService.TableNameInitialize, NewsDatabaseService.IdInitialize);
	}

	async initializeUpdate(correlationId, content) {
		this._enforceNotNull('NewsDatabaseService', 'initializeUpdate', content, 'content', correlationId);

		let ttl = LibraryMomentUtility.getTimestamp() + this._ttlDefault;
		const response = await this._serviceDatabase.upcert(correlationId, NewsDatabaseService.TableNameInitialize, NewsDatabaseService.IdInitialize, { json: JSON.stringify(content), ttl: ttl });
		return response;
	}

	async openSource(correlationId) {
		return await this._serviceDatabase.selectJsonById(correlationId, NewsDatabaseService.TableNameOpenSource, NewsDatabaseService.IdOpenSource);
	}

	async openSourceUpdate(correlationId, content) {
		this._enforceNotNull('NewsDatabaseService', 'openSourceUpdate', content, 'content', correlationId);

		let ttl = LibraryMomentUtility.getTimestamp() + this._ttlDefault;
		const response = await this._serviceDatabase.upcert(correlationId, NewsDatabaseService.TableNameOpenSource, NewsDatabaseService.IdOpenSource, { json: JSON.stringify(content), ttl: ttl });
		return response;
	}

	static IdContent = 'contentListing';
	static TableNameNews = 'news';
}

export default NewsDatabaseService;
