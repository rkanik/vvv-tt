import moment from 'moment'
import Vue, { VueConstructor } from 'vue'

const VuePrototype = {
	install(Vue: VueConstructor<Vue>) {
		Vue.prototype.$m = moment
	},
}

export default VuePrototype
