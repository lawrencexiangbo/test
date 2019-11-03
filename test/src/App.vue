<template>
  <div id="app">
   <!-- <proList/> -->
   <router-view></router-view>
   <button @click="clickTo('/person/part1')">p-list</button>
  </div>
</template>

<script>

// import stuList from './components/stuList'
// import vbind from './components/vbind'
// import computed from './components/computed'
// import proList from './components/shop/proList'

export default {
  components:{
    // stuList,
    // vbind,
    // computed,
    // proList
  },
  methods:{
    clickTo(path){
      this.$router.history.push(path)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
