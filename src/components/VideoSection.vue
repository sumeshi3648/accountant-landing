<template>
  <section class="video-section">
    <!-- Main CTA block -->
    <div class="cta-wrapper">
      <p class="cta-title">{{ $t('video') }}</p>
      <div class="bubble" v-html="$t('videoBtn')"></div>
    </div>

    <!-- Actual Video -->
    <video class="actual-video" controls playsinline poster="@/assets/thumbnail.png">
      <source src="@/assets/video.MOV" type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>
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
@media (max-width: 400px) {
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
