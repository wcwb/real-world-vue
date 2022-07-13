<template>
  <div class="flex flex-col">
    <p>Edit Event Here</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "EventEdit",
  props: ["event"],
});
</script>
