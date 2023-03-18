import NewsService from '@thzero/library_client/service/news';

class MobileNewsService extends NewsService {
	async _latestCommunication(correlationId) {
		return super._latestCommunication(correlationId);
	}
}

export default MobileNewsService;
