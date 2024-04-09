import AppConstants from '@/constants';

import authService from '@/service.app/auth';
import checklistsDatabaseService from '@/service.app/database/implementation/sqlite/checklists';
import checklistsService from '@/service.app/checklists';
import countriesService from '@/service/countries';
import databaseService from '@/service.app/database/implementation/sqlite/index';
import featuresService from '@/service.app/features';
import launchesService from '@/service/launches';
import locationsService from '@/service/locations';
import manufacturersDatabaseService from '@/service.app/database/implementation/sqlite/manufacturers';
import manufacturersService from '@/service.app/manufacturers';
import newsDatabaseService from '@/service.app/database/implementation/sqlite/news';
import partsDatabaseService from '@/service.app/database/implementation/sqlite/parts';
import partsService from '@/service.app/parts';
import restCommunicationService from '@/service.app/interceptor';
import rocketsService from '@/service.app/rockets';
import rocketSetupsService from '@/service/rocketSetups';
import newsService from '@/service.app/news';
import userService from '@/service.app/user';
import utilityService from '@/service.app/utility';
import utilityDatabaseService from '@/service.app/database/implementation/sqlite/utility';
import versionService from '@/service.app/version';

import restCommunicationServiceSecondary from '@thzero/library_client_service_rest_fetch';

import BaseServiceBoot from '@/boot/services';

class AppServiceBoot extends BaseServiceBoot {
	_initialize() {
		super._initialize();

		this._injectService(AppConstants.InjectorKeys.SERVICE_DATABASE, new databaseService());
		this._injectService(AppConstants.InjectorKeys.SERVICE_DATABASE_CHECKLISTS, new checklistsDatabaseService());
		this._injectService(AppConstants.InjectorKeys.SERVICE_DATABASE_MANUFACTURERS, new manufacturersDatabaseService());
		this._injectService(AppConstants.InjectorKeys.SERVICE_DATABASE_NEWS, new newsDatabaseService());
		this._injectService(AppConstants.InjectorKeys.SERVICE_DATABASE_PARTS, new partsDatabaseService());
		this._injectService(AppConstants.InjectorKeys.SERVICE_DATABASE_UTILITY, new utilityDatabaseService());

		this._injectService(AppConstants.InjectorKeys.SERVICE_REST_COMMUNICATION_SECONDARY, new restCommunicationServiceSecondary());
	}

	_initializeAuth() {
		return new authService();
	}

	_initializeChecklists() {
		return new checklistsService();
	}

	_initializeCommunicationRest() {
		return new restCommunicationService();
	}

	_initializeCountries() {
		return new countriesService();
	}

	_initializeFeatures() {
		return new featuresService();
	}

	_initializeLaunches() {
		return new launchesService();
	}

	_initializeLocations() {
		return new locationsService();
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

	_initializeRocketSetups() {
		return new rocketSetupsService();
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
