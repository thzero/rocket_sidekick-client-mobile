import restCommunicationService from '@/service.app/interceptor';

import BaseServiceBoot from '@/boot/services';

class AppServiceBoot extends BaseServiceBoot {
	_initialize() {
		super._initialize();
	}

	_initializeCommunicationRest() {
		return new restCommunicationService();
	}
}

export default AppServiceBoot;
