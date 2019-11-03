<template>
  <div class="part">
    <div v-for="item in proList" :key="item.id" class="pro">
      <proItem :pro="item" />
    </div>
  </div>
</template>

<script>
import proItem from "./proItem";
export default {
  data() {
    return {
      proList: [
        {
          id: "1",
          src: require("../../assets/imgs/xckc.png"),
          title: "吃喝玩乐一条龙",
          price: 100
        },
        {
          id: "2",
          src: require("../../assets/imgs/xxyl.png"),
          title: "吃喝玩乐一条龙",
          price: 100
        },
        {
          id: "3",
          src: require("../../assets/imgs/zby.png"),
          title: "吃喝玩乐一条龙",
          price: 100
        },
        {
          id: "4",
          src: require("../../assets/imgs/zlam.png"),
          title: "吃喝玩乐一条龙",
          price: 100
        },
        {
          id: "5",
          src: require("../../assets/imgs/zzc.png"),
          title: "吃喝玩乐一条龙",
          price: 100
        },
        {
          id: "6",
          src: require("../../assets/imgs/xckc.png"),
          title: "吃喝玩乐一条龙",
          price: 100
        }
      ]
    };
  },
  components: {
    proItem
  }
};
</script>

<style lang="less" scoped>
.part{
    display: flex;
    flex-direction: row;
    width:1200px;
    justify-content: space-between;
    margin: 0 auto;
    flex-wrap: wrap;
    .pro{
        border: 1px solid #ccc;
        padding: 20px 30px;
        display: flex;
        align-items: center;
        justify-items: center;
         
    }
}
</style>