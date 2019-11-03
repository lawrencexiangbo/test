import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './pages/index'


Vue.use(VueRouter)

export default new VueRouter({
    routes:[{
        path:'/',
        component:Index
    },{
        path:'/login',
        component:()=>import('./pages/Login')
    },{
        path:'/reg',
        component:()=>import('./pages/Reg.vue')
    },{
        path:'/stulist',
        component:()=>import('./components/stuList')
    },{
        path:'/shop',
        component:()=>import('./components/shop/proList.vue')
    },{
        path:'/test',
        component:()=>import('./components/test')
    },
    {
        path:'/person',
        component:()=>import('./components/person/P-list.vue'),
        children:[
            {path:'/person/part1',component:()=>import('./components/person/part1.vue')},
            {path:'/person/part2',component:()=>import('./components/person/part2.vue')},
            {path:'/person/part3',component:()=>import('./components/person/part3.vue')},
            {path:'/person/part4',component:()=>import('./components/person/part4.vue')},
            {path:'/person/part5',component:()=>import('./components/person/part5.vue')},
        ]
    }]
})