<template>
	<v-list density="compact">
		<!-- <v-list-item>
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
		<v-list-item
			v-if="features.Rocket"
			to="/rockets"
		>
			<v-list-item-title>{{ $t('menu.content.rockets.title') }}</v-list-item-title>
		</v-list-item>
		<v-list-item>
			{{ $t('menu.content.tools.title') }}
			<v-list density="compact">
				<v-list-item
					v-for="item in tools"
					:key="item.name"
					:to="contentLink(item)"
				>
					<v-list-item-title>{{ contentTitle(item) }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-list-item>
		<v-list-item
			v-if="features.Yours.value"
		>
			{{ $t('menu.yours.title') }}
			<v-list density="compact">
				<v-list-item
					v-if="features.Yours.Checklists"
					to="/yours/checklists"
				>
					<v-list-item-title>{{ $t('menu.yours.checklists') }}</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="features.Yours.Launches"
					to="/yours/launches"
				>
					<v-list-item-title>{{ $t('menu.yours.launches') }}</v-list-item-title>
				</v-list-item>
				<v-divider></v-divider>
				<v-list-item
					v-if="features.Yours.Altimeters"
					to="/yours/altimeters"
				>
					<v-list-item-title>{{ $t('menu.yours.altimeters') }}</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="features.Yours.Parachutes"
					to="/yours/parachutes"
				>
					<v-list-item-title>{{ $t('menu.yours.parachutes') }}</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="features.Yours.Rockets"
					to="/yours/rockets"
				>
					<v-list-item-title>{{ $t('menu.yours.rockets') }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-list-item>
		<v-list-item
			to="/content/links"
		>
			<v-list-item-title>{{ $t('menu.content.links.title') }}</v-list-item-title>
		</v-list-item>
		<!-- <v-list-item>
			{{ $t('menu.links.title') }}
			<v-list density="compact">
				<v-list-item
					v-for="item in links"
					:key="item.name"
					:href="item.link"
					target="_blank"
				>
					<v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-list-item> -->
		<v-list-item
			v-if="features.MobileApp"
			to="/landing"
		>
			<v-list-item-title>{{ $t('menu.content.app') }}</v-list-item-title>
		</v-list-item>
	</v-list>
</template>

<script>
import { useBaseMenuComponent } from '@/components/main/baseMenu';
import { baseBaseMenuProps } from '@/components/main/baseBaseMenuProps';

import AppConstants from '@/utility/constants';

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
			contentLink,
			contentTitle
		} = useBaseMenuComponent(props, context);

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
			contentLink,
			contentTitle
		};
	}
};
</script>

<style scoped>
</style>
