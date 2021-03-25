/*
*  宿舍管理员  接口
*/
import request from 'utils/request'

// 列表
function list(params) {
  return request.get('/building/list',params)
}

// 添加
function add(params) {
  return request.postJson('/building/add', params)
}

// 修改
function edit(params) {
  return request.put('/building/update', params)
}

// 详情
function detail(id) {
  return request.get(`/building/detail/${id}`)
}

// 删除
function _delete(id) {
  return request.delete(`/building/delete/${id}`)
}

function getBuildings(){
  return request.get('/building/allBuilding')
}


export default {
  list,
  add,
  edit,
  detail,
  _delete,
  getBuildings
}
