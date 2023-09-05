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
import mainScript from '/js/script.js?url'

onMounted(() => {
  mainScript()
})
</script>
