import AppConstants from '@/utility/constants';

import AppUtility from '@/utility/app';

import VueCookieComply from '@thzero/library_client_vue3_vuetify3/boot/cookie';

class AppCookieComplyBoot extends VueCookieComply {
	// eslint-disable-next-line
	async execute(framework, app, router) {
		const features = AppConstants.Features;
		features.CookieComply = false;
		AppUtility.features = features;
	}
}

export default AppCookieComplyBoot;
