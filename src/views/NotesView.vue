<template>
  <div>
    <h1>Notas</h1>

    <input
      v-model="newNote"
      placeholder="Digite uma nova nota"
      @keyup.enter="addNote"
    />
    <button @click="addNote">Adicionar</button>

    <ul>
      <li v-for="note in notes" :key="note.id">
        {{ note.title }}
        <button @click="deleteNote(note.id)" style="margin-left: 10px">
          🗑️
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { supabase } from "@/lib/supabase.js";

export default {
  data() {
    return {
      notes: [],
      newNote: "",
    };
  },
  async mounted() {
    await this.loadNotes();
  },
  methods: {
    async loadNotes() {
      const { data, error } = await supabase.from("notes").select();
      if (error) {
        console.error("Erro ao buscar notas:", error);
      } else {
        this.notes = data;
      }
    },
    async addNote() {
      if (!this.newNote.trim()) return;
      const { data, error } = await supabase
        .from("notes")
        .insert([{ title: this.newNote.trim() }])
        .single();
      if (error) {
        console.error("Erro ao adicionar nota:", error);
      } else {
        this.notes.push(data);
        this.newNote = "";
      }
    },
    async deleteNote(id) {
      const { error } = await supabase.from("notes").delete().eq("id", id);
      if (error) {
        console.error("Erro ao deletar nota:", error);
      } else {
        this.notes = this.notes.filter((note) => note.id !== id);
      }
    },
  },
};
</script>
