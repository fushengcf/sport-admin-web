/*
*  宿舍管理员  接口
*/
import request from 'utils/request'

// 列表
function list(params) {
  return request.get('/major/list',params)
}

// 添加
function add(params) {
  return request.postJson('/major/add', params)
}

// 修改
function edit(params) {
  return request.put('/major/update', params)
}

// 详情
function detail(id) {
  return request.get(`/major/detail/${id}`)
}

// 删除
function _delete(id) {
  return request.delete(`/major/delete/${id}`)
}


//所有专业
function getMajors(){
  return request.get('/major/allMajor')
}

export default {
  list,
  add,
  edit,
  detail,
  _delete,
  getMajors
}
