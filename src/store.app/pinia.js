import AppStore from '@/store/pinia';

class MobileAppStore extends AppStore {
	_initPluginPersistConfigPaths() {
		return [];
	}

}

export default MobileAppStore;
