<template>
    <staffarea :firstname="fname_staff" ></staffarea>
</template>

<script>
import { mapState } from 'vuex'
import staffarea from "../components/staffarea"
export default {
    name: "staff",
    data(){
        return{

        }
    },
    
    components:{ staffarea },
    computed:{
        ...mapState([
            "fname_staff",
            "lname_staff",
            "login"
        ])
    },
    created(){
    if (this.login == false){
            this.$router.push({ path: '/login'}) 
        }
    }
}
</script>

<style scoped>

</style>