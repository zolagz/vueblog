---
title: 组合式 API
date: 2021-09-06
tags:
- "vue3"
---

# Composition API


## setup
> **1.什麽是setup** 
     >vue3 ==》使用组合式API
> 
> **2.为什么要用setup**
>>data,computed,methods,watch 来处理我们租金的逻辑和数据
当我们组件“越来越大”的时候，会导致组件难以阅读和理解，
要通过 setup 将某一部分抽离成函数，让开发者省心
> 
> **3.setup基础知识**
> >1>：setup所在位置是beforeCreate 和created 之前
> 
> >2>: 因为1）带来的影响 我们如果想要使用setup的话 data数据和methods方法都无法使用
> 
> >3>: 在setup单独声明一个变量时，如果setup 变量名
和vue中的data名字一样，setup的优先级高

## ref

> ref创建响应式引用

`ref`函数声明称为count的**响应式属性**。 它可以包装任何原始类型或对象，并**返回**它的响应式引用。 传递元素的值将保留在创建引用的值属性中。 例如，如果要访问count引用的值，则需要扩展请求`count.value`.
```vue
<template>

  <h3 @click="addone">点击加1：{{count}}</h3>

</template>

<script>
import {ref} from 'vue' //引入ref 声明数据
export default {
  name: "Setupdemo",
  data() {
    //声明vue所需变量
    return {
      msg: 'hello'
    }
  },
  //相应方法
  methods: {},
  setup() {//在beforeCreate之前
    const count = ref(0);

    function addone() {
      count.value++ //先通过.value 拿到声明数据的变量 自加一
    }

    return {
      count,
      addone,
    }
  }
}
</script>
```
> 第一种使用ref声明数据
```vue
<template>
    <div>
        <h1>学习setup</h1>
        
        <h3>setup声明的值：{{name}}</h3>
        <h3>setup声明的值：{{user}}</h3>
    </div>
</template>

<script>
    import {ref} from 'vue' //引入ref 声明数据
    export default {
        name: "Setupdemo",
        data(){
            //声明vue所需变量
            return{
                msg:'hello'
            }
        },
        //相应方法
        methods:{

        },
        //------------第一种使用ref声明数据---------------
        setup(){
            console.info('setup')
            /*通过ref 去使用，声明一个响应式变量*/
            const name = ref('张三');
            const user = ref({username:'张三',userage:111});
            const userlist = ref([
                {username:'法外狂徒张三',userage:111},
                {username:'张三',userage:111}
                ]);
            console.info('setup声明的String数据==》',name.value);
            console.info('setup声明的user数据==》',user.value);
            console.info('setup声明的userlist数据==》',userlist.value);
            return{
                name,user,userlist
            }
        },
        //第二个生命周期，进入页面即加载
        created(){
          console.info('created',this.msg)
        },
        beforeCreate(){
            console.info('beforeCreate',this.msg)
        },
        mounted(){
            console.info('mounted',this.msg)
        },

    }
</script>

<style scoped>

</style>
```
## reactive
> 第二种使用 reactive 声明数据
> 
> toRefs()将响应式的对象变为普通对象 再解构，在模板中就可以直接使用属性，不用name,user,userlist
   
    ...toRefs(data)

```vue
<template>
    <div>
        <h1>学习setup</h1>
         
        <h3>setup声明的值：{{name}}</h3>
        <h3>setup声明的值：{{user}}</h3>
        <h3>setup声明的值：{{userlist}}</h3>
    </div>
</template>

<script>
    import {ref,reactive,toRefs} from 'vue' //引入ref 声明数据
    export default {
        name: "Setupdemo",
        data(){
            //声明vue所需变量
            return{
                msg:'hello'
            }
        },
        //相应方法
        methods:{

        },
        //------------第二种使用 reactive 声明数据---------------
        setup(){
            console.info('setup')
           
            const data = reactive({
                name:'张三',
                user:{username:'张三',userage:111},
                userlist:[{username:'法外狂徒张三',userage:111},{username:'张三',userage:111}]
            })
            return{
                //toRefs()将响应式的对象变为普通对象 再解构，在模板中就可以直接使用属性，不用name,user,userlist
                ...toRefs(data)
               
            }
        },
        //第二个生命周期，进入页面即加载
        created(){
          console.info('created',this.msg)
        },
        beforeCreate(){
            console.info('beforeCreate',this.msg)
        },
        mounted(){
            console.info('mounted',this.msg)
        },

    }
</script>

<style scoped>

</style>
```

> 在setup单独声明一个变量时，如果setup 变量名 和vue中的data名字一样，setup的优先级高

```vue
<template>
    <div>
        <h1>学习setup</h1>
 
        <h3>vue中的数据：{{msg}}</h3>
 
        <h3 @click="changeName">改变名字：{{newUser}}</h3>
    </div>
</template>

<script>
    import {ref,reactive,toRefs} from 'vue' //引入ref 声明数据
    export default {
        name: "Setupdemo",
        data(){
            //声明vue所需变量
            return{
                msg:'hello'
            }
        },
        //相应方法
        methods:{

        },
        setup(){//在beforeCreate之前
        
            /*通过ref 去使用，声明一个响应式变量*/
            const msg = ref('not good');
            console.info('==》',msg);
            
            /*通过reactive去使用，声明一个响应式变量*/
            const data = reactive({//如果setup 变量名 和vue中的data名字一样，setup的优先级高
                name:'张三',
                msg:'not good',
            });
 
            const newUser = reactive({//声明变量
                username:'qwe',
                age:12
            });
            
            function changeName() {//点击事件
                newUser.username = 'zzzzzzzzzzz';
            }
          
            return{
                ...toRefs(data),
                msg,
                 //返回
                newUser,
                changeName, 
            }
        },
    }
</script>

<style scoped>

</style>
```

## 生命周期
### 挂载
    onBeforeMount,onMounted
```
<script>
    import {onBeforeMount,onMounted} 
    export default {
        name: "Setupdemo",
        data(){
            //声明vue所需变量
            return{
                msg:'hello'
            }
        },
        //相应方法
        methods:{

        },
        setup(){//在beforeCreate之前
           
            onBeforeMount(()=>{
                console.info('setup中的挂载生明周期onBeforeMount')
            });
            onMounted(()=>{
                console.info('setup中的挂载生明周期onMounted')
            })
            return{
                 
            }
        },
        //第二个生命周期，进入页面即加载
        created(){
          console.info('created',this.msg)
        },
        beforeCreate(){
            console.info('beforeCreate',this.msg)
        },
        beforeMount(){

        },
        mounted(){
            console.info('mounted',this.msg)
        },

    }
</script>
 
```



