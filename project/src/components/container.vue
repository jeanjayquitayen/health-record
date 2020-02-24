<template>
  <v-container>
    <v-row align="center" justify="center">
        <v-col>
            <v-card class="mx-auto" max-width="800">
                    <v-container>
                        <v-row class="ma-4">
                          <v-row>
                            <v-col cols="4">
                                    First Name
                                    <v-text-field :label="firstname" single-line outlined readonly></v-text-field>

                            </v-col>
                            <v-col cols="4">
                                    Last Name
                                    <v-text-field :label="lastname" single-line outlined readonly></v-text-field>
                            </v-col>
                            <v-col cols="4">
                                    Course
                                    <v-text-field :label="course" single-line outlined readonly></v-text-field>

                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="4">
                                    X-Ray
                                    <v-text-field :label="xray" single-line outlined readonly></v-text-field>
                            </v-col>
                            <v-col cols="4">
                                    Drug Test
                                    <v-text-field :label="drugtest" single-line outlined readonly></v-text-field>
                            </v-col>
                            <!-- <v-col cols="4">
                                    Urinalysis
                                    <v-text-field :label="urinalysis" single-line outlined readonly></v-text-field>
                            </v-col> -->
                          </v-row>
                          <v-row>
                            <!-- <v-col cols="4">
                                    Blood Type
                                      <v-text-field :label="bloodtest" single-line outlined readonly></v-text-field>
                            </v-col> -->
                            <v-col cols="4">
                                    HBsAG
                                      <v-text-field :label="HBSag" single-line outlined readonly></v-text-field>
                            </v-col>
                            <v-col cols="4">
                                      Vaccine-1
                                      <v-text-field :label="v1" single-line outlined readonly></v-text-field>
                            </v-col>
                          </v-row>
                        <v-row>
                            <v-col cols="4">
                                      Vaccine-2
                                      <v-text-field :label="v2" single-line outlined readonly></v-text-field>
                            </v-col>
                            <v-col cols="4">
                                      Vaccine-3
                                      <v-text-field :label="v3" single-line outlined readonly></v-text-field>
                            </v-col>
                        </v-row>
                        </v-row>
                    </v-container>
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
        date:10
  }),
  props:{
      firstname: String,
      lastname: String,
      course: String,
      xray: String,
      drugtest: String,
      urinalysis: String,
      bloodtest: String,
      HBSag: String,
      v1: String,
      v2: String,
      v3: String,
      vd: String,
  }
};
</script>
