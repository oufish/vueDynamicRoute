<template>
  <div>
    <button v-for="(item,index) in demo" :key="item.id" @click="go(item.id)">{{item.name}}</button>
  </div>
</template>
<script>
  export default {
    name: "index",
    data(){
        return{
            demo:[
                {"id":"1","name":"去demo1"},
                {"id":"2","name":"去demo2"},
                {"id":"3","name":"去demo3"},
                {"id":"4","name":"去demo4"},
                {"id":"5","name":"去demo5"},
                {"id":"6","name":"去demo6"},
                {"id":"7","name":"去demo7"},
                {"id":"8","name":"去demo8"},
                {"id":"9","name":"去demo9"},
                {"id":"10","name":"去demo10"},
                {"id":"11","name":"去demo11"},
                {"id":"12","name":"去demo12"},
                {"id":"13","name":"去demo13"},
                {"id":"14","name":"去demo14"},
                {"id":"15","name":"去demo15"},
                {"id":"16","name":"去demo16"},
                {"id":"17","name":"去demo17"},
                {"id":"18","name":"去demo18"},
                {"id":"19","name":"去demo19"},
                {"id":"20","name":"去demo20"},
                {"id":"21","name":"去demo21"},
                {"id":"22","name":"去demo22"}
            ]
        }
    },
    methods: {
      go(num) {
        this.$router.push(`demo${num}`)
      }
    }
  }

</script>
