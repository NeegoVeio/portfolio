<template>
  <section class="about-container">
    <div class="about-header">
      <h1>Sobre Mim</h1>
      <p>Sou um desenvolvedor Front-End apaixonado por criar interfaces modernas e funcionais.</p>
    </div>

    <div class="about-content">
      <div class="bio">
        <img :src="profilePic" alt="Foto de perfil" class="profile-img" />
        <div class="bio-text">
          <h2>Quem sou eu?</h2>
          <p>
            Olá, meu nome é Isaque, sou um desenvolvedor Front-End com experiência em Vue.js e outras tecnologias. Gosto de trabalhar com design responsivo e otimizar a experiência do usuário.
          </p>
        </div>
      </div>

      <div class="skills">
        <h2>Minhas Habilidades</h2>
        <div class="skills-list">
          <div class="skill">
            <div class="skill-header">
              <!-- Ícone SVG do Vue.js hospedado no CDN -->
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/vue.js.svg" alt="Vue.js" class="skill-icon" />
              <div class="skill-name">Vue.js</div>
            </div>
            <div class="skill-bar" style="width: 90%"></div>
          </div>
          <div class="skill">
            <div class="skill-header">
              <!-- Ícone SVG do JavaScript hospedado no CDN -->
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg" alt="JavaScript" class="skill-icon" />
              <div class="skill-name">JavaScript</div>
            </div>
            <div class="skill-bar" style="width: 85%"></div>
          </div>
          <div class="skill">
            <div class="skill-header">
              <!-- Ícone SVG do CSS3 hospedado no CDN -->
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/css3.svg" alt="CSS3" class="skill-icon" />
              <div class="skill-name">CSS3</div>
            </div>
            <div class="skill-bar" style="width: 80%"></div>
          </div>
          <div class="skill">
            <div class="skill-header">
              <!-- Ícone SVG do GitHub hospedado no CDN -->
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg" alt="GitHub" class="skill-icon" />
              <div class="skill-name">Git & GitHub</div>
            </div>
            <div class="skill-bar" style="width: 75%"></div>
          </div>
        </div>
      </div>

      <div class="experience">
        <h2>Experiência</h2>
        <ul>
          <li><strong>Desenvolvedor Front-End</strong> | Empresa XYZ | 2021 - Presente</li>
          <li><strong>Estagiário de Desenvolvimento</strong> | Empresa ABC | 2020 - 2021</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import profilePic from "@/assets/foto-perfil.jpg"; // Certifique-se de que a imagem esteja no caminho correto

export default {
  name: "AboutView",
  data() {
    return {
      profilePic,
    };
  },
};
</script>


<style scoped>
.about-container {
  padding: 60px 20px;
  text-align: center;
  background-color: #f9f9f9;
}

.about-header h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  color: #42b883;
}

.about-header p {
  font-size: 1.2rem;
  color: #555;
}

.about-content {
  max-width: 1000px;
  margin: 40px auto;
  text-align: left;
}

.bio {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}

.profile-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #42b883;
  box-shadow: 0 4px 8px rgba(66, 184, 131, 0.2);
}

.bio-text h2 {
  color: #42b883;
  font-size: 2rem;
  margin-bottom: 10px;
}

.bio-text p {
  font-size: 1rem;
  color: #555;
}

.skills {
  margin-bottom: 40px;
}

.skills h2 {
  font-size: 2rem;
  color: #42b883;
  margin-bottom: 20px;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.skill {
  display: flex;
  flex-direction: column;
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.skill-icon {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.skill-name {
  font-weight: bold;
  color: #333;
}

.skill-bar {
  height: 8px;
  border-radius: 5px;
  background-color: #ddd;
  margin-top: 5px;
}

.skill-bar {
  transition: width 0.5s ease;
}

.experience {
  margin-top: 40px;
}

.experience h2 {
  font-size: 2rem;
  color: #42b883;
  margin-bottom: 20px;
}

.experience ul {
  list-style-type: none;
  padding: 0;
  font-size: 1rem;
  color: #555;
}

.experience li {
  margin-bottom: 10px;
}

.experience li strong {
  color: #42b883;
}
</style>
