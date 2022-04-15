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
					path: 'pinia',
					name: 'Pinia',
					component: () => import('@/views/Pinia.vue'),
				},
				{
					path: 'intersect',
					name: 'Intersect',
					component: () => import('@/views/Intersect.vue'),
				},
				{
					path: 'fetch',
					name: 'FetchAPI',
					component: () => import('@/views/FetchAPI.vue'),
				},
				{
					path: 'vue-use',
					name: 'VueUse',
					component: () => import('@/views/VueUse.vue'),
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
