import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'
import { getModules } from './store/modules'
import createPersistedState from 'vuex-persistedstate'

export const createStore = async () => {
	// Using plugin
	Vue.use(Vuex)

	const modules = await getModules()
	const plugins = [
		createPersistedState({
			key: '__vvv-tt__',
		}),
	]

	// Logger
	if (import.meta.env.DEV) plugins.push(createLogger())

	// Create store
	return new Vuex.Store({
		modules,
		plugins,
	})
}
