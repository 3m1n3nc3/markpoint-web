<script setup>
import MainSlider from '../layouts/partials/MainSlider.vue'
import CompanySection from '../layouts/partials/CompanySection.vue'
import VideoSection from '../layouts/partials/VideoSection.vue'
import CallToActionSection from '../layouts/partials/CallToActionSection.vue'
import MessageSection from '../layouts/partials/MessageSection.vue'
import VisionSection from '../layouts/partials/VisionSection.vue'

const slides = [
  {
    id: 1,
    image: 'images/main-slider/image-1.jpg',
    title: 'We Provide all types of <span>constructions</span> services',
    text: `We have provided complete remodeling and construction solutions for residential and commercial properties in cities.`,
    link: { title: 'Contact Us', route: { name: 'contact.page' } }
  },
  {
    id: 2,
    image: 'images/main-slider/image-2.jpg',
    title: 'We provide all types of building <span>maintenance</span> and <span>Renovation</span>',
    text: 'We have provided complete remodeling and construction solutions for residential and commercial properties in cities.',
    link: { title: 'Contact Us', route: { name: 'contact.page' } }
  },
  {
    id: 3,
    image: 'images/main-slider/image-3.jpg',
    title:
      'We’re professionals for building <span>constructions<span> and <span>real estate development<span>',
    text: 'We have provided complete remodeling and construction solutions for residential and commercial properties in cities.',
    link: { title: 'Contact Us', route: { name: 'contact.page' } }
  },
  {
    id: 4,
    image: 'images/main-slider/image-4.jpg',
    title:
      'we have offer <span>consultancy</span>, <span>project management</span> and <span>feasible studies</span>.',
    link: { title: 'Contact Us', route: { name: 'contact.page' } }
  },
  {
    id: 4,
    image: 'images/main-slider/image-5.jpg',
    title:
      'we provide conversion of cars to <span>compressed natural gas</span> and <span>liquified natural gas</span>.',
    link: { title: 'Contact Us', route: { name: 'contact.page' } }
  }
]
</script>

<template>
  <MainSlider :key="Math.random()" :slides="slides" />

  <CompanySection />

  <VideoSection />

  <VisionSection />

  <CallToActionSection />

  <MessageSection />
</template>
