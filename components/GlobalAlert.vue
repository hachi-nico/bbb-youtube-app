<template>
  <v-alert :type="type">{{ title }}</v-alert>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "info",
    },
  },
};
</script>
