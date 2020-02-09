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
                                :items="xray"
                                :label="xray"
                                v-model="results.xray"
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
        xray: ['Done','Undone'],
        uri: ['Positive','Negative'],
        btype: ['A+','A-','B+','B-','0+','0-','AB+','AB-'],
        vacc: ['Complete','NComplete'],
        hbsag:['Positive','Negative'],
        results:{
          dtest:'',
          xray:'',
          uri:'',
          btype:'',
          v1:'',
          v2:'',
          v3:'',
          hbsag:'',
          id:'',
        }

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
            "v3"
        ])
    },

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
          this.results.id = this.idnum;
          if(this.results.dtest == '') this.results.dtest = this.drug;
          if(this.results.xray == '') this.results.xray = this.xray;
          if(this.results.uri == '') this.results.uri = this.urinalysis;
          if(this.results.btype == '') this.results.btype = this.bloodtyping;
          if(this.results.v1 == '') this.results.v1 = this.v1;
          if(this.results.v2 == '') this.results.v2 = this.v2;
          if(this.results.v3 == '') this.results.v3 = this.v3;
          if(this.results.hbsag == '') this.results.hbsag = this.HBSag;

          this.$store.dispatch('update_result',this.results);
        },
        logout(){
          this.$store.dispatch('logout_staff');

        }
    }
};
</script>
