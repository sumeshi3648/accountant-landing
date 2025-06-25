<script setup>
import { ref } from 'vue'
import SignUpModal from './SignUpModal.vue'

const showModal = ref(false)
</script>

<template>
  <section class="hero-section">
    <!-- Header: Logo + Language -->
    <div class="topbar-wrapper">
      <div class="top-bar">
        <div class="logo-block">
          <img class="logo" src="@/assets/logo.png" alt="logo" />
          <span class="brand">Твой нормальный<br />бухгалтер</span>
        </div>
        <div class="lang-switch">Рус | Қаз</div>
      </div>
    </div>

    <!-- Main content -->
    <div class="hero-content-container">
      <div class="hero-content">
        <!-- Text and buttons -->
        <div class="hero-left">
          <h1 class="title">САЙТ АЙБЕКА</h1>
          <p class="subtitle">
            ТОТ, КТО СДАЕТ ЗА ТЕБЯ ВСЕ ОТЧЕТЫ И БЕРЕТ НА СЕБЯ ВЕСЬ ДОКУМЕНТООБОРОТ — БЕЗ КОСЯКОВ.
          </p>

          <div class="buttons">
            <button class="cta-button" @click="showModal = true">Записаться</button>
            <SignUpModal v-if="showModal" @close="showModal = false" />
            <!-- Decorative arrow image pointing from bubble to button -->
          </div>
        </div>

        <!-- Айбек + bubble stacked vertically -->
        <div class="hero-right">
          <img class="aybek" src="@/assets/aibek.png" alt="Айбек" />
          <div class="bubble">Объясню все что нужно<br />вести для белой бухгалтерии</div>
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
.topbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 96%;
  background-color: #fcd34d; /* Adjust to match your yellow */
  padding: 1.5rem 3rem;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.hero-content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* === GENERAL STYLES === */
.hero-section {
  background-image: url('@/assets/bg.png');
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

.lang-switch {
  font-size: 1.2rem;
  font-weight: 500;
  margin-right: 2rem;
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
  font-size: 1.2rem;
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

  .brand {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.2;
  }

  .lang-switch {
    font-size: 1rem;
    font-weight: 500;
    margin-right: 2.8rem;
  }

  .hero-content-container {
    flex-direction: row;
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
</style>
