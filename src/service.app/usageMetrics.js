import UsageMetricsService from '@thzero/library_client/service/usageMetrics';

class AppUsageMetricsService extends UsageMetricsService {
	async _listingCommunication(correlationId, params) {
		// TODO
		return this._success(correlationId);
	}

	async _tagCommunication(correlationId, tag) {
		// TODO
		return this._success(correlationId);
	}
}

export default AppUsageMetricsService;
