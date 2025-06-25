<template>
  <div class="language-switcher">
    <select @change="changeLang" v-model="lang" class="lang-select">
      <option value="ru">Рус</option>
      <option value="kz">Қаз</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const lang = ref(locale.value)

function changeLang() {
  locale.value = lang.value
}
</script>

<style scoped>
.language-switcher {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.lang-select {
  background-color: white;
  border: 2px solid #007bff;
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.lang-select:hover {
  background-color: #f8f9fa;
}

.lang-select:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}
</style>
