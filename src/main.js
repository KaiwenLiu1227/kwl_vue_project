import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import ElementUI from 'element-ui';
import './config/global.css'
import routers from "@/router";
import configs from "@/config/configs";
import VueRouter from 'vue-router'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(ElementUI);
Vue.prototype.axios = axios
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(configs);


const router = new VueRouter({
  mode: 'history',
  routes: routers
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
