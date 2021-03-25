/*
*  预订记录  接口
*/
import request from 'utils/request'

// 列表
function list(params) {
  return request.get('/subscribe/list',params)
}

// 添加
function add(params) {
  return request.postJson('/subscribe/add', params)
}

// 修改
function edit(params) {
  return request.put('/subscribe/update', params)
}

// 详情
function detail(id) {
  return request.get(`/subscribe/detail/${id}`)
}

// 删除
function _delete(id) {
  return request.delete(`/subscribe/delete/${id}`)
}


//所有预定
function getTypes(){
  return request.get('/subscribe/allType')
}

export default {
  list,
  add,
  edit,
  detail,
  _delete,
  getTypes
}
