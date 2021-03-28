<template>
  <el-drawer
    v-if="dialogVisible"
    :visible.sync="dialogVisible"
    :title="dialogTitle"
    :wrapper-closable="false"
    size="500px"
  >
    <div class="drawer-container">
      <div class="content-container">
        <el-form ref="editForm" label-width="100px" :model="editForm" label-suffix=":">
          <el-row :gutter="10">

            <el-col :span="23">
              <el-form-item
                label="场馆名称"
                prop="name"
                :error="errorForm.name"
                :rules="[{required:true,message:'请填写场馆名称',trigger:'blur'}]"
              >
                <el-input v-model="editForm.name" placeholder="请填写场馆名称" />
              </el-form-item>
            </el-col>

          </el-row>
                 <el-row :gutter="10">

            <el-col :span="23">
              <el-form-item
                label="联系方式"
                prop="phone"
                :error="errorForm.phone"
                :rules="[{required:true,message:'请填写联系方式',trigger:'blur'}]"
              >
                <el-input v-model.number="editForm.phone" placeholder="请填写联系方式" />
              </el-form-item>
            </el-col>

          </el-row>
                 <el-row :gutter="10">

            <el-col :span="23">
              <el-form-item
                label="经度"
                prop="lat"
                :error="errorForm.lat"
                :rules="[{required:true,message:'请填写经度',trigger:'blur'}]"
              >
                <el-input v-model="editForm.lat" placeholder="请填写经度" />
              </el-form-item>
            </el-col>

          </el-row>
                 <el-row :gutter="10">

            <el-col :span="23">
              <el-form-item
                label="纬度"
                prop="lng"
                :error="errorForm.lng"
                :rules="[{required:true,message:'请填写纬度',trigger:'blur'}]"
              >
                <el-input v-model="editForm.lng" placeholder="请填写纬度" />
              </el-form-item>
            </el-col>

          </el-row>
                 <el-row :gutter="10">

            <el-col :span="23">
              <el-form-item
                label="详细地址"
                prop="address"
                :error="errorForm.address"
                :rules="[{required:true,message:'请填写详细地址',trigger:'blur'}]"
              >
                <el-input v-model="editForm.address" placeholder="请填写详细地址" />
              </el-form-item>
            </el-col>

          </el-row>
        </el-form>
      </div>
      <div class="footer-container">
        <el-button type="info" @click="dialogVisible=false">取 消</el-button>
        <el-button :loading="submitLoading" type="primary" @click="$confirmData">确 认</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import Index from './index'

export default Index
</script>
<style scoped lang="scss">
  @import "~@/styles/drawer";
</style>
