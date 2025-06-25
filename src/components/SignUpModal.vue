<template>
  <div class="modal-backdrop" @click.self="close">
    <div class="modal">
      <h2>Записаться</h2>
      <form @submit.prevent="submitForm">
        <input v-model="form.name" placeholder="Имя" required />
        <input v-model="form.phone" placeholder="Телефон" required />
        <textarea v-model="form.description" placeholder="Краткое описание проблемы"></textarea>
        <button type="submit">Отправить</button>
      </form>
      <p v-if="success" class="success-message">✅ Успешно отправлено!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close'])

const form = ref({ name: '', phone: '', description: '' })
const success = ref(false)

const close = () => emit('close')

const submitForm = async () => {
  try {
    await fetch(
      'https://script.google.com/macros/s/AKfycby_2asNvuTH3St6SUEvTrQ5wTOP54hxsOTL9_liLAmBlyfL8QovEzXTh-UbHypUmrmvWw/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(form.value),
      },
    )
    success.value = true
    setTimeout(close, 2000)
  } catch (e) {
    alert('Ошибка при отправке. Попробуйте снова.')
  }
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}
.modal {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
}
.modal input,
.modal textarea {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding-block: 0.8rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding-inline: 0.2rem;
}

.modal button {
  background-color: #e53935;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  width: 100%;
  font-weight: bold;
}
.success-message {
  color: green;
  text-align: center;
  margin-top: 1rem;
}
</style>
