import AppConstants from '@/constants';

import checklistsService from '@/service.app/checklists';
import databaseService from '@/service.app/database/implementation/sqlite/index';
import checklistsDatabaseService from '@/service.app/database/implementation/sqlite/checklists';
import manufacturersDatabaseService from '@/service.app/database/implementation/sqlite/manufacturers';
import partsDatabaseService from '@/service.app/database/implementation/sqlite/parts';
import featuresService from '@/service.app/features';
import manufacturersService from '@/service.app/manufacturers';
import partsService from '@/service.app/parts';
import rocketsService from '@/service.app/rockets';
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

		this._injectService(AppConstants.InjectorKeys.SERVICE_DATABASE, new databaseService());
		this._injectService(AppConstants.InjectorKeys.SERVICE_DATABASE_CHECKLISTS, new checklistsDatabaseService());
		this._injectService(AppConstants.InjectorKeys.SERVICE_DATABASE_MANUFACTURERS, new manufacturersDatabaseService());
		this._injectService(AppConstants.InjectorKeys.SERVICE_DATABASE_PARTS, new partsDatabaseService());

		this._injectService(AppConstants.InjectorKeys.SERVICE_REST_COMMUNICATION_SECONDARY, new restCommunicationServiceSecondary());
	}

	_initializeChecklists() {
		return new checklistsService();
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

	_initializeManufacturers() {
		return new manufacturersService();
	}

	_initializeParts() {
		return new partsService();
	}

	_initializeRockets() {
		return new rocketsService();
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
