import Vue from 'vue'
import Router from 'vue-router'

import Projects from '@/components/pages/Projects'
import Blog from '@/components/pages/Blog'
import BlogPost from '@/components/pages/BlogPost'
import CV from '@/components/pages/CV'
import ContactInfo from '@/components/pages/ContactInfo'
import Project from '@/components/pages/Project'

import Error404 from '@/components/pages/errors/404'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Projects
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/projects/:category/:id',
      name: 'project',
      component: Project
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog/:id',
      name: 'blogPost',
      component: BlogPost
    },
    {
      path: '/cv',
      name: 'cv',
      component: CV
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactInfo
    },
    {
      path: '/404',
      name: '404',
      component: Error404
    },

    // catch all
    {
      path: '*',
      redirect: { name: '404' }
    }
  ]
})
