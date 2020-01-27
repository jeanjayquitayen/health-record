<template>
    <container :firstname="fname" 
                :lastname="lname" 
                :course="course"
                :xray="xray"
                :drug="drug"
                :urinalysis="urinalysis"
                :bloodtyping="bloodtyping"
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
    }
}
</script>

<style scoped>

</style>