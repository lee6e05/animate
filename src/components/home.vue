<template>
  <div class="hello">
    <header>
      <span>{{ msg }}</span> 

    </header>
   
    
    <div>原本数组：
      <span v-for="i in items">{{i}} </span>
    </div>
    <div>通过冒泡排序:
      <span v-for="i in buble(items)">{{i}} </span>
    </div>
     <div>通过选择排序:
      <span v-for="i in selectSort(items)">{{i}} </span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'li6E05',
  data() {
    return {
      msg: 'li6E05',
      items: [3, 2, 1, 5, 6, 7, 8, 10] 
    }
  },
  methods: {
    buble: function(myarray) {
        var plength = myarray.length;
        for(var i = plength; i >=0; i --){
          for(var j = 0; j < i; j++){
            if(myarray[i]<myarray[j]){ 
              [myarray[i],myarray[j]]=[myarray[j],myarray[i]]
            }
          }
        }
        return myarray; 
    },
    selectSort: function(myarray){
      var plength = myarray.length;
      for(var i = 0; i < plength - 1; i ++){
        for(var j=i+1; j < plength; j ++){
          if(myarray[i]>myarray[j]){ 
            [myarray[i],myarray[j]]=[myarray[j],myarray[i]]
          }
        } 
      }
      return myarray; 
    },
    insertSort:function(myarray){
        
        return myarray;
    } 
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}


img{
  max-width: 100%;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
header{
  padding:10px;
  margin:0;

}
.hello{
  text-align: left;
}
 

</style>
