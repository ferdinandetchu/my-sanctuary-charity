<template>
  <v-app>
    <app-toolbar />

    <v-main>
      <router-view/>
    </v-main>

    <app-footer />
  </v-app>
</template>
<script>
import AppToolbar from './components/AppToolbar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: { AppFooter, AppToolbar },
  data: () => ({
    //
  }),
};
</script>
