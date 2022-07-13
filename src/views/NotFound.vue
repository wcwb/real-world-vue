<template>
  <h1>Oops!</h1>
  <h3>The {{ resource }} you looking for is not here</h3>
  <router-link :to="{ name: 'EventList' }">Go back home</router-link>
</template>

<script lang="ts">
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: "page",
    },
  },
};
</script>
