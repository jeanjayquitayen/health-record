import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/router'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        // flavor: ''
        socketMessage:'',
        fname_student:'',
        lname_student:'',
        mname_student:'',
        fname_staff:'',
        lname_staff:'',
        mname_staff:'',
        course:'',
        year:'',
        gender:'',
        date:'',
        daterel:'',
        prc:'',
        xray:'',
        drug:'',
        stdnum:'',
        urinalysis:'',
        bloodtyping:'',
        HBSag:'',
        v1:'',
        v2:'',
        v3:'',
        VaccinationDate:'',
        login: false


      },
      mutations: {
        // change(state, flavor) {
        //   state.flavor = flavorstudent
        // }
        setSocketMessage(state){
          state.socketMessage = "Connected";
          console.log(state.socketMessage); /* eslint-disable-line no-console */
          
        },
        setInfo_student(state,data){
          // console.log(data); /* eslint-disable-line no-console */
          state.fname_student = data["firstname"],
          state.lname_student = data["lastname"],
          state.course = data["course"],
          state.year = data["year"],
          state.gender = data["gender"],
          state.date = data["date"],
          state.daterel = data["daterel"],
          state.xray = data["xray"],
          state.drug = data["drugtest"],
          state.stdnum = data["stdnum"],
          state.bloodtyping = data["bloodtyping"],
          state.urinalysis = data["urinalysis"],
          state.HBSag = data["HBSag"],
          state.v1 = data['Vaccine1'],
          state.v2 = data['Vaccine2'],
          state.v3 = data['Vaccine3']
        },
        setInfo_staff(state,data){
          console.log(data); /* eslint-disable-line no-console */
          state.login = true;
          state.fname_staff = data["firstname"],
          state.lname_staff = data["lastname"],
          state.prc = data["prc"],
          state.xray = data["xray"],
          state.drug = data["drugtest"],
          state.stdnum = data["stdnum"],
          state.bloodtyping = data["bloodtyping"],
          state.urinalysis = data["urinalysis"],
          state.HBSag = data["HBSag"],
          state.v1 = data['Vaccine1'],
          state.v2 = data['Vaccine2'],
          state.v3 = data['Vaccine3']

        },

        doNotning(state,data){
          state.stdnum = data;
         // console.log(data); /* eslint-disable-line no-console */
        },
        clearInfo(state){
          state.socketMessage = '',
          state.fname_student = '',
          state.lname_student = '',
          state.mname_student = '',
          state.fname_staff = '',
          state.lname_staff = '',
          state.mname_staff = '',
          state.course = '',
          state.year = '',
          state.gender = '',
          state.date = '',
          state.daterel = '',
          state.prc = '',
          state.xray = '',
          state.drug = '',
          state.stdnum = '',
          state.urinalysis = '',
          state.bloodtyping = '',
          state.HBSag = '',
          state.v1 = '',
          state.v2 = '',
          state.v3 = '',
          state.VaccinationDate = '',
          state.login = false
        },
        clearEdit(state){
          state.fname_student = '',
          state.lname_student = '',
          state.mname_student = '',
          state.course = '',
          state.year = '',
          state.gender = '',
          state.date = '',
          state.daterel = '',
          state.prc = '',
          state.xray = '',
          state.drug = '',
          state.stdnum = '',
          state.urinalysis = '',
          state.bloodtyping = '',
          state.HBSag = '',
          state.v1 = '',
          state.v2 = '',
          state.v3 = '',
          state.VaccinationDate = ''
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

          if(data['prc'] == null && this.state.prc == '' && this.state.login == false){
            
            let pin = prompt("Password:");
            if(pin == data['pin']){
              commit('setInfo_student',data);
              router.push({path: '/student'});
            }else{
              commit("clearInfo");
              alert("Incorrect Pin")
            }

            
          }else if (this.state.login == false){
              let pin = prompt("Password:");
              if(pin == data['pin']){
                commit('setInfo_staff',data);
                router.push({path: '/staff'});
              }else{
                commit("clearInfo");
                alert("Incorrect Pin")
              }  
          }
          else{
            commit('setInfo_student',data);
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
        },
        update_result({commit},results){
          console.log(results); /* eslint-disable-line no-console */
          commit("doNotning",results.dtest)
          this._vm.$socket.client.emit('updateResult',results);
          commit("clearEdit");
          alert("Updated");
        },
        logout_staff({commit}){
          commit("clearInfo");
          router.push({path:'/'});

        }
      },
      getters: {
        // flavor: state => state.flavor
      }


})
