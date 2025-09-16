<template>
  <footer class="footer">
    <div class="footer-content">
      <a
        href="https://github.com/NeegoVeio"
        target="_blank"
        class="github-logo"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="GitHub"
        />
      </a>
      <span
        >{{Footer}}</span
      >
      <nav class="footer-links">
        <a href="https://github.com/NeegoVeio" target="_blank">GitHub</a>
        <a
          href="https://www.linkedin.com/in/isaque-teodoro-793a39282/"
          target="_blank"
          >LinkedIn</a
        >
        <a href="https://instagram.com/seuusuario" target="_blank">Instagram</a>
      </nav>
    </div>
  </footer>
</template>

<script>
import { useLocale } from "vuetify";

export default {
 setup() {
    const { t } = useLocale();
    const Footer = t("$vuetify.Footer");
    return { Footer };
 },

  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  margin-top: auto;
  padding: 15px 0;
  font-size: 14px;
  color: #888;
  background: transparent;
  border-top: 1px solid #2c2c2c; /* linha sutil no topo */
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap; /* quebra em telas menores */
}

.github-logo img {
  width: 22px;
  height: 22px;
  filter: grayscale(100%);
  transition: 0.3s;
}

.github-logo img:hover {
  filter: grayscale(0%);
}

.footer-links {
  display: flex;
  gap: 15px;
}

.footer-links a {
  text-decoration: none;
  color: #888;
  transition: 0.3s;
}

.footer-links a:hover {
  color: #42b883; /* cor destaque Vue */
}

/* DARK MODE */
body.dark-mode .footer {
  color: #aaa;
  border-top: 1px solid #444;
}

body.dark-mode .footer-links a {
  color: #aaa;
}
</style>
