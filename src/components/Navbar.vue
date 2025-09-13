<template>
  <nav>
    <div class="nav-left">
      <router-link to="/">Início</router-link>
      <router-link to="/projects">Projetos</router-link>
      <router-link to="/contact">Contato</router-link>
      <router-link to="/about">Sobre Mim</router-link>
    </div>
    <button @click="toggleTheme" class="theme-toggle">
      {{ isDark ? "🌞 Claro" : "🌙 Escuro" }}
    </button>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      isDark: false,
    };
  },
  created() {
    // Verificando se o tema foi salvo no localStorage
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      this.isDark = true;
      document.body.classList.add("dark-mode");
    }
  },
  methods: {
    toggleTheme() {
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

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 15px;
  background: #333;
  color: white;
  transition: background-color 0.3s, color 0.3s;
}

a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.nav-left {
  display: flex;
  gap: 20px;
}

.theme-toggle {
  background: none;
  border: 1px solid white;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}

.theme-toggle:hover {
  background-color: white;
  color: #333;
}

/* DARK MODE */
body.dark-mode {
  background-color: #121212;
  color: #eee;
}

body.dark-mode nav {
  background-color: #222; /* Alterando o fundo do nav para algo mais escuro */
}

body.dark-mode .theme-toggle {
  border-color: #ccc;
  color: #eee;
}

body.dark-mode .theme-toggle:hover {
  background-color: #eee;
  color: #333;
}

/* Responsividade */
@media (max-width: 768px) {
  .nav-left {
    display: block;
    text-align: center;
  }

  .theme-toggle {
    margin-top: 10px;
  }
}
</style>
