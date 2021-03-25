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
                label="辅导员名称"
                prop="name"
                :error="errorForm.name"
                :rules="[
                  {
                    required: true,
                    message: '请填写辅导员名称',
                    trigger: 'blur',
                  },
                ]"
              >
                <el-input
                  v-model="editForm.name"
                  placeholder="请填写辅导员名称"
                />
              </el-form-item>
            </el-col>

            <el-col :span="23">
              <el-form-item
                label="联系方式"
                prop="phone"
                :error="errorForm.phone"
                :rules="[
                  {
                    required: true,
                    message: '请填写联系方式',
                    trigger: 'blur',
                  },
                ]"
              >
                <el-input
                  v-model="editForm.phone"
                  placeholder="请填写联系方式"
                />
              </el-form-item>
            </el-col>
            <el-col :span="23">
              <el-form-item
                label="所属专业"
                prop="majorId"
                :error="errorForm.majorId"
                :rules="[
                  {
                    required: true,
                    message: '请选择所属专业',
                    trigger: 'change',
                  },
                ]"
              >
                <el-select
                  v-model="editForm.majorId"
                  placeholder="所属专业"
                  style="width: 100%"
                  clearable
                >
                  <el-option
                    v-for="item in majorList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
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
