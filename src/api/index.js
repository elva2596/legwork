import axios from 'axios'
import firebase from 'firebase'
/**
 * (description)
 * the api of login , mock data of user originated from static/user.json
 * @export
 * @param {*} userInfo
 * @returns
 */
export function login (userInfo) {
  userInfo = userInfo || {}
  return axios
    .get('static/user.json')
    .then(obj => {
      if (obj && obj.status === 200 && obj.data) {
        if (obj.data.some(user => userInfo.name === user.name)) {
          const concreteUser = obj.data.filter(user => userInfo.name === user.name)[0]
          if (concreteUser.password === userInfo.password) {
            delete concreteUser.password
            return {
              status: 1,
              data: concreteUser
            }
          } else {
            return {
              status: 0,
              data: {message: 'password is incorrect'}
            }
          }
        } else {
          return {
            status: 0,
            data: {message: 'username is incorrect'}
          }
        }
      } else {
        return {
          status: 500,
          data: {message: 'server is error'}
        }
      }
    })
}

export function signin(userInfo) {
  const {email, password} = userInfo;
  return firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error){
    console.log(error)
  })
}
