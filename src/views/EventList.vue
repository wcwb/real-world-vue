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

export default defineComponent({
  name: "HomeView",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 5928101,
          category: "animal welfare",
          title: "Cat Adoption day",
          description: "find your new feline friend in this event.",
          location: "meon town",
          date: "2022-07-07",
          time: "12:00",
          petAllowed: true,
          organizer: "james wange",
        },
        {
          id: 5928102,
          category: "luasts sdrnw",
          title: "cow Adoption day",
          description: "find your new feline friend in this event.",
          location: "meon town",
          date: "2022-01-14",
          time: "13:00",
          petAllowed: false,
          organizer: "Kelly ten",
        },
        {
          id: 5928103,
          category: "commnt pee",
          title: "gose Adoption day",
          description: "find your new feline friend in this event.",
          location: "meon town",
          date: "2022-03-02",
          time: "08:00",
          petAllowed: true,
          organizer: "james wange",
        },
      ],
    };
  },
});
</script>
