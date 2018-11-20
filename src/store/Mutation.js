import {USER_LOGIN} from './Mutation-Type'
export default {
  [USER_LOGIN] (state, data) {
    const token = JSON.stringify(data)
    window.sessionStorage.setItem('legwork-jwt', token)
    state.token = token
  }
}
