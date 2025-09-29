<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <div class="logo">
        <router-link to="/">Isaque</router-link>
      </div>

      <button class="hamburger" @click="menuOpen = !menuOpen">
        <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>

      <ul :class="['nav-links', { open: menuOpen }]">
        <li>
          <router-link to="/projects">{{ Projetos }}</router-link>
        </li>
        <li>
          <router-link to="/contact">{{ Contato }}</router-link>
        </li>
        <li>
          <router-link to="/about">{{ Sobre }}</router-link>
        </li>
        <li>
          <button @click="toggleTheme" class="theme-toggle">
            {{ isDark ? "🌞 Claro" : "🌙 Escuro" }}
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useLocale } from "vuetify";

export default {
  name: "AppNavbar",
  setup() {
    const { t } = useLocale();

    const Contato = t("$vuetify.Contato");
    const Projetos = t("$vuetify.Projetos");
    const Sobre = t("$vuetify.Sobre");

    return { Projetos, Contato, Sobre };
  },
  data() {
    return {
      isDark: false,
      menuOpen: false,
      isScrolled: false,
    };
  },
  created() {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      this.isDark = true;
      document.body.classList.add("dark-mode");
    }

    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
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
    handleScroll() {
      this.isScrolled = window.scrollY > 20;
    },
  },
};
</script>

<style scoped>
.navbar {
  background: transparent;
  color: white;
  padding: 14px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
}

.navbar.scrolled {
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo a {
  color: #42b883;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Links */
.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #42b883;
}

.theme-toggle {
  background: none;
  border: 1px solid white;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: white;
  color: #333;
}

body.dark-mode {
  background-color: #121212;
  color: #eee;
}

body.dark-mode .navbar.scrolled {
  background: rgba(18, 18, 18, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

body.dark-mode .theme-toggle {
  border-color: #ccc;
  color: #eee;
}

body.dark-mode .theme-toggle:hover {
  background-color: #eee;
  color: #333;
}

/* Responsivo */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: #333;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    gap: 16px;
    display: none;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links li {
    width: 100%;
    text-align: center;
  }
}
</style>
