<template>
  <footer class="footer">
    <p>© 2025 Isaque - Desenvolvido com Vue 3</p>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  margin-top: auto;
  padding: 20px 0 10px;
  font-size: 14px;
  color: #888;
  text-align: center;
  user-select: none;
}

/* DARK MODE */
body.dark-mode .footer {
  color: #aaa;
}
</style>
