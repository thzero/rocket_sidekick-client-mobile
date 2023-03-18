import LibraryClientUtility from '@thzero/library_client/utility/index';

import VersionService from '@/service/version';

class AppVersionService extends VersionService {
	async _versionCommunication(correlationId) {
		return super._versionCommunication(correlationId);
	}
}

export default AppVersionService;
