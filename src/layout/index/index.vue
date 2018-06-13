<template>
    <div>
        <button @click="go">去登录</button>
    </div>
</template>
<script>
    export default {
        name: "index",
        methods: {
            go(){
                this.$router.push('login')
            }
        }
      }
</script>