import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/tailwind.css'
import './assets/scss/index.scss'

import vuetify from './plugins/vuetify'
import VuePrototype from './vue-prototype'
import { registerComponentsVite } from 'vuelpers'

Vue.config.productionTip = false

Vue.use(VuePrototype)

const boot = async () => {
	// REGISTER GLOBAL COMPONENTS
	await registerComponentsVite(
		Vue,
		import.meta.glob('./components/app/*.vue'),
		import.meta.glob('./components/base/*.vue')
	)

	// CREATE VUE INSTANCE
	const app = new Vue({
		store,
		router,
		vuetify,
		render: h => h(App),
	})

	// MOUNT THE APP
	app.$mount('#app')
}

boot()
