import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import CreateListView from '../views/CreateListView'
const createListView = name => r => require.ensure([], () => {
  var method = <typeof CreateListView>require('../views/CreateListView')['default']
  return method(name)
});
const ItemView = r => require.ensure([], () => r(require('../views/ItemView.vue')));
const UserView = r => require.ensure([], () => r(require('../views/UserView.vue')));


export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: [
    { path: '/top/:page(\\d+)?', component: createListView('top') },
    { path: '/new/:page(\\d+)?', component: createListView('new') },
    { path: '/show/:page(\\d+)?', component: createListView('show') },
    { path: '/ask/:page(\\d+)?', component: createListView('ask') },
    { path: '/job/:page(\\d+)?', component: createListView('job') },
    { path: '/item/:id(\\d+)', component: ItemView },
    { path: '/user/:id', component: UserView },
    { path: '/', redirect: '/top' }
  ]
})
