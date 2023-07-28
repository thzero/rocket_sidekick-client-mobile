import { getApp, initializeApp } from 'firebase/app';
import {
	// getAuth,
	// onAuthStateChanged,
	indexedDBLocalPersistence,
	initializeAuth
} from 'firebase/auth';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';

// import LibraryClientConstants from '@thzero/library_client/constants';

// import LibraryClientUtility from '@thzero/library_client/utility/index';
import LibraryCommonUtility from '@thzero/library_common/utility';

import FirebaseAuthService from '@thzero/library_client_firebase_vue/service/index';
import Utility from '@thzero/library_common/utility';

class AppFirebaseAuthService extends FirebaseAuthService {
	async init(injector) {
		await super.init(injector);
	}

	// initialize(correlationId, router) {
	// 	const configExternal = this._config.getExternal();
	// 	if (!configExternal)
	// 		throw Error('Invalid external config.');
	// 	const configFirebase = configExternal.firebase;
	// 	if (!configFirebase)
	// 		throw Error('Invalid firebase config.');

	// 	initializeApp(configFirebase);
	// 	this._auth = initializeAuth(getApp(), {
	// 		persistence: indexedDBLocalPersistence
	// 	});

	// 	let outsideResolve;
	// 	let outsideReject;
	// 	const promiseAuth = new Promise(function(resolve, reject) {
	// 		outsideResolve = resolve;
	// 		outsideReject = reject;
	// 	});

	// 	// FirebaseAuthentication listeners are only avaiable when using non-native JS SDK
	// 	// but this is using the native Firebase SDK as the WebViews do not support popups for
	// 	// authentication
	// 	// FirebaseAuthentication.removeAllListeners().then(() => {
	// 	// 	// doesn't seem to be fired from the native side, native side is firing the event.
	// 	// 	FirebaseAuthentication.addListener('authStateChange', async (change) => {
	// 	// 		try {
	// 	// 			const auth = LibraryClientUtility.$injector.getService(LibraryClientConstants.InjectorKeys.SERVICE_AUTH);
	// 	// 			await auth.onAuthStateChanged(user);
	// 	// 		}
	// 	// 		catch(ex) {
	// 	// 			console.log('authStateChange', ex);
	// 	// 		}
	// 	// 	});
	// 	// });

	// 	// https://github.com/capawesome-team/capacitor-firebase/issues/159#issuecomment-1194667877
	// 	// get reference to the Firebase auth state change.
	// 	// https://firebase.google.com/docs/auth/web/manage-users#web-version-9
	// 	// does not seem to work, or at least it does not fire when a user authenticates
	// 	// onAuthStateChanged(this._auth, (user) => {
	// 	// 	try {
	// 	// 		const auth = LibraryClientUtility.$injector.getService(LibraryClientConstants.InjectorKeys.SERVICE_AUTH);
	// 	// 		await auth.onAuthStateChanged(user);
	// 	// 	}
	// 	// 	catch(ex) {
	// 	// 		console.log('onAuthStateChanged', ex);
	// 	// 	}
	// 	// });

	// 	const self = this;
	// 	(async () => {
	// 		// const userResult = await FirebaseAuthentication.getCurrentUser();
	// 		const user = await self.getExternalUser();
	// 		if (await this.isAuthenticated()) {}
	// 			this.updateExternalUser(correlationId, user);

	// 		outsideResolve(true);
	// 	})();

	// 	return promiseAuth;
	// }

	async getExternalUser() {
		const userResult = await FirebaseAuthentication.getCurrentUser();
		this._logger.debug('FirebaseAuthService', 'getExternalUser', 'userResult', userResult);
		const user = Utility.isNotNull(userResult) ? userResult.user : null;
		return user;
	}

	async isAuthenticated() {
		const userResult = await FirebaseAuthentication.getCurrentUser();
		this._logger.debug('FirebaseAuthService', 'isAuthenticated', 'userResult', userResult);
		const success = Utility.isNotNull(userResult) && Utility.isNotNull(userResult.user);
		return success;
	}

	async refreshTokenResult(correlationId, forceRefresh) {
		const result = {
			// The @capacitor-firebase/authentication does not share any claims
			claimns: [],
			token: null,
			// The @capacitor-firebase/authentication does not share any expiration time for the token
			// Default it to current date time
			expirationTime: LibraryCommonUtility.getDate()
		}
		const token = await FirebaseAuthentication.getIdToken({ forceRefresh: forceRefresh });
		result.token = token ? token.token : null;
		return result;
	}

	async refreshTokenExpiration(correlationId, tokenResult, user) {
	}

	async signIn(correlationId) {
		if (await this.isAuthenticated())
			return false;

		try {
			const result = await FirebaseAuthentication.signInWithGoogle();
			if (result && result.user) {
				this.updateExternalUser(correlationId, result.user);

				this._serviceRouter.route('/')
				// window.location.href = '/';

				return true;
			}

			this.updateExternalUser(correlationId, null);
		}
		catch (err) {
			this._logger.exception('FirebaseAuthService', 'signIn', err, correlationId);
			this.updateExternalUser(correlationId, null);
		}
	}

	async signOut(correlationId) {
		try {
			const list = [];
			list.push(FirebaseAuthentication.signOut());
			list.push(this._serviceUser.resetUser(correlationId));
			list.push(this._serviceUser.setAuthCompleted(correlationId, false));

			await Promise.all(list);

			// this._serviceRouter.route('/')
			window.location.href = '/';
		}
		catch (err) {
			this._logger.exception('FirebaseAuthService', 'signOut', err, correlationId);
		}
	}

	_initializeAnalytics(correlationId, configExternal, configFirebase) {
	}

	_initializeAuth(correlationId, configExternal, configFirebase, outsideResolve, outsideReject) {
		this._auth = initializeAuth(getApp(), {
			persistence: indexedDBLocalPersistence
		});

		// FirebaseAuthentication listeners are only avaiable when using non-native JS SDK
		// but this is using the native Firebase SDK as the WebViews do not support popups for
		// authentication
		// FirebaseAuthentication.removeAllListeners().then(() => {
		// 	// doesn't seem to be fired from the native side, native side is firing the event.
		// 	FirebaseAuthentication.addListener('authStateChange', async (change) => {
		// 		try {
		// 			const auth = LibraryClientUtility.$injector.getService(LibraryClientConstants.InjectorKeys.SERVICE_AUTH);
		// 			await auth.onAuthStateChanged(user);
		// 		}
		// 		catch(ex) {
		// 			console.log('authStateChange', ex);
		// 		}
		// 	});
		// });

		// https://github.com/capawesome-team/capacitor-firebase/issues/159#issuecomment-1194667877
		// get reference to the Firebase auth state change.
		// https://firebase.google.com/docs/auth/web/manage-users#web-version-9
		// does not seem to work, or at least it does not fire when a user authenticates
		// onAuthStateChanged(this._auth, (user) => {
		// 	try {
		// 		const auth = LibraryClientUtility.$injector.getService(LibraryClientConstants.InjectorKeys.SERVICE_AUTH);
		// 		await auth.onAuthStateChanged(user);
		// 	}
		// 	catch(ex) {
		// 		console.log('onAuthStateChanged', ex);
		// 	}
		// });

		const self = this;
		(async () => {
			// const userResult = await FirebaseAuthentication.getCurrentUser();
			const user = await self.getExternalUser();
			if (await this.isAuthenticated()) {}
				this.updateExternalUser(correlationId, user);

			outsideResolve(true);
		})();
	}
}

export default AppFirebaseAuthService;
