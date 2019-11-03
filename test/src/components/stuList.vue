<template>
    <div class="stulist">
        <h3>学籍管理系统</h3>
        <p>姓名：<input v-model="name" placeholder="姓名"/></p>
        <p>年龄：<input v-model="age" placeholder="年龄"/></p>
        <p>性别：<input v-model="sex" placeholder="性别"/></p>
        <p>手机：<input v-model="phone" placeholder="手机"/></p>
        <button @click="addList">保存</button>


        <table>
            <thead>
                <tr>
                    <td>姓名</td>
                    <td>年龄</td>
                    <td>性别</td>
                    <td>手机</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,key) in stuList" :key="key">
                    <td>{{item.name}}</td>
                    <td>{{item.age}}</td>
                    <td>{{item.sex}}</td>
                    <td>{{item.phone}}</td>
                    <td><span><button  class="del-btn" @click="delStuList(key)">删除</button></span></td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                name:'',
                age:'',
                sex:'',
                phone:'',
                stuList:[{name:'赵云',age:'22',sex:'男',phone:'13800000000'}]
            }
        },
        methods:{
          addList(){
              let stu={name:this.name,age:this.age,sex:this.sex,phone:this.phone}
              this.stuList.push(stu)
                
          },
          delStuList(key){
              
              this.stuList.splice(key,1)
          }
        }
        
    }
</script>

<style lang="less" scoped>
    .stulist{
        h3{
            border-bottom: 1px solid #f2f2f2;
            color: #ccc;
        };
        input{
            width: 500px;
            height: 30px;
            text-indent: 1em;
            border:1px solid #eaeaea;
            border-radius: 5px;
            
        };
        table{
            width: 500px;
                border-collapse: collapse;
            td{
                border:1px solid #f2f2f2;
                padding: 5px;
            };
            span{
                border-radius: 5px;
                padding: 5px;
                overflow: hidden;
                    background: #337ab7;
                .del-btn{
                    background: #337ab7;
                    padding: 5px;
                    color: #fff;
                    border: none
                }
            }

        }
    }
</style>