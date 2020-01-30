<template>
    <container :firstname="fname" 
                :lastname="lname" 
                :course="course"
                :xray="xray"
                :drugtest="drug"
                :urinalysis="urinalysis"
                :bloodtest="bloodtyping"
                :HBSag="HBSag"></container>
</template>

<script>
import { mapState } from 'vuex'
import container from "../components/container"
export default {
    name: "students",
    data(){
        return{

        }
    },
    
    components:{ container },
    computed:{
        ...mapState([
            'socketMessage',
            "fname",
            "lname",
            "course",
            "xray",
            "drug",
            "urinalysis",
            "bloodtyping",
            "HBSag"
        ])
    },
        created(){
      setTimeout( () => this.$router.push({ path: '/'}), 5000);

    }
}
</script>

<style scoped>

</style>
