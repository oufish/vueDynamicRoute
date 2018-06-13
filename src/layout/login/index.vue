<template>
  <div>
    <button @click="go">去首页</button>
    <button @click="godemo">生成动态路由</button>
    <button @click="back(1)">去demo1</button>
    <button @click="back(2)">去demo2</button>
    <button @click="back(3)">去demo3</button>
    <button @click="back(4)">去demo4</button>
    <button @click="back(5)">去demo5</button>
    <button @click="back(6)">去demo6</button>
    <button @click="back(7)">去demo7</button>
    <button @click="back(8)">去demo8</button>
    <button @click="back(9)">去demo9</button>
    <button @click="back(10)">去demo10</button>
    <button @click="back(11)">去demo11</button>
    <button @click="back(12)">去demo12</button>
    <button @click="back(13)">去demo13</button>
    <button @click="back(14)">去demo14</button>
    <button @click="back(15)">去demo15</button>
    <button @click="back(16)">去demo16</button>
    <button @click="back(17)">去demo17</button>
    <button @click="back(18)">去demo18</button>
    <button @click="back(19)">去demo19</button>
    <button @click="back(20)">去demo20</button>
    <button @click="back(21)">去demo21</button>
    <button @click="back(22)">去demo22</button>
  </div>
</template>
<script>
  export default {
    name: "login",
    methods: {
      go() {
        this.$router.push('/')
      },
      godemo() {
        const view = require.context('@/view', true, /\.vue$/);
        let temRoutes = view.keys().map(key => ({
          path: this._readPath(key),
          component: () =>
            import ( /* webpackChunkName: "demo" */ `@/view${this._readPath(key)}/index.vue`)
        }))
        this.$router.addRoutes(temRoutes)
      },
      _readPath(key) {
        return key.slice(1, key.indexOf('/index.vue'))//暂时写死,后续用正则
      },
      back(num) {
        this.$router.push(`demo${num}`)
      }
    }
  }

</script>
