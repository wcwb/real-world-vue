<template>
  <div class="flex justify-center">
    <div
      v-if="event"
      class="max-w-3xl p-4 mt-4 space-y-5 text-center bg-gray-200 rounded shadow-md broder"
    >
      <h1 class="m-2 text-3xl font-semibold text-gray-800 capitalize">
        {{ event.title }}
      </h1>
      <router-link :to="{ name: 'EventDetails' }">Details</router-link>
      |
      <router-link :to="{ name: 'EventRegister' }">Register</router-link>
      |
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>

      <router-view :event="event" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { eventItem } from "@/types";
import eventServer from "@/services/eventServer";
export default defineComponent({
  name: "EventLayout",
  props: ["id"],
  data() {
    return {
      event: {} as eventItem,
    };
  },
  created() {
    eventServer
      .getEventById(this.id)
      .then((res) => {
        this.event = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>
