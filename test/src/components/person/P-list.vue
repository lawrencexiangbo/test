<template>
    <div class="box">
        <div class="left">
            <div @click="clickTo('/part1')" :class="{checked:this.path=='/part1'}">part1</div>
            <div @click="clickTo('/part2')" :class="{checked:this.path=='/part2'}">part2</div>
            <div @click="clickTo('/part3')" :class="{checked:this.path=='/part3'}">part3</div>
            <div @click="clickTo('/part4')" :class="{checked:this.path=='/part4'}">part4</div>
            <div @click="clickTo('/part5')" :class="{checked:this.path=='/part5'}">part5</div>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                path:'/part1'
            }
        },
        methods:{
            clickTo(path){
                this.$router.history.push(`/person${path}`)
                this.path=path

            }
        },
        created(){
            this.path=`/${location.hash.split('/')[2]}`
            
        }

        
    }
</script>

<style lang="less" scoped>
.box{
    display: flex;
    height: 500px;
    .left{
        width: 150px;
        background: #ccc;
    };
    .right{
        flex: 1;
        background: red;
    }
}
.checked{
    background: green;
}
</style>