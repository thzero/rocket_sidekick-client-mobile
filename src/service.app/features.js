import FeaturesService from '@/service/features';

class MobileFeatureService extends FeaturesService {
	_featuresOverride(features) {
		features.CookieComply = false;
		features.MobileAppLanding = false;
		features.MobileOnly = true;
		features.Auth = true;
	}
}

export default MobileFeatureService;
