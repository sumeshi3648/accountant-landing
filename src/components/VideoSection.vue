<script setup lang="ts">
import { ref } from 'vue'
import SignUpModal from './SignUpModal.vue'

const showModal = ref(false)
</script>

<template>
  <section class="video-section">
    <!-- Main CTA block -->
    <div class="cta-wrapper">
      <p class="cta-title">{{ $t('video') }}</p>
      <div class="bubble" v-html="$t('videoBtn')"></div>
      <div class="buttons">
        <button class="cta-button" @click="showModal = true">{{ $t('hero.button') }}</button>
        <SignUpModal v-if="showModal" @close="showModal = false" />
        <!-- Decorative arrow image pointing from bubble to button -->
      </div>
    </div>

    <!-- Actual Video -->
    <video class="actual-video" controls playsinline poster="@/assets/thumbnail.png">
      <source src="@/assets/video.MOV" type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>

    <div class="buttons">
      <button class="cta-button-small" @click="showModal = true">{{ $t('hero.button') }}</button>
      <SignUpModal v-if="showModal" @close="showModal = false" />
      <!-- Decorative arrow image pointing from bubble to button -->
    </div>
  </section>
</template>

<style scoped>
.video-section {
  background-size: cover;
  background-position: center;
  padding: 2rem 4rem;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

/* === CTA === */
.cta-wrapper {
  margin-top: 4rem;
  margin-bottom: 3rem;
  margin-left: 4rem;
  display: flex;
  flex-direction: column;
}

.cta-button {
  margin-top: 2rem;
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

.cta-button-small {
  display: none;
}

.cta-title {
  font-size: 3rem;
  font-weight: 700;
  color: #a9332a;
  margin-bottom: 1rem;
  transform: skewX(-10deg);
}

.bubble {
  background-color: #e53935;
  color: white;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  padding: 1.5rem 6rem;
  transform: skewX(-10deg);
  align-self: center;
  box-shadow: 4px 8px 0 rgba(26, 25, 25, 0.3);
  margin-left: 12rem;
}

/* === Video === */
.actual-video {
  width: 400px;
  height: 600px;
  margin-left: auto;
  margin-right: 12rem;
  margin-top: 0;
  object-fit: cover; /* 🔸 important: keeps it cropped like a thumbnail */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  background-color: black;
}

@media (max-width: 1280px) {
  .cta-wrapper {
    margin-left: 4rem;
  }

  .bubble {
    margin-left: 4rem;
  }

  .actual-video {
    margin-right: 4rem;
  }
}
/* === Mobile Styles === */
@media (max-width: 768px) {
  .video-section {
    padding: 1rem 1.2rem 6rem;
    align-items: center;
    flex-direction: column;
  }

  .cta-button {
    display: none;
  }

  .cta-button-small {
    background-color: #e53935;
    display: block;
    color: white;
    font-weight: bold;
    padding: 1rem 2.5rem;
    border: 4px solid white;
    border-radius: 100px;
    font-size: 1.4rem;
    cursor: pointer;
    width: fit-content;
  }

  .cta-wrapper {
    text-align: center;
    margin-top: 2rem;
    margin-left: -4rem;
  }

  .cta-title {
    font-size: 2.2rem;
  }

  .bubble {
    font-size: 1.6rem;
    box-shadow: 4px 4px 0 #333;
    padding: 1.3rem 6rem;
  }

  .actual-video {
    width: 100%;
    max-width: 360px;
    height: 560px;
    margin: 2rem auto;
  }
}

@media (max-width: 500px) {
  .video-section {
    padding: 1rem 0.8rem 4rem;
  }

  .cta-wrapper {
    margin-top: 4rem;
    margin-bottom: 2rem;
    margin-left: 0;
  }

  .cta-title {
    font-size: 1.6rem;
  }

  .cta-button {
    font-size: 1.3rem;
    padding: 0.7rem 1.6rem;
  }

  .bubble {
    font-size: 1.3rem;
    padding: 1rem 2.5rem;
    margin-left: 0;
  }

  .actual-video {
    width: 100%;
    max-width: 320px;
    height: 400px;
  }
}
</style>
