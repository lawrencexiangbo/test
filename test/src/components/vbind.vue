<template>
    <div>
        <p :class="{curColor:curTab==1}" @click="curClick(1)">选项1</p>
        <p :class="{curColor:curTab==2}" @click="curClick(2)">选项2</p>
        <p :class="{curColor:curTab==3}" @click="curClick(3)">选项3</p>
        <div  v-show="curTab==1">盒子1</div>
        <div  v-show="curTab==2">盒子2</div>
        <div  v-show="curTab==3">盒子3</div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                curTab:1,

            }
        },
        methods:{
            curClick(key){
                this.curTab=key
            }
        }
        
    }
</script>

<style lang="less" scoped>
.curColor{
    background: #ccc;
    color:red
}

</style>