import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/tailwind.css'
import './assets/scss/index.scss'

import vuetify from './plugins/vuetify'
import VuePrototype from './vue-prototype'

Vue.config.productionTip = false

Vue.use(VuePrototype)

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount('#app')
