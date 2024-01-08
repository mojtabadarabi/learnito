<script lang="ts">
import Navbar from './views/Navbar.vue';
export default {
  name: "App",
  components: {
    Navbar
  }
}
</script>

<template >
  <div class="p-2">
    <Navbar />
    <router-view />
  </div>
</template>
