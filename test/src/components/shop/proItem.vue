<template>
    <div class="puds">
        <img :src="pro.src" alt="">
        <p>{{pro.title}}</p>
        <p class="col">&yen;{{pro.price}}.00元</p>
    </div>
</template>

<script>
    export default {
        props:['pro']
    }
</script>

<style lang="less" scoped>
    .col{
        color: red
    }
</style>