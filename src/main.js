// 从vue包中导入Vue对象
import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

// Vue.config.productionTip = false

new Vue({
  el:'#app',
  components: {
  	App
  },
  template:'<App/>'
})
