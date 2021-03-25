/*
*  宿舍管理员  接口
*/
import request from 'utils/request'

// 列表
function list(params) {
  return request.get('/student/list',params)
}

// 添加
function add(params) {
  return request.postJson('/student/add', params)
}

// 修改
function edit(params) {
  return request.put('/student/update', params)
}

// 详情
function detail(id) {
  return request.get(`/student/detail/${id}`)
}

// 删除
function _delete(id) {
  return request.delete(`/student/delete/${id}`)
}


export default {
  list,
  add,
  edit,
  detail,
  _delete,
}
