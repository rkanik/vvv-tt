import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'
import { getModules } from './store/modules'

export const createStore = async () => {
	// Using plugin
	Vue.use(Vuex)

	const plugins = []
	const modules = await getModules()

	// Logger
	if (import.meta.env.DEV) plugins.push(createLogger())

	// Create store
	return new Vuex.Store({
		modules,
		plugins,
	})
}
