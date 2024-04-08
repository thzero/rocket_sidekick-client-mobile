import VersionService from '@/service/version';

class AppVersionService extends VersionService {
	async _versionCommunication(correlationId) {
		const response = this._success(correlationId);
		response.success = false;
		return response;
	}
}

export default AppVersionService;
