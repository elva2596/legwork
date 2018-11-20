import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './Mutation'
import actions from './Action'
Vue.use(Vuex)
/**
 *(description)
 * initial value of vuex state token
 * @returns
 */
function isLogin () {
  let token = window.sessionStorage.getItem('legwork-jwt')
  if (token) {
    return token
  } else {
    return false
  }
}
const store = new Vuex.Store({
  state: {
    token: isLogin()
  },
  mutations,
  actions
})
export default store
