<template>
    <defaultpage></defaultpage>
</template>

<script>
import defaultpage from "../components/DefaultPage"
export default {
    name: "Home",
    components: {defaultpage},
    created(){
            this.$store.dispatch('contact_server');
        },

    
    
}
</script>

<style scoped>

</style>