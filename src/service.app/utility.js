import LibraryClientUtility from '@thzero/library_client/utility/index';

import AppUtilityService from '@/service/utility';

class MobileUtilityService extends AppUtilityService {
	async _contentCommunication(correlationId, body) {
		return super._contentCommunication(correlationId, body);
	}

	async _contentMarkupCommunication(correlationId, contentId, body) {
		return super._contentMarkupCommunication(contentId, body);
	}

	async _initializeCommunication(correlationId) {
		return super._initializeCommunication(correlationId);
	}

	async _loggerCommunication(correlationId, content) {
		return super._loggerCommunication(correlationId, content);
	}

	async _openSourceCommunication(correlationId) {
		return super._openSourceCommunication(correlationId, content);
	}
}

export default MobileUtilityService;
