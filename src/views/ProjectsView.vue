<template>
  <section class="projects-container">
    <h1>Meus Projetos</h1>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "ProjectsView",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Portfólio Pessoal",
          description: "Meu site pessoal criado com Vue 3 e Vue Router.",
          image: require("@/assets/projeto1.jpg"),
          github: "https://github.com/seuusuario/portfolio",
          demo: "https://portfolio-beige-seven-21.vercel.app/",
        },
        {
          id: 2,
          title: "Mecânica",
          description: "Site de uma mecânica local, desenvolvido com Vue.js.",
          image: require("@/assets/projeto2.jpg"),
          github: "https://github.com/NeegoVeio/Mecanica",
          demo: "https://mecanica-liart.vercel.app/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects-container {
  padding: 60px 20px;
  text-align: center;
}

.projects-grid {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 40px;
}
</style>
