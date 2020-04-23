// 从vue包中导入Vue对象
import Vue from 'vue'
import App from './App.vue'


// Vue.config.productionTip = false

new Vue({
  el:'#app',
  components: {
  	App
  },
  template:'<App/>'
})
