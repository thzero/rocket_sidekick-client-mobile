import AppConstants from '@/utility/constants';
import LibraryClientConstants from '@thzero/library_client/constants.js';

import LibraryClientUtility from '@thzero/library_client/utility/index';
import LibraryCommonUtility from '@thzero/library_common/utility';

import Response from '@thzero/library_common/response';

import AppStore from '@/store/pinia';

class MobileAppStore extends AppStore {
	_initPluginPersistConfig() {
		return {
			persist: {
				key: 'rocketsidekick',
				storage: localStorage,
				paths: [
					'motorSearchCriteria',
					'motorSearchResults'
				]
			}
			// persist2: {
			// 	key: 'rocketsidekick',
			// 	includePaths: [
			// 		'manufacturers',
			// 		'motorSearchCriteria',
			// 		'motorSearchResults',
			// 	]
			// }
		};
	}
}

export default MobileAppStore;
