<template>
  <div class="login">
    <img class="bg-image" src="./images/bg.png" alt="bg">

    <div class="content">
      <!-- <div class="left-content"> -->
        <!-- <img class="left-image" src="./images/left-bg.png" alt="left-bg"> -->
      <!-- </div> -->

      <div class="right-content">
        <!-- <img class="logo-image" src="./images/logo.png" alt="logo"> -->
        <!-- <div class=""> -->
         <img class="logo-image" src="./images/icon.png" alt="logo">
        <!-- </div> -->
        <div class="login-content">

          <el-form ref="loginForm" :model="loginForm" :rules="rules">

            <div class="ipt-item">
              <img src="./images/user.png" class="user-icon" alt="user">

              <el-form-item
                prop="name"
                :rules="[{required:true, message:'请填写账号'}]"
              >
                <input
                  v-model="loginForm.name"
                  class="ipt"
                  type="text"
                  maxlength="25"
                  placeholder="请填写账号"
                  @keyup.enter="login"
                >
              </el-form-item>
            </div>

            <div class="ipt-item">
              <img src="./images/password.png" class="user-icon" alt="password">
              <el-form-item
                prop="password"
                :rules="[{required:true, message:'请填写密码'}]"
              >
                <input
                  v-model="loginForm.password"
                  class="ipt"
                  type="password"
                  maxlength="25"
                  placeholder="请填写密码"
                  @keyup.enter="login"
                >
              </el-form-item>
            </div>

            <el-button
              class="submit-btn"
              :loading="isLoading"
              @click.native="login"
            >
              马上登录
            </el-button>

          </el-form>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import Index from './'

export default Index
</script>

<style lang="scss" scoped>
  @import "./index";
</style>
<style>
  .el-form-item__error {
    font-size: 16px;
  }
</style>
