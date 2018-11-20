<template>
  <div class="register">
    <el-form ref="reg-form" :model="form"  class="reg_form" :rules="rules" >
      <h3>Welcome to use legwork in school</h3>
      <el-form-item prop="name">
        <el-input v-model="form.name" placeholder="username" :icon="iconName" @focus="dispearIconName" auto-complete="off"></el-input>
      </el-form-item >
      <el-form-item prop="password">
        <el-input v-model="form.password" placeholder="password"  type="password" :icon="iconPsd" @focus="dispearIconPass" auto-complete="off"></el-input>
      </el-form-item >
      <el-form-item prop="repeatPsd">
        <el-input v-model="form.repeatPsd" placeholder="confirm password"  type="password" :icon="iconRpsd" @focus="dispearIconRpsd" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="primary"  :loading="regFlag"  @click="submitForm('reg-form')" :disabled="disabled" class="register-button">register</el-button>
        <el-button @click="resetForm('reg-form')" :disabled="disabled" class="reset-button">reset</el-button>
      </el-form-item>
      <p class="admin-tip">I have an account，<span @click="login" class="login-tip">login</span></p>
    </el-form>
  </div>
</template>

<script>
import {signin} from "@/api";
export default {
  data(){
    const checkName = (rule,value,callback)=>{
      if(value===""){
        this.iconName = "close"
        return callback(new Error("用户名不能为空"))
      }
      // getUser({
      //   name:this.form.name
      // })
      // .then(({data:{status}})=>{
      //   if(status===0){
      //     setTimeout(()=>{
      //       this.iconName = "close"
      //       return callback(new Error("用户名已存在"))
      //     },500)
      //   }else{
      //     setTimeout(()=>{
      //       this.iconName = "check"
      //       callback()
      //     },500)
      //   }
      // })
      // .catch(err=>{
      //   this.$message({
      //     message:err.message.toString(),
      //     type: 'error',
      //     duration:0,
      //     showClose:true
      //   })
      // })

    }
    const checkpass = (rule,value,callback)=>{
      if(value===""){
        this.iconPsd = "close"
        return callback(new Error("请输入密码"))
      }else{
        if(this.form.repeatPsd!==""){
          this.$refs["reg-form"].validateField('repeatPsd');
        }
        this.iconPsd = "check"
          callback()
      }
    }
    const checkRpsd = (rule,value,callback)=>{
      if(value===""){
        this.iconRpsd = "close"
        return callback(new Error("请再次输入密码"))
      }else if(value!==this.form.password){
          this.iconRpsd="close"
          return callback(new Error("两次输入的密码不同"))
      }else{
        this.iconRpsd= "check"
        callback()
      }
    }
    return {
      form:{
        name:"",
        password:"",
        repeatPsd:""
      },
      iconName:"",
      iconPsd:"",
      iconRpsd:"",
      message:"",
      disabled:false,
      rules:{
        // name:{required:true,message:"请输入用户名",trigger:"blur"},
        name:{validator:checkName,trigger:"blur"},
        // password:{required:true,message:"请输入密码",trigger:"blur"},
        password:{validator:checkpass,trigger:"blur"},
        // repeatPsd:{required:true,message:"请再次输入密码",trigger:"blur"}
        repeatPsd:{validator:checkRpsd,trigger:"blur"}
      },
      regFlag:false
    }
  },
  methods:{
    check(){
      this.rules.message = "error"
    },
    login(){
      if(!this.disabled){
        this.$router.push("/login")
      }
    },
    async submitForm(formName){
      console.log(123)
      signin({email:'18642175656@163.com', password:'123456'})
      let{iconName,iconPsd,iconRpsd} = this
      if(iconName===""){
        this.$refs["reg-form"].validateField('name');
      }
      if(iconPsd===''){
        this.$refs["reg-form"].validateField('password');
      }
      if(iconRpsd===''){
        this.$refs["reg-form"].validateField('repeatPsd');
      }

      if(iconName==='check'&&iconPsd==="check"&&iconRpsd==="check"){
        
        // 发请求到后台存到数据库
        // try{
        //   let {data:{status}} = await reg(this.form)
        //   if(status===1){
        //     this.disabled = true
        //     this.$message({
        //       message:"注册成功",
        //       type: 'success',
        //       onClose:()=>{
        //         this.$router.replace("/login")
        //       }
        //     })
        //   }else{
        //     throw new Error("注册失败")
        //   }
        // }catch(e){
        //   this.$message({
        //     message:"注册失败",
        //     type:"error"
        //   })
        // }
      }
    },
    resetForm(formName){
      this.iconName = ""
      this.iconPsd = ""
      this.iconRpsd = ''
      this.$refs[formName].resetFields()
    },
    dispearIconName(){
      this.iconName = ""
    },
    dispearIconPass(){
      this.iconPsd = ""
    },
    dispearIconRpsd(){
        this.iconRpsd = ''
    }
  },
  created(){
    // console.log(this.$http)
  }
}
</script>

<style lang="css" scoped>
  .reg_form{
    width:350px;
    padding:10px 30px;
    margin:auto;
    background: white;
    /*背景以后要改*/
    border-radius: 5px;
  }
  .reg_form h3{
    font-size: 18px;
    margin-bottom:2rem;
    margin-top: 2rem;
    font-weight: 700;
  }
</style>
