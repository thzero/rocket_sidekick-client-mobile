<template>
	<v-list density="compact">
		<v-list-item
			to="/"
		>
			<v-list-item-title>{{ $t('titles.home') }}</v-list-item-title>
		</v-list-item>
		<v-list-item
			v-if="displayRockets"
			prepend-icon="mdi-rocket"
			to="/rockets"
		>
			<v-list-item-title>{{ $t('menu.content.rockets.title') }}</v-list-item-title>
		</v-list-item>
		<!-- <v-list-group value="Info"  density="compact">
			<template v-slot:activator="{ props }">
				<v-list-item
					v-bind="props"
					prepend-icon="mdi-account-circle"
					:title="$t('menu.content.info.title')"
				></v-list-item>
			</template>
			<v-list-item
				v-for="item in info"
				:key="item.name"
				:to="contentLink(item)"
			>
				<v-list-item-title>{{ contentTitle(item) }}</v-list-item-title>
			</v-list-item>
		</v-list-group> -->
		<!-- <v-list-item
			prepend-icon="mdi-information-outline"
		>
			{{ $t('menu.content.info.title') }}
			<v-list density="compact">
				<v-list-item
					v-for="item in info"
					:key="item.name"
					:to="contentLink(item)"
				>
					<v-list-item-title>{{ contentTitle(item) }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-list-item> -->
		<!-- <v-list-item
			v-if="features.Rocket"
			to="/rockets"
		>
			<v-list-item-title>{{ $t('menu.content.rockets.title') }}</v-list-item-title>
		</v-list-item> -->
		<!-- <v-list-group value="Tools" density="compact">
			<template v-slot:activator="{ props }">
				<v-list-item
					v-bind="props"
					prepend-icon="mdi-tools"
					:title="$t('menu.content.tools.title')"
				></v-list-item>
			</template>
			<template
				v-for="item in tools"
				:key="item.name"
			>
				<v-list-item
					v-if="($vuetify.display.xs && item.mobile) || !$vuetify.display.xs"
					:to="contentLink(item)"
				>
					<v-list-item-title>{{ contentTitle(item) }}</v-list-item-title>
				</v-list-item>
			</template>
		</v-list-group> -->
		<!-- <v-list-item>
			{{ $t('menu.content.tools.title') }}
			<v-list density="compact">
				<template
					v-for="item in tools"
					:key="item.name"
				>
					<v-list-item
						v-if="($vuetify.display.xs && item.mobile) || !$vuetify.display.xs"
						:to="contentLink(item)"
					>
						<v-list-item-title>{{ contentTitle(item) }}</v-list-item-title>
					</v-list-item>
				</template>
			</v-list>
		</v-list-item> -->
		<v-list-group
			v-if="features.Yours.value && isLoggedIn"
			value="Yours" 
			density="compact"
		>
			<template v-slot:activator="{ props }">
				<v-list-item
					v-bind="props"
					prepend-icon="mdi-account"
					:title="$t('menu.yours.title')"
				></v-list-item>
			</template>
			<v-list-item
				v-if="features.Yours.Checklists"
				to="/user/checklists"
			>
				<v-list-item-title>{{ $t('menu.yours.checklists') }}</v-list-item-title>
			</v-list-item>
			<v-list-item
				v-if="features.Yours.Inventory"
				to="/user/inventory"
			>
				<v-list-item-title>{{ $t('menu.yours.inventory') }}</v-list-item-title>
			</v-list-item>
			<v-list-item
				v-if="features.Yours.Launches"
				to="/user/launches"
			>
				<v-list-item-title>{{ $t('menu.yours.launches') }}</v-list-item-title>
			</v-list-item>
			<v-list-item
				v-if="features.Yours.Locations"
				to="/user/locations"
			>
				<v-list-item-title>{{ $t('menu.yours.locations') }}</v-list-item-title>
			</v-list-item>
			<v-list-item
				v-if="features.Yours.Rockets"
				to="/user/rockets"
			>
				<v-list-item-title>{{ $t('menu.yours.rockets') }}</v-list-item-title>
			</v-list-item>
			<v-list-item
				v-if="features.Yours.Rockets"
				to="/user/rocketsetups"
			>
				<v-list-item-title>{{ $t('menu.yours.rocketsetups') }}</v-list-item-title>
			</v-list-item>
			<v-divider
				v-if="features.Yours.Checklists || features.Yours.Launches || features.Yours.Rockets"
			></v-divider>
			<v-list-subheader>
				{{ $t('menu.yours.parts') }}
			</v-list-subheader>
			<v-list-item
				v-if="features.Yours.Altimeters"
				to="/user/altimeters"
			>
				<v-list-item-title>{{ $t('menu.yours.altimeters') }}</v-list-item-title>
			</v-list-item>
			<v-list-item
				v-if="features.Yours.ChuteProtectors"
				to="/user/chuteProtectors"
			>
				<v-list-item-title>{{ $t('menu.yours.chuteProtectors') }}</v-list-item-title>
			</v-list-item>
			<v-list-item
				v-if="features.Yours.ChuteReleases"
				to="/user/chuteReleases"
			>
				<v-list-item-title>{{ $t('menu.yours.chuteReleases') }}</v-list-item-title>
			</v-list-item>
			<v-list-item
				v-if="features.Yours.DeploymentBags"
				to="/user/deploymentBags"
			>
				<v-list-item-title>{{ $t('menu.yours.deploymentBags') }}</v-list-item-title>
			</v-list-item>
			<v-list-item
				v-if="features.Yours.Motors"
				to="/user/motors"
			>
				<v-list-item-title>{{ $t('menu.yours.motors') }}</v-list-item-title>
			</v-list-item>
			<v-list-item
				v-if="features.Yours.MotorCases"
				to="/user/motorCases"
			>
				<v-list-item-title>{{ $t('menu.yours.motorCases') }}</v-list-item-title>
			</v-list-item>
			<v-list-item
				v-if="features.Yours.Parachutes"
				to="/user/parachutes"
			>
				<v-list-item-title>{{ $t('menu.yours.parachutes') }}</v-list-item-title>
			</v-list-item>
			<v-list-item
				v-if="features.Yours.Streamers"
				to="/user/streamers"
			>
				<v-list-item-title>{{ $t('menu.yours.streamers') }}</v-list-item-title>
			</v-list-item>
			<v-list-item
				v-if="features.Yours.Trackers"
				to="/user/trackers"
			>
				<v-list-item-title>{{ $t('menu.yours.trackers') }}</v-list-item-title>
			</v-list-item>
		</v-list-group>
		<!-- <v-list-item
			v-if="features.Yours.value && isLoggedIn"
		>
			{{ $t('menu.yours.title') }}
			<v-list density="compact">
				<v-list-item
					v-if="features.Yours.Checklists"
					to="/user/checklists"
				>
					<v-list-item-title>{{ $t('menu.yours.checklists') }}</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="features.Yours.Inventory"
					to="/user/inventory"
				>
					<v-list-item-title>{{ $t('menu.yours.inventory') }}</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="features.Yours.Launches"
					to="/user/launches"
				>
					<v-list-item-title>{{ $t('menu.yours.launches') }}</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="features.Yours.Locations"
					to="/user/locations"
				>
					<v-list-item-title>{{ $t('menu.yours.locations') }}</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="features.Yours.Rockets"
					to="/user/rockets"
				>
					<v-list-item-title>{{ $t('menu.yours.rockets') }}</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="features.Yours.Rockets"
					to="/user/rocketsetups"
				>
					<v-list-item-title>{{ $t('menu.yours.rocketsetups') }}</v-list-item-title>
				</v-list-item>
				<v-divider
					v-if="features.Yours.Checklists || features.Yours.Launches || features.Yours.Rockets"
				></v-divider>
				<v-list-subheader>
					{{ $t('menu.yours.parts') }}
				</v-list-subheader>
				<v-list-item
					v-if="features.Yours.Altimeters"
					to="/user/altimeters"
				>
					<v-list-item-title>{{ $t('menu.yours.altimeters') }}</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="features.Yours.ChuteProtectors"
					to="/user/chuteProtectors"
				>
					<v-list-item-title>{{ $t('menu.yours.chuteProtectors') }}</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="features.Yours.ChuteReleases"
					to="/user/chuteReleases"
				>
					<v-list-item-title>{{ $t('menu.yours.chuteReleases') }}</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="features.Yours.DeploymentBags"
					to="/user/deploymentBags"
				>
					<v-list-item-title>{{ $t('menu.yours.deploymentBags') }}</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="features.Yours.Motors"
					to="/user/motors"
				>
					<v-list-item-title>{{ $t('menu.yours.motors') }}</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="features.Yours.MotorCases"
					to="/user/motorCases"
				>
					<v-list-item-title>{{ $t('menu.yours.motorCases') }}</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="features.Yours.Parachutes"
					to="/user/parachutes"
				>
					<v-list-item-title>{{ $t('menu.yours.parachutes') }}</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="features.Yours.Streamers"
					to="/user/streamers"
				>
					<v-list-item-title>{{ $t('menu.yours.streamers') }}</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="features.Yours.Trackers"
					to="/user/trackers"
				>
					<v-list-item-title>{{ $t('menu.yours.trackers') }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-list-item> -->
		<!-- <v-list-item
			prepend-icon="mdi-link"
			to="/content/links"
		>
			<v-list-item-title>{{ $t('menu.content.links.title') }}</v-list-item-title>
		</v-list-item> -->
		<v-list-item
			v-if="displayWebsite"
			:href="websiteUrl"
			target="_blank"
		>
			<v-list-item-title>{{ $t('menu.content.website') }}</v-list-item-title>
		</v-list-item>
		<v-list-item
			v-if="!isOnline"
		>
			<v-list-item-title><span 
				class="text-red"
				style="font-weight: bold; text-transform: uppercase;"
			>{{ $t('strings.offline') }}</span></v-list-item-title>
		</v-list-item>
	</v-list>
</template>

<script>
import { computed, ref } from 'vue';

import AppSharedConstants from '@/utility/constants';

import LibraryClientUtility from '@thzero/library_client/utility/index';

import { useBaseMenuComponent } from '@/components/main/baseMenu';
import { baseBaseMenuProps } from '@/components/main/baseBaseMenuProps';

export default {
	name: 'MainMenuDrawer',
	props: {
		...baseBaseMenuProps
	},
	setup(props, context) {
		const {
			correlationId,
			error,
			hasFailed,
			hasSucceeded,
			initialize,
			logger,
			noBreakingSpaces,
			notImplementedError,
			success,
			features,
			info,
			tools,
			isLoggedIn,
			contentLink,
			contentTitle
		} = useBaseMenuComponent(props, context);

		const websiteUrl = ref(AppSharedConstants.External.url);

		const displayRockets = computed(() => {
			return LibraryClientUtility.$store.getters.getOnline() && features.value.Rockets;
		});
		const displayWebsite = computed(() => {
			return LibraryClientUtility.$store.getters.getOnline();
		});
		const isOnline = computed(() => {
			return LibraryClientUtility.$store.getters.getOnline();
		});

		return {
			correlationId,
			error,
			hasFailed,
			hasSucceeded,
			initialize,
			logger,
			noBreakingSpaces,
			notImplementedError,
			success,
			features,
			info,
			tools,
			isLoggedIn,
			contentLink,
			contentTitle,
			websiteUrl,
			displayRockets,
			displayWebsite,
			isOnline
		};
	}
};
</script>

<style scoped>
.v-list-item__prepend {
	display: block;
}
</style>
