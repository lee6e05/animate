  
<template>
  <div>{{hass}}</div>

</template>
<script>
import bus from "@/components/bus"
    export default{
         data(){
          return {
              result:1
          }  
      },
      created(){
          
      },
      props:['hhas'],
      methods:
      {
          
      },
      events:{ 
      },
      computed:{
          hass:function(){
              return this.hhas+"111";
          }
      }
    }
</script>