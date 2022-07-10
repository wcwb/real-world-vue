<template>
  <div class="flex flex-col items-center">
    <h1 class="mb-6 text-4xl font-bold text-gray-700 capitalize mt-14">
      events of good
    </h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventCard from "@/components/EventCard.vue"; // @ is an alias to /src
import EventServer from "@/services/eventServer";
import { eventItem } from "@/types";

export default defineComponent({
  name: "HomeView",
  components: {
    EventCard,
  },
  created() {
    EventServer.getEvents()
      .then((res) => {
        this.events = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  data() {
    return {
      events: [] as eventItem[],
    };
  },
});
</script>
