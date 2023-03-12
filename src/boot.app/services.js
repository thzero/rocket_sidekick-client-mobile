import AppConstants from '@/utility/constants';

import featuresService from '@/service.app/features';
import restCommunicationService from '@/service.app/interceptor';
import newsService from '@/service.app/news';
import userService from '@/service.app/user';
import utilityService from '@/service.app/utility';
import versionService from '@/service.app/version';

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

	_initializeFeatures() {
		return new featuresService();
	}

	_initializeNews() {
		return new newsService();
	}

	_initializeUser() {
		return new userService();
	}

	_initializeUtility() {
		return new utilityService();
	}

	_initializeVersion() {
		return new versionService();
	}
}

export default AppServiceBoot;
