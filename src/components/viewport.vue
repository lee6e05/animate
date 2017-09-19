 <template>
    <section>
        <img src="../assets/logo.png" alt="">
        <div id="loading"></div>

         <header>
             high quality code is my attitude
         </header>
         <section>
             this ismmm

         </section>
         <footer>
             
         </footer>



    </section>
</template>
 <style scoped>
@keyframes spin {
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

@-webkit-keyframes spin {
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

#loading {
    animation: spin 5s alternate 5;
    -webkit-animation: spin 5s  alternate 5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
}
</style>
 

