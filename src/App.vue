<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app'
}


</script>

<style>
@import '/static/style.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 00px;
}

@keyframes load {
  0% {
    background: #f00;
    position: absolute;
    width: 0;
    height: 3px;
    left: 0;
    top: 0
  }
  50% {
    background: #FFCC00;
    position: absolute;
    width: 50%;
    height: 3px;
  }
  100% {
    background: #00CC99;
    position: absolute;
    width: 100%;
    height: 3px;
  }
}

@-webkit-keyframes load {
  0% {
    background: #f00;
    position: absolute;
    width: 0;
    height: 3px;
    left: 0;
    top: 0
  }
  50% {
    background: #FFCC00;
    position: absolute;
    width: 50%;
    height: 3px;
  }
  100% {
    background: #00CC99;
    position: absolute;
    width: 100%;
    height: 3px;
  }
}

.loading {
  animation: load 5s;
  -webkit-animation: load 5s;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  
}
</style>
