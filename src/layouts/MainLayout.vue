<template>
  <div class="page-wrapper">
    <!-- Preloader -->
    <div class="preloader"></div>
    <HeaderSection />

    <RouterView />

    <FooterSection />
  </div>
</template>

<script setup>
import HeaderSection from '../layouts/partials/HeaderSection.vue'
import FooterSection from '../layouts/partials/FooterSection.vue'
import { onMounted } from 'vue'
import mainScript from '../assets/script.js'

onMounted(() => {
  mainScript()
})
</script>
