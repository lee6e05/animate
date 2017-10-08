<template>
    <div>

       
        <p></p>
        <p>hello {{world}}</p>
        <p v-text="'hello' + world"></p>
        <p>{{`hello ${world}`}}</p>
        <input :value="src">
        <p  v-text="`hello ${world}`"></p>
        <p v-once>hello world</p>
        <p v-html="html"> </p>
        <button @click="world='ziksang'">has改变wrold值</button> 
        <button @click="count++">zengjia</button>
        <button @click="count--">jianshao</button>
        <span>{{count}}</span>  
        <p>{{name}}</p> 
       <loading   @click.native ="buttonClick()"></loading>
        <input v-model="name"> 


        

        <!-- <ul v-for="item in items">{{item | myfilter(item)}}</ul> 
           <ul>
             <li v-for="(item,index) in memberList" @click="memberDetail(index)">
                 <span>{{item.custName}}</span>
                 <span>{{item.age}}</span>
                 <span>{{item.joinTime}}</span>
             </li>
         </ul> -->

      <ul>
         <li v-for = " (item,index) in list" v-text='`${item} - ${index} `'></li>
      </ul>

      <ul>
         <li v-for = " (item,index) in filter" v-text='`${item} - ${index} `'></li>
      </ul>

      <button @click="randomList">随机重置数组的值</button>

       <my-article v-for='item in artList' ref="div"  :art-list='item'></my-article>

       <input v-model="artList[1].name">


        <div> 
       <textarea v-model="content" :maxlength="totalcount"></textarea>
        <p>你还可以输入{{left}}</p>
        </div>


         <loading v-bind:hhas="hhass"></loading> 
         <input type="text" v-model="hhass">
 

    </div>
</template>
<style scoped>

body,html {width:100%;height:100%}
h1{margin-top:10rem;}
.layer{width:100%;height:100%;position:fixed;top:0;left:0;z-index:99;background:rgba(0,0,0,.5)}


</style> 

<script>

   
   import myArticle from '@/components/myArticle'
   import loading from '@/components/loading'
   import Vue from "Vue"
 
    export default {
       created () {
         //就当看作是ajax在初始化进入的时候从后台获取的用户列表数据
         this.memberList = [
            {custName : "ziksang1",age:20,joinTime : "2014-01-02",custId:1},
            {custName : "ziksang2",age:21,joinTime : "2014-01-03",custId:2},
            {custName : "ziksang3",age:22,joinTime : "2014-01-04",custId:3},
            {custName : "ziksang4",age:23,joinTime : "2014-01-05",custId:4},
         ],
         this.artList = [
            {name : 'ziksang1' , startTime : '1小时前' , content:'aaaaaaaaa',good : 1},
            {name : 'ziksang2' , startTime : '2小时前' , content:'bbbbbbbbb',good : 2},
            {name : 'ziksang3' , startTime : '3小时前' , content:'ccccccccc',good : 3},
            {name : 'ziksang4' , startTime : '4小时前' , content:'ddddddddd',good : 4}
        ];
       
        var getJSON = function(url) {
  var promise = new Promise(function(resolve, reject){
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
  });

  return promise;
};

 
  

 
    

          
     },
     data () {
          return {
              world : "world", 
              html:"<div style='color:red'>red</div>",
              src:"src",
              count: 0,
              name:"",
              list:[1,2,3,4,5,6,7,8,9],
              content:"",
              items:[
                  "123",
                  "456",
                  "789" 
              ], 
              hhass:"",
             memberList : [],
             artList : []  ,
                 list : [ 1, 2, 3, 4],
            list2 : [ 7, 8, 9, 0 ],
            content:"",
            totalcount:200
               
          }
     },
            
     methods:{
         
         buttonClick (){
              console.log("ssss")
         },
          memberDetail (index) {
             sessionStorage.custId = this.memberList[index].custId; 
         }, 
        changeList () {
            this.list[2] = 3
        }, 
        changeList2 () {
            this.length = 1
        }, 
        change3 () {
            Vue.set(this.list,1,0)
        }, 
        change4 () {
            this.list.splice(1,1,5)
        },
         randomList () {
            this.list = this.list.map(item => {
                return item+Math.round(Math.random()*9+1)
            })
             this.$emit("hhas",1);

        },
        spin(){
            
        },
        warn(message, event){
            alert(message);
            if(event) event.preventDefault();
            
        }

     },
     components:{ 
         loading,
         myArticle
     },
     filters:{
         myfilter:function(data){
             return data.split("").reverse().join("");
         }

     },
     watch:{

     },
     computed:{
           filter () {
            return this.list.filter((item)=>{
                 return item % 2
            })
        },
        left(){
            return this.totalcount - this.content.length
        }


     },
     events:{
         "mytest":function(msg){
             console.log("ssss")
         },
         "hhas":function(){
             console.log("tttttt")
         }
     }
   
}

</script>