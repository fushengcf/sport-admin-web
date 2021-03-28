<template>
  <div class="common-style-table">
    <el-row class="search-bar" :gutter="20">

      <el-col :span="4">
        <el-input v-model="paramsForm.name" placeholder="场地名称" clearable />
      </el-col>

    <el-col :span="4">
        <el-select
          v-model="paramsForm.venueId"
          placeholder="请选择所属场馆"
          style="width: 100%"
          clearable=""
        >
          <el-option
            v-for="item in venues"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-col>

   <el-col :span="4">
        <el-select
          v-model="paramsForm.typeId"
          placeholder="请选择运动类型"
          style="width: 100%"
          clearable=""
        >
          <el-option
            v-for="item in types"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-col>

      <el-col :span="4">
        <el-select
          v-model="paramsForm.status"
          placeholder="请选择场地状态"
          style="width: 100%"
          clearable=""
        >
          <el-option label="已禁用" :value="0" />
          <el-option label="已启用" :value="1" />
        </el-select>
      </el-col>

      <el-col :span="4">
        <el-button
          type="primary"
          icon="el-icon-search"
          :loading="isLoading"
          @click="$getData('search')"
        >查询
        </el-button>
      </el-col>
    </el-row>

    <table-list
      stripe
      :is-loading="isLoading"
      :data="tableData"
      :columns="columns"
      row-key="id"
      :page-data="pageData"
      @handlePageData="$changePage"
    >
          <template slot="status" slot-scope="{ index, record }">
        <el-tag :type="record.status === 1 ? 'success' : 'danger'">{{
          record.status === 1 ? "已启用" : "已禁用"
        }}</el-tag>
      </template>
      <template slot="action" slot-scope="{ index,record }">
        <el-button type="primary" size="mini" @click="$handleData(record,'modalDrawer')">修改</el-button>
        <el-button type="danger" size="mini" @click="$handleConfirm(record.id,'此操作将删除该用户，是否继续？')">删除</el-button>
      </template>

    </table-list>
    <modal-drawer ref="modalDrawer" @submitOk="$getData" />
  </div>
</template>

<script>
import Index from './'

export default Index
</script>
