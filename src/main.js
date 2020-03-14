// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import axios from 'axios'


Vue.config.productionTip = false;
// Vue.prototype.$axios = axios;
// Vue.use(Element);

// 定义中央事件总线
// const EventBus = new Vue();
// 将中央事件总线赋值到 Vue.prototype 上，这样所有组件都能访问到了
// Vue.prototype.$EventBus = EventBus;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
