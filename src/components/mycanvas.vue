<template>
    
       <canvas id="mycanvas"   class="canvas"  width="620" height="620" @click="playchess">不支持canvas</canvas>


     
</template>
<script>
 import bus from "@/components/bus"
export default {
    created(){

    },
    beforeMount(){
     
    },
    props:[ 
        "count"
    ],
    mounted(){
        let that = this;
       let chessboard = function(){ 
            this.dom = that.$el;
            if(this.dom.getContext)
            this.ctx = this.dom.getContext("2d");
            else this.ctx = null;
            this.a_w = 40;
            this.scope=15; 
            this.chessList = [];
        }
        chessboard.prototype = {
            init(){
                this.draw();
                this.createchessList(); 
            },
            draw(){
                let ctx = this.ctx;
                ctx.clearRect(0,0,620,620);
                for(let i=0; i < 15; i++){
                    ctx.beginPath();
                    ctx.moveTo(30,30+this.a_w*i);
                    ctx.lineTo(590, 30+this.a_w*i);
                    ctx.moveTo(30+this.a_w*i,30);
                    ctx.lineTo(30+this.a_w*i, 590);
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "#000";
                    ctx.stroke();
                }
            },
           createchessList: function() {
            for (let i = 0; i < this.scope; i++) {
            this.chessList[i] = [];
            for (let j = 0; j < this.scope; j++) {
                this.chessList[i][j] = 2;
                    }
                }
            },
            chess:function(x,y, type){
                
                let ctx = this.ctx;

               if(type!=0 && type != 1){

                   console.log("chess error");
                   return false;
               }  
               ctx.fillStyle  = type==0 ? "#fff" : "#333";
               this.chessList[x][y]= type;
                
                ctx.strokeStyle = "#333"; 
                ctx.beginPath();
                ctx.arc(30+x*this.a_w,30+y*this.a_w,this.scope,0,Math.PI*2,true); 
                ctx.closePath();
                ctx.fill();
                ctx.stroke(); 

            }
        }
         
         chessboard.prototype.constructor =  chessboard;
        
    
        this.board = new  chessboard();
        this.board.init(); 

        
         
    },

    data(){
        return {
            result:0,
            board:{} 
             
        } 
    },
    methods:{
        playchess:function(e){ 
            let _x = e.pageX - this.$el.offsetLeft, _y = e.pageY - this.$el.offsetTop; 
            let i = Math.round(_x / this.board.a_w) - 1;
            let j = Math.round(_y / this.board.a_w) - 1;
             
            if(this.board.chessList[i][j] == 2){
                let type = this.count%2 ? "黑方":"白方";
                this.board.chess(i,j,this.count%2);
                let result = this.getResult(this.board.chessList,i,j);
                if(result){
                    alert(type+"win"); 
                }  
                this.$emit("incrementCount",result);
            } 

        },
        vertical:function(list, x, y){
            let z = list[x][y], sum = 1, type = 0;
            for(let i = x+1; i < this.board.scope; i++){
                if(list[x][i]==z){
                    sum ++; 
                }
                else if(list[x][i]==2){
                    break;
                }
                else{
                    type ++;
                    break;
                }  
            }
                       
               for(let i = x-1; i > 0; i--){
                if(list[x][i]==z){
                    sum ++; 
                }
                else if(list[x][i]==2){
                    break;
                }
                else{
                    type ++;
                    break;
                }
                
            }
                return [sum, type];
        },

        horizontal:function(list,x, y ){
             let z = list[x][y], sum = 1, type=0;
             for(let i = x+1; i < this.board.scope; i++){
                 if(list[i][y]==z){
                     sum ++; 
                 }
                 else if(list[i][y]==2){
                     break;
                 }
                 else {
                     type++;
                     break;
                 }
             }
             for(let i = x -1; i > 0; i-- ){
                 if(list[i][y]==z){
                     sum++;
                 }
                 else if(list[i][y]==2){
                     break;
                 }
                 else{
                     type++;
                      break;
                 }
             }
             return [sum, type];
        },
        leftIncline:function(list, x,y){
            let z = list[x][y], sum = 1, type=0;
            for(let i = x + 1, j = y + 1; i<this.board.scope && j < this.board.scope; j++,i++){
                if(list[i][j]==z){
                    sum++;
                }
                else if(list[i][j]==2){
                    break;
                }
                else {
                    type ++;
                    break;
                }
            }
            for(let i = x-1, j=y-1; i>0 && j>0; j--,i--){
                if(list[i][j]==z){
                    sum ++;
                }
                else if(list[i][j]==2){
                    break;
                }
                else{
                    type ++;
                }
            }
            return [sum, type];
        },
        rightIncline:function(list, x, y){
            let z = list[x][y], sum = 1 , type = 0;
            for(let i = x + 1, j = y -1; i < this.board.scope && j >0; i++, j--){
                if(list[i][j]==z){
                    sum++;
                }
                else if(list[i][j]==2){
                    break;
                }
                else {
                    type ++;
                    break;
                }
            }
            for(let i=x-1, j=y+1; i > 0 && j < this.board.scope; i--,j++){
                if(list[i][j]==z){
                    sum++;
                }
                else if(list[i][j]==2){
                    break;
                }
                else {
                    type ++;
                    break;
                }
            }
            return [sum, type];

        } ,
        getResult:function(list,i,j){

             if(this.vertical(list,i,j)[0]>=5||
                 this.horizontal(list,i,j)[0]>=5||
                 this.leftIncline(list,i,j)[0]>=5||
                 this.rightIncline(list,i,j)[0]>=5)
                 return true;
                 return false;
        }

    }


}
    
</script>
<style  scoped>
 .canvas{
     background: #febc55
 }
 
</style>