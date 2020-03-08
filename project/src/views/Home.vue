<template>
    <defaultpage></defaultpage>
</template>

<script>
import defaultpage from "../components/DefaultPage"
// import { mapState } from 'vuex'
export default {
    name: "Home",
    components: {defaultpage},
   //  computed:{
   //      ...mapState([
			// "connected"
   //      ])
   //  },
	created(){
		this.$store.dispatch('contact_server');
	},

    
    
}
</script>

<style scoped>

</style>