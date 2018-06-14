<template>
  <div class="login-container" v-sky-loading="loading">
    <form action="" class="form">
      <div class="input-container">
        <input type="text" v-model.trim="login.username">
      </div>
      <div class="input-container">
        <input type="text" v-model.trim="login.password">
      </div>
      <div class="button-container">
        <input type="button" value="登录" @click.stop="loginFun">
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        loading: false,
        login: {
          username: 'admin',
          password: 'admin'
        }
      }
    },
    methods: {
      loginFun() {
        this.loading = true
        this.axios.post("/Account/login", this.login)
          .then(_ => {
            // this.handlerRouter(_.data)
            this.handlerAllRouter()
            this.$router.push(`/`)//去首页
            this.loading = false
          })
          .catch(err => this.loading = false)//有后端情况走该分支
          // .catch(err => {//假如没有后端服务。直接模拟请求添加路由，但是没有按照后端的添加
          //   this.handlerRouter()
          //   this.$router.push(`/`)//去首页
          //   this.loading = false
          // })
      },
      handlerAllRouter() {//不考虑后端直接把所有的路由放上去，比如账号是super_admin
        const view = require.context('@/view', true, /\.vue$/);//如果是wepack4的话，第四个参数是'lazy',component:()=>view(key).default
        let temRoutes = view.keys().map(key => ({
          path: this._readPath(key),
          component: () =>
            import ( /* webpackChunkName: `${this._readPath(key)}` */ `@/view${this._readPath(key)}/index.vue`)
        }))
        this.$router.addRoutes(temRoutes)
      },
      handlerRouter(source){//暂不处理
        //使用context处理根据权限读取路由
        //this.$router.addRoutes(temRoutes)
      },
      _readPath(key) {
        return key.slice(1, key.indexOf('/index.vue')) //暂时写死,后续用正则
      },
    },
  }

</script>



<style scoped>
  .login-container {
    width: 100%;
    height: 100%;
    background: #2d3a4b;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form {
    width: 300px;
    height: 100px;
  }

  .input-container,
  button-container {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
    margin-bottom: 10px;
  }

  input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: #eee;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
  }

  input[type="button"] {
    width: 100%;
    height: 40px;
    line-height: 1;
    cursor: pointer;
    border: 1px solid #409eff;
    color: #fff;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    background: #409eff
  }

</style>
