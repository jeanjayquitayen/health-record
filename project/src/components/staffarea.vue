<template>
  <v-container>
    <v-row align="center" justify="center">
        <v-col>
            <v-card class="mx-auto">
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          Staff Name
                          <v-text-field :label="firstname" single-line outlined readonly></v-text-field>
                        </v-col>
                       </v-row>

                       <v-row>
                          <v-col cols="5">
                              Search
                              <v-text-field v-model="idnum" v-on:keyup.enter="findID" single-line outlined></v-text-field>
                          </v-col>
                      </v-row>
                      Name: {{ fname_student }} {{ lname_student }} {{ course }}
                      <v-row>
                            <v-col cols="3">
                              Drug Test
                              <v-overflow-btn
                                class="my-2"
                                :items="drugresult"
                                :label="drug"
                                v-model="results.dtest"
                                target="#dropdown-example"
                              ></v-overflow-btn>
                            </v-col>
                            <v-col cols="3">
                              X-ray
                              <v-overflow-btn
                                class="my-2"
                                :items="xrayvar"
                                :label="xray"
                                v-model="results.xraytest"
                                target="#dropdown-example"
                              ></v-overflow-btn>
                            </v-col>
                            <v-col cols="3">
                              Urinalysis
                              <v-overflow-btn
                                class="my-2"
                                :items="uri"
                                :label="urinalysis"
                                v-model="results.uri"
                                target="#dropdown-example"
                              ></v-overflow-btn>
                            </v-col>
                            <v-col cols="3">
                              Blood Type
                              <v-overflow-btn
                                class="my-2"
                                :items="btype"
                                :label="bloodtyping"
                                v-model="results.btype"
                                target="#dropdown-example"
                              ></v-overflow-btn>
                            </v-col>
                            <v-col cols="3">
                              Vaccine 1
                              <v-overflow-btn
                                class="my-2"
                                :items="vacc"
                                :label="v1"
                                v-model="results.v1"
                                target="#dropdown-example"
                              ></v-overflow-btn>
                            </v-col>
                            <v-col cols="3">
                              Vaccine 2
                              <v-overflow-btn
                                class="my-2"
                                :items="vacc"
                                :label="v2"
                                v-model="results.v2"
                                target="#dropdown-example"
                              ></v-overflow-btn>
                            </v-col>
                            <v-col cols="3">
                              Vaccine 3
                              <v-overflow-btn
                                class="my-2"
                                :items="vacc"
                                :label="v3"
                                v-model="results.v3"
                                target="#dropdown-example"
                              ></v-overflow-btn>
                              </v-col>
                              <v-col cols="3">
                              HBSag
                              <v-overflow-btn
                                class="my-2"
                                :items="hbsag"
                                :label="HBSag"
                                v-model="results.hbsag"
                                target="#dropdown-example"
                              ></v-overflow-btn>
                            </v-col>
                          </v-row>

                          <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-radio-group v-model="vacs" column>
                                  <v-row>
                                    <v-col>          
                                    <v-radio
                                    label="Vaccine 1"
                                    color="red"
                                    value="red"
                                    @mousedown="vacs = 'red', date = v1date"
                                    ></v-radio>
                                  </v-col>
                                    <v-col>
                                      <v-radio
                                      label="Vaccine 2"
                                      color="orange"
                                      value="orange"
                                      @mousedown="vacs = 'orange', date = v2date"
                                      ></v-radio>
                                    </v-col>
                                    <v-col>
                                    <v-radio
                                    label="Vaccine 3"
                                    color="primary"
                                    value="primary"
                                    @mousedown=" vacs = 'primary', date = v3date"
                                    ></v-radio>
                                    </v-col>
                                  </v-row>

                              </v-radio-group>
                              </v-col>
                          </v-row>

        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="date"
              persistent
              width="290px"
            >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Vaccination Schedule"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
              <v-date-picker v-model="date" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                <v-btn text color="primary" @click="saveDate(date)">OK</v-btn>
              </v-date-picker>
          </v-dialog>
        </v-col>
      </v-row>
                    </v-container>
                    <v-card-actions>
                    <v-row>
                    <v-btn @click="submitForm">submit</v-btn>
                    <v-btn @click="logout">logout</v-btn>
                    </v-row>
  
                    </v-card-actions>

            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { mapState } from 'vuex'
export default {
  name: 'DefaultPage',

  data: () => ({
        alignmentsAvailable: [
          'start',
          'center',
          'end',
          'baseline',
          'stretch',
        ],
        alignment: 'center',
        dense: false,
        justifyAvailable: [
          'start',
          'center',
          'end',
          'space-around',
          'space-between',
        ],
        justify: 'center',
        idnum: '',
        drugresult: ['Positive','Negative'],
        xrayvar: ['Done','Undone'],
        uri: ['Positive','Negative'],
        btype: ['A+','A-','B+','B-','0+','0-','AB+','AB-'],
        vacc: ['Complete','NComplete'],
        hbsag:['Positive','Negative'],
        results:{
          dtest:'',
          xraytest:'',
          uri:'',
          btype:'',
          v1:'',
          v2:'',
          v3:'',
          hbsag:'',
          id:'',
        },
        date: new Date().toISOString().substr(0, 10),
        modal: false,
        vacs: 'red',
        v1date:'',
        v2date:'',
        v3date:'',

  }),
        computed:{
        ...mapState([
            "fname_student",
            "lname_student",
            "course",
            "xray",
            "drug",
            "urinalysis",
            "bloodtyping",
            "HBSag",
            "v1",
            "v2",
            "v3",
            "stdnum"
        ])
    },
  // created(){
  //     this.results.v1date = this.date;
  //     this.results.v2date = this.date;

  // },

  props:{
         firstname: String,
         lastname: String,
        //  course: String,
    //   xray: String,
    //   drug: String
  },
    methods: {
        findID(){
            // console.log(this.idnum); /* eslint-disable-li ne no-console */
            this.$store.dispatch('find_id',this.idnum);
        },

        submitForm(){
          this.results.id = this.stdnum;
          if(this.results.dtest == '') {this.results.dtest = this.drug;}
          if(this.results.xraytest == '') {this.results.xraytest = this.xray;}
          if(this.results.uri == '') {this.results.uri = this.urinalysis;}
          if(this.results.btype == '') {this.results.btype = this.bloodtyping;}
          if(this.results.hbsag == '') {this.results.hbsag = this.HBSag;}
          if(this.results.v1 == '' && this.v1 != '' && this.v1 != this.vacc[1]) {
            this.results.v1 = this.v1;
            }else if (this.results.v1 == this.vacc[1] | this.v1 != '' | this.v1 == this.vacc[1]){
              this.results.v1 = this.v1date;
            }

          if(this.results.v2 == '' && this.v2 != '' && this.v2 != this.vacc[1]){
            this.results.v2 = this.v2;
            }else if (this.results.v2 == this.vacc[1] | this.v2 != '' | this.v2 == this.vacc[1]){
              this.results.v2 = this.v2date;
            }
          if(this.results.v3 == '' && this.v3 != '' && this.v3 != this.vacc[1]){
            this.results.v3 = this.v3;
            }else if (this.results.v3 == this.vacc[1] | this.v3 != '' | this.v3 == this.vacc[1]){
              this.results.v3 = this.v3date;
            }



          if (this.results.id != ''){
              this.$store.dispatch('update_result',this.results);
          }
          else{
            alert("Please Enter Student Number");
          }
          
        },
        logout(){
          this.$store.dispatch('logout_staff');

        },
        saveDate(date){
          let set_date = "";
          if (this.vacs == "red"){
            this.v1date = date;
            set_date = this.v1date;
          }else if (this.vacs == "orange"){
            this.v2date = date;
            set_date = this.v2date;
          }else{
            this.v3date = date;
            set_date = this.v3date;
          }
          this.showDate(set_date);
         
        },
        showDate(date){
            this.$refs.dialog.save(date);
        }
    },
};
</script>
