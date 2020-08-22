<template>
  <nav>
    <v-app-bar app flat dense color="grey lighten-5">
      <v-app-bar-nav-icon class="grey--text" @click=" drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">My</span>
        <span three-line>Portfolio</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="onClick()" depressed class="grey lighten-5" v-model="download">
          <span>Download CV</span>
        <v-icon right color="grey lighten-1">mdi-file-document-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="grey lighten-4" class="white--text">
      <v-img
        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        class="py-5"
      >
        <v-avatar size="80" class="mt-5 ml-3">
          <v-img src="../assets/client2.jpg"></v-img>
        </v-avatar>
        <h3 class="ml-3">Ikechukwu, Boniface</h3>
        <p class="caption ml-3">bonifacedennis99@gmail.com</p>
      </v-img>

      <v-list dense class="mx-5">
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="menu in menus" :key="menu.text" router :to="menu.route">
            <v-list-item-icon>
              <v-icon>{{menu.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{menu.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-divider></v-divider>

      <h3 class="grey--text caption ml-5">SOCIAL</h3>

      <v-row>
        <v-col cols="12" class="mx-5">
          <v-icon
            class="mx-2"
            v-for="link in links"
            :key="link.icon"
            :color="link.icolor"
          >{{link.icon}}</v-icon>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <h3 class="grey--text caption ml-5">CHANGE MODE</h3>

      <v-switch v-model="success" @click="success = false; " class="ml-5"></v-switch>
    </v-navigation-drawer>
  </nav>
</template>

<script>

export default {
  name: "Navbar",
  data() {
    return {
      success: true,
      drawer: false,
      download: 'https://drive.google.com/file/d/10zbPN2GTpUABonJbPLILucQJMcT-urvy/view?usp=sharing',
      menus: [
        { icon: "mdi-home", text: "About Me", route: '/' },
        { icon: "mdi-laptop", text: "Portfolio", route: '/Portfolio' },
        { icon: "mdi-briefcase", text: "Service & Pricing", route: 'Services' },
        { icon: "mdi-file-document", text: "Resume", route: 'Resume' },
        { icon: "mdi-account-box", text: "Contact", route: 'Contact' }
      ],
      links: [
        { icon: "mdi-facebook", icolor: "blue darken-3" },
        { icon: "mdi-twitter", icolor: "blue darken-1" },
        { icon: "mdi-linkedin", icolor: "blue darken-2" },
        { icon: "mdi-youtube", icolor: "red" }
      ]
    };
  },

  methods: {
    onClick() {
      const fileLink = document.createElement('a');
      fileLink.href = this.download;
      fileLink.setAttribute('download', 'resume.pdf');
      document.body.appendChild(fileLink);
      fileLink.click();
    }
  }
};
</script>

<style lang="css" scoped>
.text-decoration-none {
  text-decoration: none;
  color: grey;
}
</style>