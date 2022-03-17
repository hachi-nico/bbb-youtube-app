<template>
  <div>
    <!-- section identity -->
    <div class="d-flex align-center px-3 py-4">
      <v-avatar color="orange" size="66">
        <span class="white--text text-h5">NA</span>
      </v-avatar>
      <div class="d-flex flex-column">
        <span class="ml-3">Nico Akbar</span>
        <span class="ml-3">User</span>
      </div>
    </div>

    <!-- section list navigation -->
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
