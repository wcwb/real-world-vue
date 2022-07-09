<template>
  <div
    class="p-5 mb-5 border border-gray-700 cursor-pointer w-72 hover:scale-105 hover:shadow-md"
  >
    <span>@ {{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EventCard",
  props: {
    event: Object,
  },
});
</script>
