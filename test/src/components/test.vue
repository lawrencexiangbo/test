<template>
    <div>
        <h1 id="cstes">搞一下{{name}}{{age}}</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return{

                name:'123',
                age:50
            }
        }
    }
</script>

<style lang="less" scoped>
    #cstes{
        color: red;
        line-height: 50px
    }
</style>