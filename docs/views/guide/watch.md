---
title: watch监听
date: 2021-09-01
sidebar: true
sidebarDepth: 5
tags:
- "watch监听"
- vue
---

# watch监听

::: tip  
watch
需要在数据变化时执行异步或开销较大的操作时，推荐使用watch监听
就是用来相应数据变化对我们的数据进行监听

immediate
被监听的变量在第一次加载时就会被监听到
不写或者为false时，则不会立即监听

deep：
当我们监听对象或者是数组时，需要进行深度监听才能相应数据的变化
:::

**用法：**

侦听组件实例上的响应式 property 或函数计算结果的变化。回调函数得到的参数为新值和旧值。我们只能将顶层的 data、props 或 computed property 名作为字符串传递。对于更复杂的表达式，用一个函数取代。

**示例：**
```js
export default {
        name: "newHome",
        components: {World},
        data(){
            return{
                numberone:'helloworld',
                user:{id:1,name:"qwe"},
                userList: [{id:1,name:'zs'},{id:2,name:'ls'}]
            }
        },
        methods:{
          changeName(){
              this.user.name="zzz";
              this.user.id=2;
          },
            changeUserList(){
              this.userList[0].name='ww';
              this.userList[1].name='xm';
            }
        },
        /*watch监听*/
        watch:{
            /*item1：最新值 item2：上一个旧值*/
            /*两个参数可以根据命名规范随便命名*/
            /*numberone(item1,item2){
                console.info("item1",item1);
                console.info("item2",item2);
            }*/
            /*为了可以第一时间就执行我们的监听函数，而不是只有数据变化时才监听*/
            numberone:{/*完整体的监听*/
                handler(item1,item2){
                    console.info("item1",item1);
                    console.info("item2",item2);
                },
                immediate:true//watch监听的操作的函数会立即执行
            },
            /*监听对象的某一个值*/
           /* 'user.name'(item1,item2){
                console.info("item1(对象的新值)",item1);
                console.info("item2（对象的旧值）",item2);
            }*/
           user:{//监听对象
               handler(item1, item2) {
                   console.info("item1整个对象",item1);
                   console.info("item2整个对象",item2);
               },
               deep:true,//深度监听
           },
            userList:{//监听数组
               handler(item){
                   console.info("itme1数组",item);
               },
                deep:true,//深度监听
            }
        }
    }
```
**：deep**

为了发现对象内部值的变化，可以在选项参数中指定 deep: true。这个选项同样适用于监听数组变更。

注意：当变更（不是替换）对象或数组并使用 deep 选项时，旧值将与新值相同，因为它们的引用指向同一个对象/数组。Vue 不会保留变更之前值的副本。
```vue
deep:true,//深度监听
```
**：immediate**

在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调：
```vue
immediate:true//watch监听的操作的函数会立即执行
```