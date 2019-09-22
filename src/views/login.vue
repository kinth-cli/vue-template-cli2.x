<template>
  <div>
    <button type="button" @click="login">登录</button>
    <p>loginState: {{$store.state.login.loginState}}</p>
    <p v-if="$store.state.login.loginState">user: {{$store.state.userInfo.name}}</p>
    <router-link to="/userList">userList</router-link>
    <router-link to="/userDetail">userDetail</router-link>
  </div>
</template>
<style scoped>
</style>
<script>
import { loginApi } from '../api/index' // 按需引入login页的api

export default {
  name: 'login',
  mounted () {
    console.log(loginApi)
    console.log(this.$store.state)
  },
  methods: {
    login () {
      // loginApi.signIn({
      //   user: '123',
      //   password: '12345'
      // })
      //   .then(res => {
      //     this.$router.replace('/home')
      //   }, err => {
      //   })
      this.$store.dispatch('loginSuccess', true)
      this.$store.dispatch('setName', 'test')
      console.log(this.$store.state)
    }
  }
}
</script>
