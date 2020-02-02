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
                      Name: {{ firstname }} {{ lastname }} {{ course }}
                      <v-row>
                            <v-col cols="3">
                              Drug Test
                              <v-overflow-btn
                                class="my-2"
                                :items="drugresult"
                                label="-"
                                target="#dropdown-example"
                              ></v-overflow-btn>
                            </v-col>
                            <v-col cols="3">
                              X-ray
                              <v-overflow-btn
                                class="my-2"
                                :items="xray"
                                label="-"
                                target="#dropdown-example"
                              ></v-overflow-btn>
                            </v-col>
                            <v-col cols="3">
                              Urinalysis
                              <v-overflow-btn
                                class="my-2"
                                :items="uri"
                                label="-"
                                target="#dropdown-example"
                              ></v-overflow-btn>
                            </v-col>
                            <v-col cols="3">
                              Blood Type
                              <v-overflow-btn
                                class="my-2"
                                :items="btype"
                                label="-"
                                target="#dropdown-example"
                              ></v-overflow-btn>
                            </v-col>
                            <v-col cols="3">
                              Vaccine
                              <v-overflow-btn
                                class="my-2"
                                :items="vacc"
                                label="-"
                                target="#dropdown-example"
                              ></v-overflow-btn>
                            </v-col>
                          </v-row>
                    </v-container>
                    <v-card-actions>
                      <v-btn>submit</v-btn>
                    </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
        vacc: ['Complete','NComplete']

  }),

  props:{
         firstname: String,
         lastname: String,
         course: String,
    //   xray: String,
    //   drug: String
  },
    methods: {
        findID(){
            // console.log(this.idnum); /* eslint-disable-li ne no-console */
            this.$store.dispatch('find_id',this.idnum);
        }
    }
};
</script>
