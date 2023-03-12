import FeaturesService from '@/service/features';

class AppFeatureService extends FeaturesService {
	features() {
		const features = super.features();
		features.CookieComply = false;
		return features;
	}
}

export default AppFeatureService;
