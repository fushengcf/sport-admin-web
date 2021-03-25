/*
*  用户信息 / token 接口
*/
import request from 'utils/request'

// 获取 Token
function token(params) {
  return request.post('/user/login', params, {
    // auth: {
    //   username: process.env.VUE_APP_CLIENT_ID,
    //   password: process.env.VUE_APP_CLIENT_SECRET
    // },
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 获取用户信息
function getInfo(params) {
  console.log(params)
  return request.get('/user/info', params)
}

// 获取 权限菜单
function getMenuList() {
  return request.get('/permission', {}, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 退出（废弃）
function logout() {
  return request.post('/user/logout', {}, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 修改密码
function changePassword(params) {
  return request.put('/auth/account/password', params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

export default {
  token,
  getInfo,
  getMenuList,
  logout,
  changePassword
}
