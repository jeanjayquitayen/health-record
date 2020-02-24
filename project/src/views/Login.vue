<template>

  <v-container>
    <v-row align="center" justify="center">

        <ValidationObserver ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="onSubmit">

                <validation-provider name="uname" rules="required" v-slot="{ errors }">
                    <v-text-field  v-model="username" placeholder="username" name="Uname" type="text" />
                    <span>{{ errors[0] }}</span>
                </validation-provider>

                <validation-provider name="pass" rules="required" v-slot="{ errors }">
                    <v-text-field  v-model="password" placeholder="password" name="Password" type="text" />
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

// import { mapState } from 'vuex'
// import { mapGetters } from 'vuex'

    export default {
        name: 'Login',

        computed:{
            // ...mapState([
            //         'authenticated',
            //         'msg',
            //         'profile',
            //         'adminauthenticated'
                    
            //     ]),
            //      ...mapGetters([
            //         'getName'
            //     ]),
    },
        data() {
            return {
                
                    username: "",
                    password: ""
            
                
            }
        },

        mounted(){
            // this.$validator.localize('en', this.dictionary)
        },
        methods: {
            login() {

                alert("Not Yet Implemented")
                // this.$validator.validateAll().then(result=>{

                // if(result) {
                //     this.$store.dispatch('loadCoins',[this.username,this.password])
                //     .then(()=>{
                //     setTimeout(()=>{
                //     if(this.authenticated) {
                //         this.$router.replace({ name: "faculty" });
                //     } 
                //     else if(this.adminauthenticated){
                //                 this.$router.replace({ name: "admin" });
                //         }


                //         else {
                //         console.log("The username and / or password is incorrect"); /* eslint-disable-line no-console */
                //     }},100);
                //     })
   

                // } else {
                //     console.log("A username and password must be present"); /* eslint-disable-line no-console */
                // }




                // });

            },

        }
        
}
</script>

<style lang="stylus" scoped>
span {
  display: block;
}
</style>