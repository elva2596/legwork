<template>
  <div id="login">
    <el-form ref="login-form" :model="form"  class="login_form" :rules="rules" >
      <h3>welcome to use legwork in school</h3>
      <el-form-item prop="name">
        <el-input v-model="form.name" placeholder="username"  auto-complete="off"></el-input>
      </el-form-item >
      <el-form-item prop="password">
        <el-input v-model="form.password" placeholder="password"  type="password"  auto-complete="off"></el-input>
      </el-form-item >
      <el-form-item >
        <el-button type="primary"   @click="submitForm('login-form')" :disabled="disabled" class="login-button">login</el-button>
        <el-button @click="resetForm('login-form')" :disabled="disabled" class="reset-button">reset</el-button>
      </el-form-item>
      <p class="admin-tip">have no account ? <span @click="register" class="register-tip">register</span></p>
    </el-form>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: {required: true, message: 'please fill username', trigger: 'blur'},
        password: {required: true, message: 'please fill password', trigger: 'blur'}
      },
      disabled: false
    }
  },
  methods: {
    /**
     * (description)
     * the funtion of login button
     * @param {String} formName
     * @returns 
     */
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if(valid) {
            this.login(this.form)
              .then(({status,data}) => {
                if (status===1) {
                  this.disabled = true
                  this.$message({
                    message: 'success',
                    type: 'success',
                    onClose: ()=>{
                      this.$router.push('/')
                    }
                  })
                } else if(status===0) {
                  this.$message({
                    message: data.message,
                    type: 'error'
                  })
                } else {
                  throw new Error(data.message)
                }
              })
              .catch(err=>{
                // capture error of server
                this.$message({
                  message: err.message.toString(),
                  type: 'error',
                  showClose: true,
                  duration: 0
                })
              })
        }
      })
    },
    // the function of reset button
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    register(){
      if(!this.disabled){
        this.$router.push("/register")
      }
    },
    ...mapActions(['login'])
  }
}
</script>
