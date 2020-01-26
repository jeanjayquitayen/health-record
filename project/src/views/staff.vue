<template>
    <staffarea :firstname="fname" ></staffarea>
</template>

<script>
import { mapState } from 'vuex'
import staffarea from "../components/staffarea"
export default {
    name: "students",
    data(){
        return{

        }
    },
    
    components:{ staffarea },
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