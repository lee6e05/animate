<template>
  <div class="hello">

    <div class="wrapper">
      <section class="content">
        <header class="header">
           

        </header>
        <div class="body">
          <div class="moon"> 
          </div> 
           <img src="../assets/change.png" alt="" class=""> 
        </div>
        <footer class="footer"> 

        </footer>
      </section>

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
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  background: #ededed;
}

.content {
  background: #000;
  margin: 1rem;
}

.body {
  display: flex;
  align-items: center;
  justify-content: center;
}

.moon {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: #f00;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:0 0 10px 10px rgba(255,255,255,0.8);
  animation:  twinkling 3s infinite alternate; 
}

@-webkit-keyframes twinkling {
  from {
    opacity:0
  }
  to {
    opacity: 100%;
  }
  
}
@keyframes twinkling {
  from {
    opacity:0
  }
  to {
    opacity: 100%;
  } 
}

img{
  width:100%;
  height:100%;

}




</style>
