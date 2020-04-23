import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify)

 const vuetify = new Vuetify ({
     theme: {
         themes: {
             light: {
                //  success: '#54B689'
             },
         },
     },
})

Vue.use(vuetify)

export default new Vuetify({
});
