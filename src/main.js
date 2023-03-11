import '@mdi/font/css/materialdesignicons.css'
// import { aliases, fa } from 'vuetify/iconsets/fa';
// import { mdi } from 'vuetify/iconsets/mdi';
// import 'animate.css';

import 'vuetify/styles';

import bootStarter from '@thzero/library_client_firebase_vue/boot/starter';
// import bootAsyncComputed from '@thzero/library_client_vue3/boot/asyncComputed';
import bootEventBus from '@thzero/library_client_vue3/boot/eventBus';
import booti18n from '@/boot/i18n';
import bootNetwork from '@/boot/network';
// import bootServices from '@/boot/services';
import bootServices from '@/boot.app/services';
// import bootUi from '@thzero/library_client_vue3_vuetify3/boot/ui';
import bootUi from '@/boot/ui';
import bootValidate from '@/boot/validate';
// import bootWebComponents from '@thzero/library_client_vue3/boot/webComponents';
// import bootCookieComply from '@thzero/library_client_vue3_vuetify3/boot/cookie';

import router from '@/router';

import store from '@/store/pinia'; // STORE TYPE
// import storeSetup from '@/store/vuex'; // STORE TYPE

import start from '@thzero/library_client_vue3/boot/main';

import App from '@/components/App.vue';


//start(App, router, store, [ booti18n, bootEventBus, bootNetwork, bootServices, bootValidate, bootUi, bootCookieComply ], bootStarter, {});
start(App, router, store, [ booti18n, bootEventBus, bootNetwork, bootServices, bootValidate, bootUi ], bootStarter, {});
