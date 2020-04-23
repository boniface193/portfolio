<template>
  <v-container>
    <v-card flat color="grey--text text--darken-2">
      <v-row>
        <v-col sm="6">
          <h1 class="display-2 mt-12">Services We Offer</h1>
          <p
            class="body-2 mt-12"
          >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
          <v-btn depressed class="mt-8">Contact Us</v-btn>
        </v-col>
        <v-col sm="6">
          <v-img src="../assets/undraw.png"></v-img>
        </v-col>
      </v-row>
    </v-card>

    <v-row class="my-12">
      <v-col sm="4" v-for="service in services" :key="service.iconType">
        <div>
          <v-icon :color="service.iconColor" size="120">{{service.iconType}}</v-icon>

          <h1 class="headline mb-1">{{service.h1Name}}</h1>
          <p>{{service.pName}}</p>
        </div>
      </v-col>
    </v-row>

    <v-divider></v-divider>
    <v-row class="my-12">
      <v-col sm="12">
        <v-img
          height="100%"
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.9)"
        >
          <div class="text-center my-12">
            <v-row>
              <v-col sm="3" v-for="pcs in pc" :key="pcs.color">
                <v-progress-circular
                  :rotate="pcs.rotate"
                  :size="100"
                  :width="10"
                  :value="value"
                  :color="pcs.color"
                >{{ value }}%</v-progress-circular>
                <h3 class="py-0 white--text title">{{pcs.work}}</h3>
              </v-col>
            </v-row>
          </div>

          <v-data-iterator
            class="my-12 mx-5"
            :items="items"
            :items-per-page.sync="itemsPerPage"
            hide-default-footer
          >
            <template v-slot:header>
              <v-toolbar class="mb-2"  dark flat>
                <v-toolbar-title>
                  <h1 class="display-1">Pricing</h1>
                </v-toolbar-title>
              </v-toolbar>
            </template>

            <template v-slot:default="props">
              <v-row>
                <v-col v-for="item in props.items" :key="item.name" cols="12" sm="6" md="4" lg="3">
                  <v-card dark color="blue-grey darken-1
">
                    <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>

                    <v-divider></v-divider>

                    <v-list dense>
                      <v-list-item>
                        <v-list-item-content>Calories:</v-list-item-content>
                        <v-list-item-content class="align-end">{{ item.calories }}</v-list-item-content>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-content>Fat:</v-list-item-content>
                        <v-list-item-content class="align-end">{{ item.fat }}</v-list-item-content>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-content>Carbs:</v-list-item-content>
                        <v-list-item-content class="align-end">{{ item.carbs }}</v-list-item-content>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-content>Protein:</v-list-item-content>
                        <v-list-item-content class="align-end">{{ item.protein }}</v-list-item-content>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-content>Sodium:</v-list-item-content>
                        <v-list-item-content class="align-end">{{ item.sodium }}</v-list-item-content>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-content>Calcium:</v-list-item-content>
                        <v-list-item-content class="align-end">{{ item.calcium }}</v-list-item-content>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-content>Iron:</v-list-item-content>
                        <v-list-item-content class="align-end">{{ item.iron }}</v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-col>
              </v-row>
            </template>
          </v-data-iterator>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      itemsPerPage: 4,
      items: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: "3%",
          iron: "8%"
        }
      ],

      pc: [
        { rotate: "360", color: "teal", work: "Works Completed" },
        { rotate: "-90", color: "primary", work: "Years Of Experience" },
        { rotate: "90", color: "red", work: "Total Clients" },
        { rotate: "180", color: "pink", work: "Award Won" }
      ],
      interval: {},
      value: 0,
      services: [
        {
          iconColor: "blue",
          iconType: "mdi-wordpress",
          h1Name: "WP Developer",
          pName:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, ipsum explicabo sunt obcaecati iusto laboriosam quae, nobis quam laudantium quasi doloremque quidem reprehenderit facilis, fugit odio. Nesciunt quas quis ratione."
        },
        {
          iconColor: "green",
          iconType: "mdi-monitor-cellphone",
          h1Name: "Web Designer / Developer",
          pName:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, ipsum explicabo sunt obcaecati iusto laboriosam quae, nobis quam laudantium quasi doloremque quidem reprehenderit facilis, fugit odio. Nesciunt quas quis ratione."
        },
        {
          iconColor: "purple darken-2",
          iconType: "mdi-google-assistant",
          h1Name: "UI / UX designer",
          pName:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, ipsum explicabo sunt obcaecati iusto laboriosam quae, nobis quam laudantium quasi doloremque quidem reprehenderit facilis, fugit odio. Nesciunt quas quis ratione."
        },
        {
          iconColor: "orange darken-3",
          iconType: "mdi-rocket",
          h1Name: "SEO Optimize",
          pName:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, ipsum explicabo sunt obcaecati iusto laboriosam quae, nobis quam laudantium quasi doloremque quidem reprehenderit facilis, fugit odio. Nesciunt quas quis ratione."
        },
        {
          iconColor: "yellow darken-3",
          iconType: "mdi-google-analytics",
          h1Name: "Analytics",
          pName:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, ipsum explicabo sunt obcaecati iusto laboriosam quae, nobis quam laudantium quasi doloremque quidem reprehenderit facilis, fugit odio. Nesciunt quas quis ratione."
        },
        {
          iconColor: "lime",
          iconType: "mdi-chart-areaspline",
          h1Name: "Marketing Services",
          pName:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, ipsum explicabo sunt obcaecati iusto laboriosam quae, nobis quam laudantium quasi doloremque quidem reprehenderit facilis, fugit odio. Nesciunt quas quis ratione."
        }
      ]
    };
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  }
};
</script>

<style scoped>
.v-progress-circular {
  margin: 3rem;
}
</style>