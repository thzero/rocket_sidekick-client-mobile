import FeaturesService from '@/service/features';

class MobileFeatureService extends FeaturesService {
	_featuresOverride(features) {
		features.CookieComply = false;
		features.MobileAppLanding = false;
		features.MobileOnly = true;
		features.Auth = true;
		features.Home.additional = true;
		features.Home.additionalId = 'strings.content.home.tools.mobile';
		features.Home.slideshow = false;
	}
}

export default MobileFeatureService;
