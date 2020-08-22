<template>
<!-- porfolio about Project -->
  <v-container>
    <!-- header class -->
    <v-card color="grey lighten-5 grey--text text-left px-12 text--darken-2" flat tile>
      <v-row>
        <v-col md="8">
          <v-card-text>
            <p class="overline mb-4">Hey __________</p>
            <p class="display-1 mb-4">Boniface, Ikechukwu</p>
            <v-list-item-subtitle class="title mb-2">Junior Software Developer</v-list-item-subtitle>
            <p
              class="body-1"
            >I'm a software Developer specialised in frontend and backend development for complex scalable web apps. I write about software development on my blog. Want to know how I may help your project?</p>
            <v-btn depressed tile color="grey grey--text text--lighten-3">Hire me</v-btn>
          </v-card-text>
        </v-col>
        <v-col md="4">
          <v-img src="../assets/banner-image.png"></v-img>
        </v-col>
      </v-row>
    </v-card>

<!-- what i do start here -->
    <div class="ml-12">
      <div class="line"></div>
      <h3 class="display-1 mt-12 mb-7 mx-3">What I Do</h3>
      <p class="body-2">I have up to 2+ years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use.</p>
    </div>

    <v-row class="mx-12">
      <v-col sm="4" v-for="skill in skills" :key="skill.h1Name">
        <v-icon :color="skill.iconColor" class="my-3" large >{{skill.iconName}}</v-icon>
        <h1 class="headline mb-2">{{skill.h1Name}}</h1>
        <p class="body-2">{{skill.pName}}</p>
        <v-progress-linear :size="50" :width="7" :value="skill.value"
              color="blue"></v-progress-linear>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data (){
    return{
      skills: [
      {iconName: 'mdi-language-html5', iconColor: 'red darken-2', h1Name: 'HTML 5', pName: 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.', value: '80%'},
      {iconName: 'mdi-language-css3', iconColor: 'primary', h1Name: 'CSS 3', pName: 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.', value: '70%'},
      {iconName: 'mdi-language-javascript', iconColor: 'yellow darken-1', h1Name: 'Vanilla JavaScript', pName: 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.', value: '65%'},
      {iconName: 'mdi-jquery', iconColor: 'primary darken-1', h1Name: 'Jquery', pName: 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.', value: '65%'},
      {iconName: 'mdi-bootstrap', iconColor: 'purple darken-2', h1Name: 'Bootstrap CSS Framework', pName: 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.', value: '80%'},
      {iconName: 'mdi-sass', iconColor: 'purple accent-1', h1Name: 'SCSS', pName: 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.', value: '60%'},
      {iconName: 'mdi-vuejs', iconColor: 'success darken-1', h1Name: 'Vue Js', pName: 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.', value: '65%'},
      {iconName: 'mdi-vuetify', iconColor: 'blue accent-1', h1Name: 'Vuetify', pName: 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.', value: '65%'},
      {iconName: 'mdi-nodejs', iconColor: 'success', h1Name: 'Node Js', pName: 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.', value: '40%'},
      {iconName: 'mdi-git', iconColor: 'red', h1Name: 'Git Version Control', pName: 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.', value: '80%'},
      {iconName: 'mdi-github', iconColor: 'secondary', h1Name: 'GitHub', pName: 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.', value: '65%'},
      {iconName: 'mdi-webpack', iconColor: 'blue accent-1', h1Name: 'Web Pack', pName: 'List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.', value: '45%'},
    ]
    }
  }
};
</script>

<style lang="css" scoped>
.line {
  position: absolute;
  background-color: grey;
  width: 5px;
  height: 6vh;
}
</style>
