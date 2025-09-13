<template>
  <div class="project-card">
    <img :src="project.image" :alt="project.title" class="project-img" />
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <div class="buttons">
      <a :href="project.github" target="_blank" class="btn">GitHub</a>
      <a v-if="project.demo" :href="project.demo" target="_blank" class="btn btn-demo">Ver Online</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.project-card {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 15px;
}

.buttons {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.btn {
  padding: 8px 15px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
}

.btn-demo {
  background-color: #42b883;
}
</style>
