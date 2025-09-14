<template>
  <div id="app" :class="{ 'dark-mode': isDark }">
    <Navbar />
    <router-view />
    <AppFooter />
    <SpeedInsights />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import AppFooter from "@/components/Footer.vue";
import { SpeedInsights } from "@vercel/speed-insights/vue";

export default {
  components: {
    Navbar,
    AppFooter,
    SpeedInsights,
  },
  data() {
    return {
      isDark: false, // Controle do dark mode
    };
  },
  mounted() {
    // Verifica a preferência de tema do usuário
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      this.isDark = true;
      document.body.classList.add("dark-mode");
    } else {
      this.isDark = false;
      document.body.classList.remove("dark-mode");
    }
  },
  methods: {
    toggleTheme() {
      // Alterna entre o tema claro e escuro
      this.isDark = !this.isDark;

      if (this.isDark) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }
    },
  },
};
</script>

<style>
/* Estilo global para o aplicativo */
#app {
  font-family: "Arial", sans-serif;
  transition: background-color 0.3s, color 0.3s;
}

/* DARK MODE */
body.dark-mode {
  background-color: #121212;
  color: #eee;
}

body.dark-mode nav {
  background-color: #2c2c2c;
}

body.dark-mode button.theme-toggle {
  background: none;
  border: 1px solid #fff;
  color: white;
}

body.dark-mode button.theme-toggle:hover {
  background-color: #fff;
  color: #333;
}

body.dark-mode .theme-toggle {
  background: none;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}
</style>
