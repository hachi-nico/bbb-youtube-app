<template>
  <v-app-bar color="primary" fixed app clipped-left dark>
    <v-app-bar-nav-icon
      @click.stop="$emit('c-on-click', drawer)"
      v-show="$vuetify.breakpoint.mdAndDown"
    />
    <v-toolbar-title v-text="title" />
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  name: "NavigationBar",
  props: ["title", "drawer"],
  emits: ["c-on-click"],
};
</script>
