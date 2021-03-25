/*
*  宿舍管理员  接口
*/
import request from 'utils/request'

// 列表
function list(params) {
  return request.get('/user/list',params)
}

// 添加
function add(params) {
  return request.postJson('/user/add', params)
}

// 修改
function edit(params) {
  return request.put('/user/update', params)
}

// 详情
function detail(id) {
  return request.get(`/user/detail/${id}`)
}

// 删除
function _delete(id) {
  return request.delete(`/user/delete/${id}`)
}


export default {
  list,
  add,
  edit,
  detail,
  _delete,
}
