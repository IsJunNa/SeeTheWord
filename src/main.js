import Vue from 'vue'
import App from './App.vue'
// 引入VueRouter
import router from '@/router'
// 引入点击特效
import './utils/click.js'
// 引入bootstrap组件库
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.css'
// 引入 ElementUI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  router
}).$mount('#app')
