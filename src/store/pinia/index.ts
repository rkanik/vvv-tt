import Vue, { VueConstructor } from 'vue'
import { createPinia as _createPinia, PiniaVuePlugin } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const createPinia = (Vue: VueConstructor<Vue>) => {
	// Vue2 user pinia
	Vue.use(PiniaVuePlugin)

	// Create Pinia
	const pinia = _createPinia()

	// Plugins
	pinia.use(piniaPluginPersistedstate)

	// Return pinia store
	return pinia
}

export { createPinia }
