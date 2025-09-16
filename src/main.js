import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createVuetify } from "vuetify";

import ptBR from "./locale/pt-br";
import enUS from "./locale/en-us";
import esES from "./locale/es-es";

const browserLocale = navigator.language || navigator.userLanguage;
const availableLocales = { "pt-BR": ptBR, "en-US": enUS, "es-ES": esES };
const locale = availableLocales[browserLocale] ? browserLocale : "en-US";

const vuetify = createVuetify({
  locale: {
    locale,
    fallback: "en",
    messages: availableLocales,
  },
});

export default vuetify;

createApp(App).use(router).use(vuetify).mount("#app");
