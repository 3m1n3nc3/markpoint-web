<template>
  <!--Main Slider-->
  <section class="main-slider">
    <div
      class="rev_slider_wrapper fullwidthbanner-container"
      data-source="gallery"
      :id="`rev_slider_${type == 1 ? 'one' : 'two'}_wrapper`"
    >
      <div
        class="rev_slider fullwidthabanner"
        data-version="5.4.1"
        :id="`rev_slider_${type == 1 ? 'one' : 'two'}`"
      >
        <ul>
          <li
            data-description="Slide Description"
            data-easein="default"
            data-easeout="default"
            data-fsmasterspeed="1500"
            data-fsslotamount="7"
            data-fstransition="fade"
            data-hideafterloop="0"
            data-hideslideonmobile="off"
            data-masterspeed="default"
            data-param1=""
            data-param10=""
            data-param2=""
            data-param3=""
            data-param4=""
            data-param5=""
            data-param6=""
            data-param7=""
            data-param8=""
            data-param9=""
            data-rotate="0"
            data-saveperformance="off"
            data-slotamount="default"
            data-title="Slide Title"
            data-transition="parallaxvertical"
            :data-thumb="slide.image"
            :data-index="`rs-1688${i + slide.id}`"
            :key="slide.id"
            v-for="(slide, i) in slides"
          >
            <img
              alt=""
              class="rev-slidebg"
              data-bgfit="cover"
              data-bgparallax="10"
              data-bgposition="center center"
              data-bgrepeat="no-repeat"
              data-no-retina=""
              :src="slide.image"
            />

            <div
              class="tp-caption"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingtop="[0,0,0,0]"
              data-responsive_offset="on"
              data-type="text"
              data-height="none"
              data-width="['700','700','700','550']"
              data-whitespace="normal"
              data-hoffset="['15','15','15','15']"
              data-voffset="['-50','-90','-90','-90']"
              data-x="['right','right','right','right']"
              data-y="['middle','middle','middle','middle']"
              data-textalign="['top','top','top','top']"
              data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
            >
              <h2 v-html="slide.title"></h2>
            </div>

            <div
              class="tp-caption"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingtop="[0,0,0,0]"
              data-responsive_offset="on"
              data-type="text"
              data-height="none"
              data-width="['700','700','700','550']"
              data-whitespace="normal"
              data-hoffset="['15','15','15','15']"
              data-voffset="['75','40','20','0']"
              data-x="['right','right','right','right']"
              data-y="['middle','middle','middle','middle']"
              data-textalign="['top','top','top','top']"
              data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
            >
              <div class="text">
                {{ slide.text }}
              </div>
            </div>

            <div
              class="tp-caption tp-resizeme"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingtop="[0,0,0,0]"
              data-responsive_offset="on"
              data-type="text"
              data-height="none"
              data-width="['700','700','700','550']"
              data-whitespace="normal"
              data-hoffset="['15','15','15','15']"
              data-voffset="['170','140','120','100']"
              data-x="['right','right','right','right']"
              data-y="['middle','middle','middle','middle']"
              data-textalign="['top','top','top','top']"
              data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
            >
              <div class="btns-box" v-if="slide.link?.route">
                <RouterLink :to="slide.link?.route" class="theme-btn btn-style-one">
                  {{ slide.link.title }}
                </RouterLink>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!--End Main Slider-->
</template>

<script setup>
import { onMounted } from 'vue'
import mainSliderScript from '/js/main-slider-script.js?url'

defineProps({
  type: {
    type: Number,
    default: 1,
    validator: (value) => [1, 2].includes(value)
  },
  slides: {
    type: Array,
    default: () => []
  }
})

onMounted(() => {
  mainSliderScript()
})
</script>
