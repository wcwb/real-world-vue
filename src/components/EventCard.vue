<template>
  <router-link :to="{ name: 'EventDetails', params: { id: event.id } }">
    <div
      class="p-5 mb-5 border border-gray-700 cursor-pointer w-72 hover:scale-105 hover:shadow-md"
    >
      <span>@ {{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { eventItem } from "@/types";

export default defineComponent({
  name: "EventCard",
  props: {
    event: {
      type: Object as PropType<eventItem>,
      required: true,
    },
  },
});
</script>
