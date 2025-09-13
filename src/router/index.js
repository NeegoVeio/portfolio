import { createRouter, createWebHistory } from "vue-router"; // Importa as funções do Vue Router
import HomeView from "@/views/HomeView.vue"; // Importa a view Home
import ProjectsView from "@/views/ProjectsView.vue"; // Importa a view Projects
import ContactView from "@/views/ContactView.vue"; // Importa a view Contact
import AboutView from "@/views/AboutView.vue"; // Corrigido o caminho para a view About

// Definindo as rotas
const routes = [
  {
    path: "/", // Página inicial
    name: "Home", // Nome da rota
    component: HomeView, // Componente associado a essa rota
  },
  {
    path: "/projects", // Página de Projetos
    name: "Projects",
    component: ProjectsView,
  },
  {
    path: "/contact", // Página de Contato
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/about", // Página Sobre Mim
    name: "About",
    component: AboutView, // Componente associado à página Sobre Mim
  },
];

// Criando o roteador
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Usando o histórico de navegação
  routes, // Registrando as rotas
});

export default router; // Exportando para usar no main.js
