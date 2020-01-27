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
        mname:'',
        course:'',
        year:'',
        gender:'',
        date:'',
        daterel:'',
        prc:'',
        xray:'',
        drug:'',
        stdnum:''

      },
      mutations: {
        // change(state, flavor) {
        //   state.flavor = flavorstudent
        // }
        setSocketMessage(state){
          state.socketMessage = "Connected";
          console.log(state.socketMessage); /* eslint-disable-line no-console */
          
        },
        setInfo(state,data){
          console.log(data); /* eslint-disable-line no-console */
          state.fname = data["firstname"],
          state.lname = data["lastname"],
          state.course = data["course"],
          state.year = data["year"],
          state.gender = data["gender"],
          state.date = data["date"],
          state.daterel = data["daterel"],
          state.prc = data["prc"],
          state.xray = data["xray"],
          state.drug = data["drug"]
          state.stdnum = data["stdnum"]
          

        },
        doNotning({state},data){
          state.stdnum = data;
          console.log(data); /* eslint-disable-line no-console */
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
          commit('setInfo',data);
          if(data['prc'] == undefined && this.state.prc == ''){
            
            router.push('/student');
          }else{
            commit('setStaffInfo',data);
            router.push('/staff');
          }
          
        },
        contact_server(){
          this._vm.$socket.client.emit('confirmConnection');
          console.log("contact_server"); /* eslint-disable-line no-console */
        },
        find_id({commit},id){
          this._vm.$socket.client.emit('findid',id);
          commit("doNotning",id);
          // console.log(id); /* eslint-disable-line no-console */
        }
      },
      getters: {
        // flavor: state => state.flavor
      }


})