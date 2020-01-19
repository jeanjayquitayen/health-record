<template>
  <v-container>
    <v-row align="center" justify="center">
        <v-col>
            <v-card class="mx-auto" max-width="800">
                <v-form>
                    <v-container>
                        <v-row>
                        <v-col cols="5">
                                First Name
                                <v-text-field :label="firstname" single-line outlined readonly></v-text-field>

                        </v-col>
                        <v-col cols="5">
                                Last Name
                                <v-text-field :label="lastname" single-line outlined readonly></v-text-field>

                        </v-col>
                        <v-col cols="5">
                                Course
                                <v-text-field :label="course" single-line outlined readonly></v-text-field>

                        </v-col>
                        <v-col cols="5">
                                X-Ray
                                <v-text-field :label="course" single-line outlined readonly></v-text-field>
                        </v-col>
                        <v-col cols="5">
                                Drug Test
                                <v-text-field :label="course" single-line outlined readonly></v-text-field>
                        </v-col>
                        </v-row>

                    </v-container>
                </v-form>
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
  }),

  props:{
      firstname: String,
      lastname: String,
      course: String,
      xray: String,
      drug: String
  }
};
</script>
