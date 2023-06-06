import UserService from '@/service/user';

class MobileUserService extends UserService {
	async _fetchByGamerIdCommunication(correlationId, gamerId) {
		return super._fetchByGamerIdCommunication(correlationId, gamerId);
	}

	async _fetchByGamerTagCommunication(correlationId, gamerTag) {
		return super._fetchByGamerTagCommunication(correlationId, gamerId);
	}

	async _refreshSettingsCommunication(correlationId, user) {
		return super._refreshSettingsCommunication(correlationId, user);
	}

	async _updateExternalCommunication(correlationId, user) {
		return super._updateExternalCommunication(correlationId, user);
	}

	async _updateSettingsCommunications(correlationId, user, settings) {
		return super._updateSettingsCommunications(correlationId, user, settings);
	}
}

export default MobileUserService;
