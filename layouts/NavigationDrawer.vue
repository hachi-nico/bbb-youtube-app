<template>
  <div>
    <!-- section identity -->
    <div>
      <v-avatar color="orange" size="66"
        ><span class="white--text text-h5">36</span></v-avatar
      >
    </div>
    <v-list>
      <v-list-item
        v-for="(item, i) in data"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "NavigationDrawer",
  props: ["data", "drawer"],
};
</script>
