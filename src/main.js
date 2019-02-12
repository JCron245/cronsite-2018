import Vue from 'vue';
import { Navbar } from 'bootstrap-vue/es/components';
import App from './App.vue';
import router from './router';

import '@/assets/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.min.css';

Vue.use(Navbar);

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
