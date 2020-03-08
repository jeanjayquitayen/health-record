<template>

  <v-container>
    <v-row align="center" justify="center">

        <ValidationObserver ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="onSubmit">

                <validation-provider name="pass" rules="required" v-slot="{ errors }">
                    <v-text-field v-model="password" placeholder="pin" name="Password" type="password" />
                    <span>{{ errors[0] }}</span>
                </validation-provider>

                <!-- @click="login" -->
                <v-btn @click="login" :disabled="invalid">submit</v-btn>
                <!-- <v-btn @click="clear">
                clear
                </v-btn> -->
            </form>
    </ValidationObserver>

    </v-row>
  </v-container>
 
</template>

<script>

import { mapState } from 'vuex'
// import { mapGetters } from 'vuex'

    export default {
        name: 'Login',

        computed:{
            ...mapState([
                    'pin',
                    'user'
                    
                ]),
                //  ...mapGetters([
                //     'getName'
                // ]),
    },
        data() {
            return {
                
                    password: "",
                    time_id: null,
            
                
            }
        },

        created(){
            clearTimeout(this.time_id);
            this.time_id = setTimeout( () => this.$router.push({ path: '/'}), 15000);
        },
        methods: {
            login() {
                if(this.pin == this.password){

                    this.$store.dispatch('allow_login');
                    console.log("login"); /* eslint-disable-line no-console */
                    if(this.user == 'student'){
                        clearTimeout(this.time_id);
                        this.$router.push({ path: '/student'})
                    }else if(this.user == 'staff'){
                        clearTimeout(this.time_id);
                        this.$router.push({ path: '/staff'})
                    }
                    
                }else{
                    alert("WRONG PIN");
                }
                }
            },
}
</script>

<style lang="stylus" scoped>
span {
  display: block;
}
</style>