import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/router'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        // flavor: ''
        socketMessage:'',
        fname:'',
        lname:'',
        course:'',
        xray:'',
        drug:''
      },
      mutations: {
        // change(state, flavor) {
        //   state.flavor = flavorstudent
        // }
        setSocketMessage(state){
          state.socketMessage = "Connected";
          console.log(state.socketMessage); /* eslint-disable-line no-console */
          
        },
        setStudentInfo(state,data){
          state.fname = data[0],
          state.lname = data[1],
          state.course = data[2],
          state.xray = data[3],
          state.drug = data[4]

        }
      },
      actions:{
        socket_serverMessage({commit},message){
          commit('setSocketMessage');
          console.log(message); /* eslint-disable-line no-console */
          // if(message == 'ok'){
          //   router.push('/student')
          // }
        },
        socket_serverData({commit},data){
          commit('setStudentInfo',data);
          router.push('/student');
        },
        contact_server(){
          this._vm.$socket.client.emit('confirmConnection');
          console.log("contact_server"); /* eslint-disable-line no-console */
        }
      },
      getters: {
        // flavor: state => state.flavor
      }


})