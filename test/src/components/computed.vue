<template>
  <div>
    <table>
      <thead>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小结</th>
      </thead>
      <tbody>
        <tr v-for="(item,index) in pud" :key="item.id">
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>
            <button @click="changenum(index,-1)" :disabled="item.num==1">-</button>
            <span>{{item.num}}</span>
            <button @click="changenum(index,1)">+</button>
          </td>
          <td>{{item.price*item.num}}</td>
        </tr>
      </tbody>
    </table>
    <div>总价：{{countTotle}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pud: [
        { id: "1", name: "袜子", price: 10, num: 1 },
        { id: "2", name: "袜子", price: 10, num: 1 },
        { id: "3", name: "袜子", price: 10, num: 1 },
        { id: "4", name: "袜子", price: 10, num: 1 }
      ]
    };
  },
  computed: {
    countTotle() {
        let totle=0;
      for(let item of this.pud){
          totle+=item.price*item.num
      }
          return totle
    }
  },
  methods:{

      changenum(index,val){
        //   if(this.pud[index].num<1){
        //       this.pud[index].num=1
        //   }else{

              this.pud[index].num+=val
        //   }
      }
  }
};
</script>

<style lang="scss" scoped>
</style>