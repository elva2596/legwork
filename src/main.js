// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {
  Button,
  Select,
  Form,
  FormItem,
  Input,
  Message
} from 'element-ui'
import Icon from 'vue-awesome/components/Icon'
import firebase from 'firebase'
import {firebaseConfig} from '@/config/firebase'
firebase.initializeApp(firebaseConfig)
Vue.config.productionTip = false
Vue.component('icon', Icon)
Vue.use(Button)
Vue.use(Select)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
