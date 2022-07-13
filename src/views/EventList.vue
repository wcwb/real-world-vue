<template>
  <div class="flex flex-col items-center max-w-2xl mx-auto">
    <h1 class="mb-6 text-4xl font-bold text-gray-700 capitalize mt-14">
      events of good
    </h1>

    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <div class="flex justify-between w-72">
      <RouterLink
        :to="{ name: 'EventList', query: { page: parseInt(page) - 1 } }"
        rel="Prev"
        v-if="page != 1"
        >Prev</RouterLink
      >
      <RouterLink
        :to="{ name: 'EventList', query: { page: parseInt(page) + 1 } }"
        rel="Next"
        v-if="hasNextPage"
        >Next</RouterLink
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import EventCard from "@/components/EventCard.vue"; // @ is an alias to /src
import EventServer from "@/services/eventServer";
import { eventItem } from "@/types";

export default defineComponent({
  name: "HomeView",
  props: ["page"],
  components: {
    EventCard,
  },
  created() {
    watchEffect(() => {
      this.events = [];
      EventServer.getEvents(2, this.page)
        .then((res) => {
          this.events = res.data;
          this.totalEvents = parseInt(res.headers["x-total-count"]);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
  computed: {
    hasNextPage(): boolean {
      let totalPages = Math.ceil(this.totalEvents / 2);
      return this.page < totalPages;
    },
  },
  data() {
    return {
      events: [] as eventItem[],
      totalEvents: 0,
    };
  },
});
</script>
