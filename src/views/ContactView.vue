<template>
  <section class="contact-container">
    <h1>Entre em Contato</h1>

    <form @submit.prevent="handleSubmit" class="contact-form">
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>

      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>

      <div class="form-group">
        <label for="message">Mensagem</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>

      <div class="form-group">
        <button type="submit" class="btn">Enviar</button>
      </div>
    </form>

    <p v-if="submitted" class="success-message">
      Mensagem enviada com sucesso!
    </p>
  </section>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      submitted: false, // Para mostrar a mensagem de sucesso
    };
  },
  methods: {
    handleSubmit() {
      // Simulando envio do formulário
      this.submitted = true;
      // Aqui você pode integrar com um serviço de envio de e-mail ou API
      // Exemplo: enviar dados para um serviço de e-mail como EmailJS ou Firebase

      // Limpar o formulário após envio
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
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

button:hover {
  background-color: #2c8f6e;
}

.success-message {
  margin-top: 20px;
  color: green;
  font-weight: bold;
}

/* Responsividade */
@media (max-width: 480px) {
  .contact-form {
    padding: 10px;
  }

  button {
    font-size: 0.9rem;
  }
}
</style>
