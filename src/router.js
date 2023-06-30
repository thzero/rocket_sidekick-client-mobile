import { createRouter, createWebHistory } from 'vue-router';

import LibraryClientUtility from '@thzero/library_client/utility/index';

const routes = [
	{
		path: '/',
		component: () => import(/* webpackChunkName: "group-layouts" */ './layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'default',
				component: () => import(/* webpackChunkName: "group-main" */ './components/Home.vue'),
				meta: {
					requiresAuth: false
				}
			}
		]
	},
	{
		path: '/content/info/:id',
		component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'content_info',
				component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/ContentLayout.vue'),
				children: [
					{
						path: '',
						name: 'content_info',
						component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-content-info" */ './components/content/info/InfoMarkup.vue'),
						meta: {
							requiresAuth: false
						}
					}
				]
			}
		]
	},
	{
		path: '/content/tools/parachuteSizing',
		component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'content_tools_parachuteSizing',
				component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/ContentLayout.vue'),
				children: [
					{
						path: '',
						name: 'content_tools_parachuteSizing',
						component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-content-tools" */ './components/content/tools/ParachuteSizing.vue'),
						meta: {
							requiresAuth: false
						}
					}
				]
			}
		]
	},
	{
		path: '/content/tools/thrust2Weight',
		component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'content_tools_thrust2Weight',
				component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/ContentLayout.vue'),
				children: [
					{
						path: '',
						name: 'content_tools_thrust2Weight',
						component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-content-tools" */ './components/content/tools/Thrust2Weight.vue'),
						meta: {
							requiresAuth: false
						}
					}
				]
			}
		]
	},
	{
		path: '/content/tools/weathercocking',
		component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'content_tools_weahtercocking',
				component: () => import(/* webpackPrefetch: true */  /* webpackChunkName: "group-layouts" */'./layouts/ContentLayout.vue'),
				children: [
					{
						path: '',
						name: 'content_tools_weahtercocking',
						component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-content-tools" */ './components/content/tools/Weathercocking.vue'),
						meta: {
							requiresAuth: false
						}
					}
				]
			}
		]
	},
	{
		path: '/rocket/:id',
		component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'content_rocket',
				component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/ContentLayout.vue'),
				children: [
					{
						path: '',
						name: 'content_rocket',
						component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-content-info" */ './components/content/rockets/rocket/RocketInfo.vue'),
						meta: {
							requiresAuth: false
						}
					}
				]
			}
		]
	},
	{
		path: '/rockets',
		component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'content_rockets',
				component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/ContentLayout.vue'),
				children: [
					{
						path: '',
						name: 'content_rockets',
						component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-content-info" */ './components/content/rockets/Rockets.vue'),
						meta: {
							requiresAuth: false
						}
					}
				]
			}
		]
	},
	// {
	// 	path: '/user/checklists/:id',
	// 	component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/MainLayout.vue'),
	// 	children: [
	// 		{
	// 			path: '',
	// 			name: 'content_checklist',
	// 			component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/ContentLayout.vue'),
	// 			children: [
	// 				{
	// 					path: '',
	// 					name: 'content_checklist',
	// 					component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-content-info" */ './components/content/checklists/Checklist.vue'),
	// 					meta: {
	// 						requiresAuth: true
	// 					}
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	{
		path: '/user/checklists',
		component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'content_checklists',
				component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/ContentLayout.vue'),
				children: [
					{
						path: '',
						name: 'content_checklists',
						component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-content-info" */ './components/content/checklists/Checklists.vue'),
						meta: {
							requiresAuth: true
						}
					}
				]
			}
		]
	},
	{
		path: '/openSource',
		component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'openSource',
				component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-support" */ './components/OpenSource.vue'),
				meta: {
					requiresAuth: false
				}
			}
		]
	},
	{
		path: '/privacy',
		component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'privacy',
				component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-support" */ './components/Privacy.vue'),
				meta: {
					requiresAuth: false
				}
			}
		]
	},
	{
		path: '/settings',
		component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'settings',
				component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-support" */ './components/Settings.vue'),
				meta: {
					requiresAuth: false
				}
			}
		]
	},
	{
		path: '/about',
		component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'about',
				component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-support" */ './components/About.vue'),
				meta: {
					requiresAuth: false
				}
			}
		]
	},
	{
		path: '/support',
		component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ './layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'support',
				component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-support" */ './components/Support.vue'),
				meta: {
					requiresAuth: false
				}
			}
		]
	},{
		path: '/auth',
		component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-layouts" */ '@thzero/library_client_vue3_vuetify3/layouts/AuthLayout.vue'),
		children: [
			{
				path: '',
				name: 'auth',
				component: () => import('./components/Auth.vue'),
				meta: {
					requiresAuth: false
				}
			}
		]
	},
	{
		path: '/:catchAll(.*)*',
		component: () => import(/* webpackChunkName: "group-layouts" */ '@thzero/library_client_vue3_vuetify3/layouts/BlankLayout.vue'),
		children: [
			{
				path: '',
				name: 'notFound',
				component: () => import(/* webpackChunkName: "group-main" */ '@thzero/library_client_vue3_vuetify3/components/VNotFound.vue'),
				meta: {
					requiresAuth: false
				}
			}
		]
	},
	// {
	// 	path: '/:catchAll(.*)*',
	// 	component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-catchAll" */ '@thzero/library_client_vue3_vuetify3/layouts/BlankLayout.vue'),
	// 	children: [
	// 		{
	// 			path: '',
	// 			name: 'notFound',
	// 			component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "group-catchAll" */ '@thzero/library_client_vue3_vuetify3/components/VNotFound.vue'),
	// 			meta: {
	// 				requiresAuth: false
	// 			}
	// 		}
	// 	]
	// }
];

const router = createRouter({
	// history: createWebHashHistory(),
	history: createWebHistory(process.env.BASE_URL),
	routes
});

// eslint-disable-next-line
router.beforeResolve((to, from, next) => {
	if (to.matched.some(record => record.meta.notFound)) {
		LibraryClientUtility.$navRouter.push('/notFound');
		return;
	}

	next();
});

export default router;
