import FeaturesService from '@/service/features';

class AppFeatureService extends FeaturesService {
	features() {
		const features = super.features();
		features.CookieComply = false;
		features.MobileAppLanding = false;
		features.MobileOnly = true;
		return features;
	}
}

export default AppFeatureService;
