<template>
  <v-app dark>
    <!-- section navbar -->
    <navigation-bar @c-on-click="drawerHanlder" :title="title" />

    <!-- section drawer -->
    <v-navigation-drawer v-model="drawer" fixed app clipped>
      <navigation-drawer :drawer="drawer" :data="items" />
    </v-navigation-drawer>

    <!-- section main -->
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";
import NavigationDrawer from "./NavigationDrawer.vue";

export default {
  components: { NavigationBar, NavigationDrawer },
  name: "DefaultLayout",
  data() {
    return {
      drawer: false,
      title: "Dashboard Monitoring Upload",
      items: [
        {
          icon: "mdi-home-outline",
          title: "Beranda",
          to: "/",
        },
        {
          icon: "mdi-logout-variant",
          title: "Log Out",
          to: "/inspire",
        },
      ],
    };
  },
  methods: {
    drawerHanlder() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
