<template>
  <div id="app">
    <Navbar />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import AppFooter from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    AppFooter
  }
};
</script>

<style>
/* Style global (se necessário) */
#app {
  font-family: 'Arial', sans-serif;
}
</style>
