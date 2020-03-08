<template>
    <container :firstname="fname_student" 
                :lastname="lname_student" 
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
            "fname_student",
            "lname_student",
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
            "login"
        ])
    },
        created(){
        if (this.login == false){
            this.$router.push({ path: '/login'}) 
        }
        setTimeout( () => this.$router.push({ path: '/'}), 10000);
    },
}
</script>

<style scoped>

</style>
