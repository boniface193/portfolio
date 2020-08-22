<template>
  <v-container>
    <v-row>
      <v-col sm="6">
        <v-img src="../assets/about-us.png"></v-img>
      </v-col>
      <v-col sm="6">
        <h1 class="display-1 mt-12">The Largest Business Expert</h1>
        <p class="body-1 mt-8">These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.</p>
      </v-col>
    </v-row>

  <v-row>
    <v-col cols="12">
        <v-container>
          <v-row>
            <v-col
              v-for="n in 9"
              :key="n"
              class="d-flex child-flex"
              cols="4"
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 8}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
    </v-col>
  </v-row>


  </v-container>
</template>

<script>
  export default {
    data: () => ({
      // show: true,
    }),
  }
</script>
