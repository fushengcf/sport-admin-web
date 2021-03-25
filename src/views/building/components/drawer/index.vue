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
        <el-form
          ref="editForm"
          label-width="100px"
          :model="editForm"
          label-suffix=":"
        >
          <el-row :gutter="10">
            <el-col :span="23">
              <el-form-item
                label="楼栋名称"
                prop="name"
                :error="errorForm.name"
                :rules="[
                  {
                    required: true,
                    message: '请填写楼栋名称',
                    trigger: 'blur',
                  },
                ]"
              >
                <el-input
                  v-model="editForm.name"
                  placeholder="请填写楼栋名称"
                />
              </el-form-item>
            </el-col>

            <el-col :span="23">
              <el-form-item
                label="年级"
                prop="gradle"
                :error="errorForm.gradle"
                :rules="[
                  { required: true, message: '请选择年级', trigger: 'change' },
                ]"
              >
                <el-select v-model="editForm.gradle" style="width: 100%">
                  <el-option label="大一" :value="1" />
                  <el-option label="大二" :value="2" />
                  <el-option label="大三" :value="3" />
                  <el-option label="大四" :value="4" />
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="23">
              <el-form-item
                label="经度"
                prop="lng"
                :error="errorForm.lng"
                :rules="[
                  { required: true, message: '请填写经度', trigger: 'blur' },
                ]"
              >
                <el-input v-model="editForm.lng" placeholder="请填写经度" />
              </el-form-item>
            </el-col>
            <el-col :span="23">
              <el-form-item
                label="经度"
                prop="lat"
                :error="errorForm.lat"
                :rules="[
                  { required: true, message: '请填写纬度', trigger: 'blur' },
                ]"
              >
                <el-input v-model="editForm.lat" placeholder="请填写角色纬度" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="footer-container">
        <el-button type="info" @click="dialogVisible = false">取 消</el-button>
        <el-button :loading="submitLoading" type="primary" @click="$confirmData"
          >确 认</el-button
        >
      </div>
    </div>
  </el-drawer>
</template>

<script>
import Index from "./index";

export default Index;
</script>
<style scoped lang="scss">
@import "~@/styles/drawer";
</style>
