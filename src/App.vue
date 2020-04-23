<template>
  <v-app>
    <!-- navbar and router -->
    <v-content>
      <Navbar />
      <router-view></router-view>
    </v-content>
    <!-- navbar and router ends here -->

    <!-- footer -->
    <v-card height="150">
      <v-footer absolute class="font-weight-medium">
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>My Portfolio</strong>
        </v-col>
      </v-footer>
    </v-card>
    <!-- footer ends here -->
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",

  components: {
    Navbar
  },

  data: () => ({
    //
  })
};
</script>
