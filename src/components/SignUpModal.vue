<template>
  <div class="modal-backdrop" @click.self="close">
    <div class="modal">
      <h2>{{ $t('signup.title') }}</h2>
      <form @submit.prevent="submitForm">
        <input v-model="form.name" :placeholder="$t('signup.name')" required />
        <input v-model="form.phone" :placeholder="$t('signup.phone')" required />
        <textarea v-model="form.description" :placeholder="$t('signup.description')"></textarea>
        <button type="submit">{{ $t('signup.button') }}</button>
      </form>
      <p v-if="success" class="success-message">{{ $t('signup.success') }}</p>
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
    success.value = true
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
    if (!response.ok) throw new Error('Network response was not OK')

    const result = await response.json()
    console.log('Success:', result)

    success.value = true
    setTimeout(close, 1000)
  } catch (e) {
    console.error(t('signup.error'), e)
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

.modal button:hover {
  background-color: #c62828;
}

.modal button:active {
  transform: scale(0.97); /* slightly smaller on press */
}

.success-message {
  color: green;
  text-align: center;
  margin-top: 1rem;
}

@media (max-width: 400px) {
  .modal {
    padding: 1.5rem 1rem;
  }

  .modal h2 {
    font-size: 1.4rem;
  }

  .modal input,
  .modal textarea {
    padding-block: 0.6rem;
    font-size: 0.9rem;
  }

  .modal button {
    padding: 0.8rem;
    font-size: 1rem;
  }

  .success-message {
    font-size: 1rem;
  }
}
</style>
