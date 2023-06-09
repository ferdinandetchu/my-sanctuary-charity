import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
    themes: {
      light: {
        primary: '#104fb6',
        secondary: '#fed24d',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
});

