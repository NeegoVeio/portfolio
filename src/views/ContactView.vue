<template>
  <section class="contact-container">
    <h1>{{ ContactTitle }}</h1>

    <form @submit.prevent="handleSubmit" class="contact-form" ref="contactForm">
      <div class="form-group">
        <label for="name">{{ nome }}</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          :class="{ 'is-invalid': errors.name }"
        />
        <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label for="email">{{ email }}</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          :class="{ 'is-invalid': errors.email }"
        />
        <span v-if="errors.email" class="error-message">{{
          errors.email }}</span>
      </div>

      <div class="form-group">
        <label for="message">{{ assunto }}</label>
        <textarea
          id="message"
          v-model="form.message"
          required
          :class="{ 'is-invalid': errors.message }"
        ></textarea>
        <span v-if="errors.message" class="error-message">{{errors.message }}</span>
      </div>

      <div class="form-group">
        <button type="submit" class="btn" :disabled="isSending">
          {{ isSending ? enviando : `${enviar}` }}
        </button>
      </div>
    </form>

    <p v-if="submitted" class="success-message">
      {{ mensagemSucesso }}
    </p>
    <p v-if="formError" class="error-message">
      {{ mensagemErro }}
    </p>
  </section>
</template>

<script>
import emailjs from "emailjs-com";
import { useLocale } from "vuetify";

export default {
  setup() {
    const { t } = useLocale();
    const ContactTitle = t("$vuetify.ContactTitle");
    const mensagemSucesso = t("$vuetify.mensagemSucesso");
    const mensagemErro = t("$vuetify.mensagemErro");
    const enviar = t("$vuetify.enviar");
    const enviando = t("$vuetify.enviando");
    const nome = t("$vuetify.nome");
    const email = t("$vuetify.email");
    const assunto = t("$vuetify.assunto");
    const invalidadenome = t("$vuetify.invalidadenome");
    const invalidaemail = t("$vuetify.invalidaemail");
    const invalidadeassunto = t("$vuetify.invalidadeassunto");
    const faltaemail = t("$vuetify.faltaemail");

    return {
      ContactTitle,
      mensagemSucesso,
      mensagemErro,
      enviar,
      enviando,
      nome,
      email,
      assunto,
      invalidadenome,
      invalidaemail,
      invalidadeassunto,
      faltaemail,
    };
  },

  name: "ContactView",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      submitted: false,
      errors: {
        name: "",
        email: "",
        message: "",
      },
      isSending: false,
      formError: false,
    };
  },
  mounted() {
    
    emailjs.init("7DhxmoxDyKGbeKDrN");
  },
  methods: {
    
    validateForm() {
      this.errors = { name: "", email: "", message: "" };
      let isValid = true;

      
      if (!this.form.name) {
        this.errors.name = "{{ invalidadenome }}";
        isValid = false;
        isValid = false;
      }

      
      if (!this.form.email) {
        this.errors.email = "{{ faltaemail }}";
        isValid = false;
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = "{{ invalidaemail }}";
        isValid = false;
      }

      
      if (!this.form.message) {
        this.errors.message = "{{ invalidadeassunto }}";
        isValid = false;
      }

      return isValid;
    },

    
    isValidEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    },


    handleSubmit() {
      if (this.validateForm()) {
        this.isSending = true;
        this.formError = false;


        emailjs
          .sendForm(
            "service_x03yobk",
            "template_7ngf6gn",
            this.$refs.contactForm
          )
          .then(
            (response) => {
              console.log("{{mensagemSucesso}}", response);
              this.submitted = true;
              this.isSending = false;
              this.form.name = "";
              this.form.email = "";
              this.form.message = "";
            },
            (error) => {
              console.error("{{mensagemErro}}", error);
              this.formError = true;
              this.isSending = false;
            }
          );
      }
    },
  },
};
</script>

<style scoped>
.contact-container {
  padding: 60px 20px;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

label {
  margin-bottom: 5px;
  font-weight: 600;
}

input,
textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
  min-height: 150px;
}

button {
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:hover {
  background-color: #2c8f6e;
}

.error-message {
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
}

.success-message {
  margin-top: 20px;
  color: green;
  font-weight: bold;
}
</style>
