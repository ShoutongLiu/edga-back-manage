import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },

    {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true
    },

    {
        path: '/',
        component: Layout,
        redirect: '/banner',
        children: [{
            path: 'banner',
            name: 'banner',
            component: () => import('@/views/banner/index'),
            meta: { title: 'Banner管理', icon: 'banner' }
        }]
    },
    {
        path: '/graph',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'graph',
                component: () => import('@/views/graph/index'),
                meta: { title: '小图管理', icon: 'img' }
            }
        ]
    },
    {
        path: '/content',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'content',
                component: () => import('@/views/content/index'),
                meta: { title: '内容管理', icon: 'form' }
            }
        ]
    },
    {
        path: '/add',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'add',
                component: () => import('@/views/content/add'),
                meta: { title: '内容添加', icon: 'add' }
            }
        ]
    },
    {
        path: '/edit',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'edit',
                component: () => import('@/views/content/edit'),
                hidden: true
            }
        ]
    },
    {
        path: '/tag',
        component: Layout,
        redirect: '/nav/tag',
        name: 'Nav',
        meta: { title: '导航管理', icon: 'nav' },
        children: [
            {
                path: 'tag',
                name: 'Tag',
                component: () => import('@/views/tag/index'),
                meta: { title: '标签管理', icon: 'tag' }
            },
            {
                path: 'location',
                name: 'Location',
                component: () => import('@/views/location/index'),
                meta: { title: '位置管理', icon: 'location' }
            },
            {
                path: 'cate',
                name: 'Cate',
                component: () => import('@/views/cate/index'),
                meta: { title: '类别管理', icon: 'cate' }
            },
            {
                path: 'field',
                name: 'field',
                component: () => import('@/views/field/index'),
                meta: { title: '领域管理', icon: 'lingyu' }
            }
        ]
    },

    {
        path: '/personal',
        component: Layout,
        hidden: true,
        children: [{
            path: 'index',
            name: 'personal',
            component: () => import('@/views/personal/index'),
            meta: { title: '个人中心' }
        }]
    },

    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
