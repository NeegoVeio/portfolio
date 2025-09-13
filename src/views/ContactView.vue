<template>
  <section class="contact-container">
    <h1>Entre em Contato</h1>

    <form @submit.prevent="handleSubmit" class="contact-form" ref="contactForm">
      <div class="form-group">
        <label for="name">Nome</label>
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
        <label for="email">E-mail</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          :class="{ 'is-invalid': errors.email }"
        />
        <span v-if="errors.email" class="error-message">{{
          errors.email
        }}</span>
      </div>

      <div class="form-group">
        <label for="message">Mensagem</label>
        <textarea
          id="message"
          v-model="form.message"
          required
          :class="{ 'is-invalid': errors.message }"
        ></textarea>
        <span v-if="errors.message" class="error-message">{{
          errors.message
        }}</span>
      </div>

      <div class="form-group">
        <button type="submit" class="btn" :disabled="isSending">
          {{ isSending ? "Enviando..." : "Enviar" }}
        </button>
      </div>
    </form>

    <p v-if="submitted" class="success-message">
      Mensagem enviada com sucesso!
    </p>
    <p v-if="formError" class="error-message">
      Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.
    </p>
  </section>
</template>

<script>
import emailjs from "emailjs-com"; // Importando o EmailJS

export default {
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
    // Inicializando o EmailJS com seu User ID
    emailjs.init("7DhxmoxDyKGbeKDrN"); // Substitua "YOUR_USER_ID" pelo seu User ID do EmailJS
  },
  methods: {
    // Função para validar o formulário
    validateForm() {
      this.errors = { name: "", email: "", message: "" };
      let isValid = true;

      // Validação para o campo Nome
      if (!this.form.name) {
        this.errors.name = "Por favor, insira seu nome.";
        isValid = false;
      }

      // Validação para o campo E-mail
      if (!this.form.email) {
        this.errors.email = "Por favor, insira um e-mail.";
        isValid = false;
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = "Por favor, insira um e-mail válido.";
        isValid = false;
      }

      // Validação para o campo Mensagem
      if (!this.form.message) {
        this.errors.message = "Por favor, escreva uma mensagem.";
        isValid = false;
      }

      return isValid;
    },

    // Função para verificar se o e-mail é válido
    isValidEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    },

    // Função para enviar o formulário
    handleSubmit() {
      if (this.validateForm()) {
        this.isSending = true;
        this.formError = false;

        // Enviar o formulário via EmailJS
        emailjs
          .sendForm(
            "service_x03yobk",
            "template_7ngf6gn",
            this.$refs.contactForm
          )
          .then(
            (response) => {
              console.log("Mensagem enviada com sucesso", response);
              this.submitted = true;
              this.isSending = false;
              this.form.name = "";
              this.form.email = "";
              this.form.message = "";
            },
            (error) => {
              console.error("Erro ao enviar a mensagem", error);
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
