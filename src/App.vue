<template>
  <nav class="flex justify-center mt-4 text-2xl">
    <router-link :to="{ name: 'EventList' }">Events</router-link>
    |
    <router-link :to="{ name: 'about' }">About</router-link>
  </nav>
  <router-view />
</template>

<style>
a.router-link-exact-active {
  @apply text-green-500 underline;
}
</style>
