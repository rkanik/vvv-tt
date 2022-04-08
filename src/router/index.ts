import Vue from 'vue'
import VueRouter from 'vue-router'

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
					component: () => import('@/views/Home.vue'),
				},
				{
					path: 'about',
					name: 'About',
					component: () => import('@/views/About.vue'),
				},
			],
		},
	],
})

export default router
