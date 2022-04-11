import Vue from 'vue'
import VueRouter from 'vue-router'

// import views from '@/views'
// console.log(views)

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: import.meta.env.BASE_URL,
	routes: [
		{
			path: '/',
			component: () => import('@/layouts/AppLayout.vue'),
			children: [
				{
					path: '',
					name: 'Home',
					// component: views['Home'],
					component: () => import('@/views/Home.vue'),
				},
				{
					path: 'composition-api',
					name: 'CompositionApi',
					// component: views['CompositionApi'],
					component: () => import('@/views/CompositionApi.vue'),
				},
				{
					path: 'about',
					name: 'About',
					// component: views['About.vue'],
					component: () => import('@/views/About.vue'),
				},
			],
		},
	],
})

export default router
