import { createApp } from "vue"; // Criar a instância do Vue
import App from "./App.vue"; // Componente principal
import router from "./router"; // Importando o router configurado

createApp(App)
  .use(router) // Usando o Vue Router
  .mount("#app"); // Montando a aplicação no elemento com id 'app'
