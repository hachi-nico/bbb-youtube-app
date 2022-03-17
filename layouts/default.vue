<template>
  <v-app dark>
    <navigation-bar @c-on-click="drawerHanlder" :title="title" />

    <v-navigation-drawer v-model="drawer" fixed app absolute clipped>
      <navigation-drawer :drawer="drawer" :data="items" />
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "@layouts/NavigationBar";
import NavigationDrawer from "@layouts/NavigationDrawer";

export default {
  components: { NavigationBar, NavigationDrawer },
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      title: "Vuetify.js",
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
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
