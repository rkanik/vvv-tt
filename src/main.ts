import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { createStore } from './store'
import { createPinia } from './store/pinia'

import vuetify from './plugins/vuetify'
import VuePrototype from './vue-prototype'
import VueCompositionAPI from '@vue/composition-api'

import './assets/css/tailwind.css'
import './assets/scss/index.scss'

Vue.config.productionTip = false

Vue.use(VuePrototype)
Vue.use(VueCompositionAPI)

const boot = async () => {
	const pinia = createPinia(Vue)
	const store = await createStore()

	store.dispatch('users/fetchUsers')

	// CREATE VUE INSTANCE
	const app = new Vue({
		pinia,
		store,
		router,
		vuetify,
		render: h => h(App),
	})

	// MOUNT THE APP
	app.$mount('#app')
}

boot()
