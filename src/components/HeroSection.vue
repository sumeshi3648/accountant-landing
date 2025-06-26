<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SignUpModal from './SignUpModal.vue'

const showModal = ref(false)
const { locale } = useI18n()

function setLang(lang: 'ru' | 'kz') {
  locale.value = lang
  localStorage.setItem('lang', lang)
}
</script>

<template>
  <section class="hero-section">
    <!-- Header: Logo + Language -->
    <div class="topbar-wrapper">
      <div class="top-bar">
        <div class="logo-block">
          <img class="logo" src="@/assets/logo.png" alt="logo" />
          <span class="brand" v-html="$t('topbar.logo')"></span>
        </div>
        <div class="right-side-top-bar">
          <div class="lang-switch">
            <button @click="setLang('ru')" :class="{ active: locale === 'ru' }">Рус</button>

            <button @click="setLang('kz')" :class="{ active: locale === 'kz' }">Қаз</button>
          </div>
          <p>
            <a class="phone-link" href="tel:+77074767187">📞 +7 (707) 476 71 87</a>
          </p>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="hero-content-container">
      <div class="hero-content">
        <!-- Text and buttons -->
        <div class="hero-left">
          <h1 class="title">{{ $t('hero.title') }}</h1>
          <p class="subtitle">
            {{ $t('hero.subtitle') }}
          </p>

          <div class="buttons">
            <button class="cta-button" @click="showModal = true">{{ $t('hero.button') }}</button>
            <SignUpModal v-if="showModal" @close="showModal = false" />
            <!-- Decorative arrow image pointing from bubble to button -->
          </div>
        </div>

        <!-- Айбек + bubble stacked vertically -->
        <div class="hero-right">
          <img class="aybek" src="@/assets/aibek.png" alt="Айбек" />
          <div class="bubble" v-html="$t('hero.bubble')"></div>
        </div>
      </div>
      <!-- Desktop arrow -->
      <img class="curve-arrow desktop-only" src="@/assets/arrow-desktop.png" alt="Arrow" />

      <!-- Mobile arrow -->
      <img
        class="vertical-arrow mobile-only"
        src="@/assets/arrow-vertical.png"
        alt="Arrow mobile"
      />
    </div>
  </section>
</template>

<style scoped>
.phone-link {
  display: inline-block;
  background-color: #e53935;
  color: white;
  border: 2px solid white;
  border-radius: 30px;
  padding: 0.4rem 1rem;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.phone-link:hover {
  background-color: #d32f2f;
}

.topbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 85%;
  background-color: #fcd34d;
  padding: 1.5rem 3rem;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.right-side-top-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-right: 2rem;
}

.hero-content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lang-switch {
  display: flex;
  gap: 0.4rem;
  align-items: center;
}

.lang-switch button {
  background-color: white;
  color: #231f20;
  border: 2px solid transparent;
  border-radius: 20px;
  padding: 0.4rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  font-size: 0.9rem;
}

.lang-switch button:hover {
  background-color: #ffe082;
}

.lang-switch button.active {
  background-color: #e53935;
  color: white;
  border-color: white;
  font-weight: 700;
}

/* === GENERAL STYLES === */
.hero-section {
  /* background-image: url('@/assets/bg.png'); */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  color: #231f20;
  margin-top: 6rem;
}

/* === TOP BAR === */
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.logo-block {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo {
  width: 30px;
  height: auto;
}

.brand {
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.2;
}

/* === MAIN CONTENT === */
.hero-content {
  display: flex;
  justify-content: center;
  gap: 12rem;
  align-items: flex-start;
  flex-grow: 1;
  margin-top: 3rem;
}

/* === LEFT TEXT BLOCK === */
.hero-left {
  max-width: 45%;
}

.title {
  font-size: 4.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
}

.cta-button {
  background-color: #e53935;
  color: white;
  font-weight: bold;
  padding: 1rem 2.5rem;
  border: 4px solid white;
  border-radius: 100px;
  font-size: 2rem;
  cursor: pointer;
  width: fit-content;
}

.vertical-arrow {
  margin-top: 14rem;
  width: 80px;
}

.desktop-only {
  display: block;
}

.mobile-only {
  display: none;
}

/* === RIGHT COLUMN: PHOTO + BUBBLE === */
.hero-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: -80px; /* Raise whole column upward */
}

.aybek {
  width: 400px;
  height: auto;
}

.bubble {
  background-color: #e53935;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  padding: 1rem 2rem;
  transform: skewX(-10deg);
  align-self: center;
  box-shadow: 4px 8px 0 rgba(26, 25, 25, 0.3);
}

@media (max-width: 768px) {
  .top-bar {
    flex-direction: row;
    align-items: flex-start;
    gap: 1rem;
  }
  .phone-link {
    font-size: 0.8rem;
  }

  .brand {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.2;
  }

  .right-side-top-bar {
    flex-direction: column;
    align-items: center;
    margin-right: 3rem;
    gap: 0;
    justify-content: flex-end;
  }

  .lang-switch {
    font-size: 0.8rem;
    font-weight: 500;
    margin-right: 2.8rem;
  }

  .hero-content-container {
    flex-direction: row;
    padding-left: 100px;
  }

  .hero-content {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .hero-section {
    margin-top: 1rem;
  }

  .hero-left {
    max-width: 100%;
    text-align: center;
    margin-top: 3rem;
  }

  .title {
    font-size: 2.8rem;
    margin: 0;
  }

  .subtitle {
    font-size: 1.4rem;
    margin: 10px;
  }

  .buttons {
    align-items: center;
  }

  .cta-button {
    font-size: 1.4rem;
    padding: 1rem 2rem;
  }

  .hero-right {
    margin-top: 0;
    align-items: center;
  }

  .aybek {
    width: 250px;
    margin-top: 1rem;
  }

  .bubble {
    font-size: 1.2rem;
    padding: 0.8rem 1.2rem;
    margin-bottom: -1rem;
  }

  .curve-arrow {
    width: 220px;
    margin-top: 0.5rem;
    margin-left: auto;
    margin-right: auto;
  }

  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: block;
  }
}

@media (max-width: 500px) {
  .hero-section {
    padding-bottom:;
  }
  .topbar-wrapper {
    padding: 1rem 1.2rem;
  }
  .phone-link {
    font-size: 0.6rem;
  }

  .lang-switch {
    margin-right: 0rem;
  }
  .lang-switch button {
    font-size: 0.6rem;
    font-weight: 500;
  }
  .logo {
    width: 24px;
  }
  .right-side-top-bar {
    margin-right: 2rem;
  }
  .right-side-top-bar p {
    margin: 4px;
  }

  .brand {
    font-size: 0.9rem;
  }

  .hero-content-container {
    padding: 0 0.6rem;
    padding-left: 40px;
  }

  .hero-left {
    margin-top: 1rem;
  }

  .title {
    font-size: 2.1rem;
  }

  .subtitle {
    font-size: 1.1rem;
    margin: 0.4rem 0;
  }

  .cta-button {
    font-size: 1.3rem;
    padding: 0.7rem 1.6rem;
  }

  .aybek {
    width: 180px;
  }

  .bubble {
    font-size: 1rem;
    padding: 0.6rem 1rem;
  }

  .vertical-arrow {
    width: 60px;
    margin-top: 8rem;
  }

  .curve-arrow {
    width: 160px;
    margin-top: 0.3rem;
  }
}

@media (max-width: 410px) {
  .lang-switch button {
    font-size: 0.5rem;
    font-weight: 500;
  }
  .phone-link {
    font-size: 0.5rem;
  }
}
@media (max-width: 360px) {
  .hero-content-container {
    padding-left: 8px;
  }
}
</style>
