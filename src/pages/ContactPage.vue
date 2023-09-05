<script setup>
import MainHeaderSection from '../layouts/partials/MainHeaderSection.vue'
import MessageSection from '../layouts/partials/MessageSection.vue'
</script>

<template>
  <MainHeaderSection />

  <MessageSection />

  <section class="map-section">
    <!--Map Outer-->
    <div class="map-outer">
      <!--Map Canvas-->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.4669712487134!2d7.430587910693209!3d10.542583663419913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b2cb5c2672bda3%3A0xacef61522a866525!2sKadpoly%20Consult%20Nigeria%20Limited!5e0!3m2!1sen!2sng!4v1693924016895!5m2!1sen!2sng"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>
