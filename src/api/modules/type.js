/*
*  类型  接口
*/
import request from 'utils/request'

// 列表
function list(params) {
  return request.get('/type/list',params)
}

// 添加
function add(params) {
  return request.postJson('/type/add', params)
}

// 修改
function edit(params) {
  return request.put('/type/update', params)
}

// 详情
function detail(id) {
  return request.get(`/type/detail/${id}`)
}

// 删除
function _delete(id) {
  return request.delete(`/type/delete/${id}`)
}


//所有类型
function getTypes(){
  return request.get('/type/allType')
}

export default {
  list,
  add,
  edit,
  detail,
  _delete,
  getTypes
}
