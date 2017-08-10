import Vue from 'vue'
import Router from 'vue-router'

import lost_page from '@/components/errors/404'
import login from '@/components/pages/Login'
import LandingPage from '@/components/pages/LandingPage'
import Estimator from '@/components/pages/Estimator'
import Blog from '@/components/pages/Blog'
import blogSingle from '@/components/pages/Blog-Single'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{ path: '*', component: lost_page },
		{ path: '/login', component: login},
		{ path: '/', name: 'LandingPage', component: LandingPage },
		{ path: '/estimator', name: 'Estimator', component: Estimator },
		{ path: '/blog', name: 'blog', component: Blog },
		{ path: '/blog/single', name: 'blogSingle', component: blogSingle }
	]
})
