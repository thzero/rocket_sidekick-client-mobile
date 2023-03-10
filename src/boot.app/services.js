import AppConstants from '@/utility/constants';

import restCommunicationService from '@/service.app/interceptor';

import restCommunicationServiceSecondary from '@thzero/library_client_service_rest_fetch';

import BaseServiceBoot from '@/boot/services';

class AppServiceBoot extends BaseServiceBoot {
	_initialize() {
		super._initialize();

		this._injectService(AppConstants.InjectorKeys.SERVICE_REST_COMMUNICATION_SECONDARY, new restCommunicationServiceSecondary());
	}

	_initializeCommunicationRest() {
		return new restCommunicationService();
	}
}

export default AppServiceBoot;
