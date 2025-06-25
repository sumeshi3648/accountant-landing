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
  background-color: #f7c53b;
}
</style>
