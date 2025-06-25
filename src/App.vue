<template>
  <div id="app" class="app-container">
    <HeroSection />
    <WhySection />
    <VideoSection />
    <Footer />
    <!-- Add other sections here if needed -->
  </div>
</template>

<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import WhySection from './components/WhySection.vue'
import VideoSection from './components/VideoSection.vue'
import Footer from './components/Footer.vue'
</script>

<style>
body {
  margin: 0;
  font-family: 'Nunito', sans-serif;
  background-image: url('@/assets/bg-desktop.png');
}

@media (max-width: 768px) {
  body {
    background-image: url('@/assets/bg-mobile.png');
  }
}
</style>
