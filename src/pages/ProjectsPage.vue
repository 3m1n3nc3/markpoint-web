<script setup>
import MainHeaderSection from '../layouts/partials/MainHeaderSection.vue'
const images = [
  '1',
  '-1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '-8',
  '9',
  '-9',
  '10',
  '-10',
  '11',
  '-11',
  '12',
  '-12',
  '13',
  '-13',
  '14',
  '-14',
  '15',
  '-15'
]
</script>

<template>
  <MainHeaderSection />
  <section class="gallery-section">
    <div class="auto-container">
      <!--MixitUp Galery-->
      <div class="mixitup-gallery">
        <!--Filter-->
        <!-- <div class="filters clearfix">
          <ul class="filter-tabs filter-btns text-center clearfix">
            <li class="filter" data-role="button" data-filter="all">All</li>
            <li class="filter active" data-role="button" data-filter=".commercial">Commercial</li>
            <li class="filter" data-role="button" data-filter=".education">Education</li>
            <li class="filter" data-role="button" data-filter=".hospital">Hospital</li>
            <li class="filter" data-role="button" data-filter=".residential">Residential</li>
            <li class="filter" data-role="button" data-filter=".office">Office</li>
            <li class="filter" data-role="button" data-filter=".reconstruction">Reconstruction</li>
          </ul>
        </div> -->

        <div class="filter-list row clearfix" id="MixItUp40A047">
          <!--Gallery Item-->
          <div
            class="gallery-item mix all col-lg-3 col-md-4 col-sm-6 col-xs-12"
            style="display: inline-block"
            :key="i"
            v-for="i in images"
          >
            <div class="inner-box">
              <div class="image">
                <img :src="`/images/projects/thumb-${i}.jpg`" alt="" />
                <div class="overlay-box">
                  <a
                    :href="`/images/projects/image-${i.replace('-', '')}.jpg`"
                    data-fancybox="images"
                    class="lightbox-image- overlay-link"
                  ></a>
                  <div class="content">
                    <h3><a href="#">Project</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
