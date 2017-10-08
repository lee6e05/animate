<template>
  <div>
    <h1>{{result}}</h1>
    <myCanvas ref="mycanvas" :count="count" @incrementCount="incrementCount"></myCanvas>
 </div>

    
</template>
<style >
     
</style>
<script>
    import bus from "@/components/bus"
    import myCanvas from '@/components/mycanvas'
    export default {
        data(){
           return {
               count:1,
               score:0 ,
               result:"开局"
           }
        }, 
        methods:{
            incrementCount:function(endflag)
            {
                this.count ++;
                let type = (this.count % 2)?"白方" :"黑方";
                if(endflag){

                    this.result = type +"赢了";
                    return true; 
                }
                this.result =  ((this.count % 2)?"黑方" :"白方") + "下棋"; 
                return false; 
                
            } 
        },
        components:{
            myCanvas
        },
        computed:{
            
        },
        created(){
            setTimeout(()=>{
                this.result =  ((this.count % 2)?"黑方" :"白方") + "下棋"; 
            }, 1000);
        }
        
        
    }
</script>