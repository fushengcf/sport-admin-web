/*
*  场馆  接口
*/
import request from 'utils/request'

// 列表
function list(params) {
  return request.get('/venue/list',params)
}

// 添加
function add(params) {
  return request.postJson('/venue/add', params)
}

// 修改
function edit(params) {
  return request.put('/venue/update', params)
}

// 详情
function detail(id) {
  return request.get(`/venue/detail/${id}`)
}

// 删除
function _delete(id) {
  return request.delete(`/venue/delete/${id}`)
}


//所有场馆
function getVenues(){
  return request.get('/venue/allVenue')
}


// 重置密码
function resetPassword(id) {
  return request.get(`/venue/reset/${id}`)
}
export default {
  list,
  add,
  edit,
  detail,
  _delete,
  getVenues,
  resetPassword
}
