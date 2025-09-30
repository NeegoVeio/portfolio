<template>
  <section class="projects-container">
    <h1>💻 {{ MProjetos }}</h1>
    <p class="subtitle">
      {{ DProjetos }}
    </p>

    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <img :src="project.image" :alt="project.title" class="project-image" />
        <div class="project-info">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <div class="project-links">
            <a
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-icon"
            >
              <i class="fab fa-github"></i> {{ codigo }}
            </a>
            <a
              v-if="project.demo"
              :href="project.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-icon secondary"
            >
              <i class="fas fa-external-link-alt"></i> {{ VProjetos }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocale } from "vuetify";

const { t } = useLocale();

const MProjetos = t("$vuetify.MProjetos");
const DProjetos = t("$vuetify.DProjetos");
const codigo = t("$vuetify.codigo");
const VProjetos = t("$vuetify.VProjetos");

const projects = [
  {
    id: 1,
    title: t("$vuetify.title1"),
    description: t("$vuetify.dest1"),
    image: require("@/assets/projeto1.jpg"),
    github: "https://github.com/NeegoVeio/portfolio",
    demo: "https://portfolio-isaque.vercel.app/",
  },
  {
    id: 2,
    title: t("$vuetify.title2"),
    description: t("$vuetify.dest2"),
    image: require("@/assets/projeto2.jpg"),
    github: "https://github.com/NeegoVeio/Mecanica",
    demo: "https://mecanica-liart.vercel.app/",
  },
  {
    id: 3,
    title: t("$vuetify.title3"),
    description: t("$vuetify.dest3"),
    image: require("@/assets/projeto3.jpg"),
    github: "https://github.com/NeegoVeio/price-monitor-bot",
    demo: null
  },
  {
    id: 4,
    title: t("$vuetify.title4"),
    description: t("$vuetify.dest4"),
    image: require("@/assets/projeto4.jpg"),
    github: null,
    demo: "https://site-consultoria-jp.vercel.app/",
  },
  {
    id: 5,
    title: t("$vuetify.title5"),
    description: t("$vuetify.dest5"),
    image: require("@/assets/projeto5.jpg"),
    github: null,
    demo: null,
  },
];
</script>

<style scoped>
.projects-container {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.projects-container h1 {
  font-size: 2.8rem;
  margin-bottom: 10px;
  color: #42b883;
}

.subtitle {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 40px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.project-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-info {
  padding: 20px;
  text-align: left;
}

.project-info h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

.project-info p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
}

.project-links {
  display: flex;
  gap: 12px;
}

.btn-icon {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: #42b883;
  color: white;
  padding: 10px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s ease;
}

.btn-icon i {
  font-size: 1rem;
}

.btn-icon:hover {
  background-color: #2c8f6e;
}

.btn-icon.secondary {
  background-color: #35495e;
}

.btn-icon.secondary:hover {
  background-color: #2c3e50;
}

/* Responsivo */
@media (max-width: 480px) {
  .projects-container h1 {
    font-size: 2rem;
  }

  .project-info h2 {
    font-size: 1.3rem;
  }

  .project-info p {
    font-size: 0.95rem;
  }
}
</style>
