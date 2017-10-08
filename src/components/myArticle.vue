<<template>
    <div>
        <p>
        <p>{{artList.name}}</p>
        <p>{{artList.startTime}}</p>
        <p>{{artList.content}}</p>
        <p>{{artList.good}}</p>
        </p>

        <button @click="hhas">hhas</button>
        
        </div>
</template>
<script>
import bus from "@/components/bus"

    export default {
        props:['artList'],
        methods:{
            hhas:function(){
                
                bus.$emit("bus",1)
            }
        }
    }
</script>