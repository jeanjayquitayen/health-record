<template>
    <staffarea :firstname="fname_staff" ></staffarea>
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
            "fname_staff",
            "lname_staff",
            "course",
            "xray",
            "drug"
        ])
    }
}
</script>

<style scoped>

</style>