<template>
    <container :firstname="fname" 
                :lastname="lname" 
                :course="course"
                :xray="xray"
                :drug="drug"></container>
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
            "drug"
        ])
    }
}
</script>

<style scoped>

</style>