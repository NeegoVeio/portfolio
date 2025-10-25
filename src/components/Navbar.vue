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
      </ul>
    </div>
  </nav>
</template>

<script>
import { useLocale } from "vuetify";
import { computed, ref, onMounted, onBeforeUnmount } from "vue";

export default {
  name: "AppNavbar",
  setup() {
    const { t } = useLocale();

    // Traduções reativas
    const Contato = computed(() => t("$vuetify.Contato"));
    const Projetos = computed(() => t("$vuetify.Projetos"));
    const Sobre = computed(() => t("$vuetify.Sobre"));

    const menuOpen = ref(false);
    const isScrolled = ref(false);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 20;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      Projetos,
      Contato,
      Sobre,
      menuOpen,
      isScrolled,
    };
  },
};
</script>

<style scoped>
/* Navbar padrão */
.navbar {
  background: rgba(0, 0, 0, 0.3); /* cinza fosco translúcido */
  color: white;
  padding: 14px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
  backdrop-filter: blur(8px);
}

.navbar.scrolled {
  background: rgba(100, 100, 100, 0.6); /* um pouco mais escuro ao rolar */
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
  color: #ffffff;
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
    background: rgba(0, 0, 0, 0.9);
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    gap: 16px;
    display: none;
    backdrop-filter: blur(6px);
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
