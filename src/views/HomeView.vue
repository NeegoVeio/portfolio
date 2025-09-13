<template>
  <section class="home-container">
    <div class="profile">
      <!-- Foto de perfil -->
      <img :src="profilePic" alt="Foto de Isaque" class="profile-img" />

      <!-- Nome e título -->
      <h1>Olá, eu sou <span class="highlight">Isaque</span></h1>
      <h2>Desenvolvedor Front-End</h2>

      <!-- Pequena bio -->
      <p>
        Sou apaixonado por criar interfaces modernas, responsivas e com performance usando Vue.js.
      </p>

      <!-- Botões para navegar -->
      <div class="buttons">
        <router-link to="/projects" class="btn">🚀 Ver Projetos</router-link>
        <router-link to="/contact" class="btn secondary">📬 Contato</router-link>
        <a href="@/assets/curriculo.pdf" download class="btn download-btn">📄 Baixar Currículo</a>
      </div>

      <!-- Redes sociais -->
      <div class="socials">
        <a
          href="https://github.com/NeegoVeio"
          target="_blank"
          aria-label="GitHub"
          rel="noopener noreferrer"
        >
          <!-- Ícone GitHub com FontAwesome -->
          <i class="fab fa-github social-icon"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/isaque-teodoro-793a39282/"
          target="_blank"
          aria-label="LinkedIn"
          rel="noopener noreferrer"
        >
          <!-- Ícone LinkedIn com FontAwesome -->
          <i class="fab fa-linkedin social-icon"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import profilePic from "@/assets/foto-perfil.jpg"; // Foto de perfil

export default {
  name: "HomeView",
  data() {
    return {
      profilePic,
    };
  },
};
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  padding: 60px 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #e0f7fa, #f0fdf4);
  font-family: "Inter", sans-serif;
  color: #333;
}

.profile {
  max-width: 600px;
}

.profile-img {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 25px;
  border: 4px solid #42b883;
  box-shadow: 0 4px 10px rgba(66, 184, 131, 0.3);
  transition: transform 0.3s ease;
}

.profile-img:hover {
  transform: scale(1.1);
}

h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  color: #42b883;
}

h2 {
  font-size: 1.8rem;
  font-weight: 400;
  color: #555;
  margin-bottom: 20px;
}

p {
  font-size: 1.1rem;
  color: #555;
  max-width: 500px;
}

.highlight {
  color: #42b883;
  font-weight: 700;
}

.buttons {
  margin-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  background-color: #42b883;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(66, 184, 131, 0.4);
}

.btn.secondary {
  background-color: #35495e;
}

.btn:hover {
  background-color: #2c8f6e;
  transform: translateY(-2px);
}

.btn.secondary:hover {
  background-color: #2c3e50;
}

.download-btn {
  background-color: #ff6347; /* Cor de destaque para o botão de download */
  font-size: 1.1rem;
}

.download-btn:hover {
  background-color: #e53e3e;
}

.socials {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.socials i {
  font-size: 36px;
  opacity: 0.7;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.socials i:hover {
  opacity: 1;
  transform: scale(1.2);
}

.footer {
  margin-top: auto;
  padding: 20px 0 10px;
  font-size: 14px;
  color: #888;
  user-select: none;
}

/* Responsividade */
@media (max-width: 480px) {
  .profile-img {
    width: 130px;
    height: 130px;
  }

  .btn {
    padding: 10px 18px;
    font-size: 14px;
  }

  .socials {
    gap: 20px;
  }

  .socials i {
    font-size: 28px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.2rem;
  }
}
</style>

<!-- Não se esqueça de incluir o FontAwesome CDN no seu index.html -->

