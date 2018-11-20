import {
  login
} from '@/api'
export default {
  async login ({commit}, userInfo) {
    let res = await login(userInfo)
    if (res && res.status === 1 && res.data) {
      commit('USER_LOGIN', res.data)
    }
    return res
  }
}
