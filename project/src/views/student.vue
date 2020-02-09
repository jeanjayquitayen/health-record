<template>
    <container :firstname="fname" 
                :lastname="lname" 
                :course="course"
                :xray="xray"
                :drugtest="drug"
                :urinalysis="urinalysis"
                :bloodtest="bloodtyping"
                :HBSag="HBSag"
                :v1="v1"
                :v2="v2"
                :v3="v3"
                :vd="VaccinationDate"></container>
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
            "HBSag",
            "v1",
            "v2",
            "v3",
            "VaccinationDate",
        ])
    },
        created(){
      setTimeout( () => this.$router.push({ path: '/'}), 10000);

    }
}
</script>

<style scoped>

</style>
