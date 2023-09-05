<script setup>
const blocks = [
  {
    id: 1,
    title: `Professionalism`,
    message: `Acquiring up-to-date knowledge with a view to building on professional expertise continually: ability to implementing specific business processes.`,
    message2: `Acquiring up-to-date knowledge with a view to building on professional expertise continually: ability to implementing specific business processes.`
  },
  {
    id: 2,
    title: `Positive Approach & Cooperation`,
    message: `Readiness to join multi-functional groups and projects and to respond to requests from colleagues from other organizational units; readiness for knowledge exchange and teamwork.`,
    message2: `Readiness to join multi-functional groups and projects and to respond to requests from colleagues from other organizational units; readiness for knowledge exchange and teamwork.`
  },
  {
    id: 3,
    title: `Initiative and Responsibility`,
    message: `Finding and proposing new solutions, both in terms of work responsibilities and, more broadly, the Company's interests.`,
    message2: `Finding and proposing new solutions, both in terms of work responsibilities and, more broadly, the Company's interests.`
  },
  {
    id: 4,
    title: `Shared Result`,
    message: `Working together to achieve tangible and outstanding results, striving to ward success with prerequisite Mutual assistance and cooperation from employees.`,
    message2: `Working together to achieve tangible and outstanding results, striving to ward success with prerequisite Mutual assistance and cooperation from employees.`
  }
]
</script>

<template>
  <!--Video Section-->
  <section class="video-section" style="background-image: url(/images/background/7.jpg)">
    <div class="auto-container">
      <div class="inner-container">
        <div class="row clearfix">
          <!--Content Column-->
          <div class="content-column col-md-6 col-sm-12 col-xs-12">
            <div class="inner-column">
              <h2>Why Choose Us?</h2>
              <div class="text">
                At MARK POINT MULTI LINKS LIMITED, we are dedicated to excellence, innovation, and
                customer satisfaction. With a team of experts, cutting-edge technology, and a
                customer-centric approach, we are your partners in shaping a better, more
                sustainable future. Contact us today to embark on a journey of outstanding
                architectural and construction solutions.
              </div>
              <ul class="list-style-two">
                <li>Dedicated to excellence</li>
                <li>Innovation customer satisfaction</li>
                <li>Experts with cutting-edge technology</li>
                <li>Customer-centric approach</li>
              </ul>
            </div>
          </div>

          <!--Video Column-->
          <div class="video-column col-md-6 col-sm-12 col-xs-12">
            <div class="inner-column">
              <!--Video Box-->
              <div class="video-box">
                <figure class="image">
                  <img src="/images/resource/video-img.jpg" alt="" />
                  <a
                    href="https://www.youtube.com/watch?v=kxPCFljwJws"
                    class="lightbox-image overlay-box"
                    ><span class="flaticon-arrow"></span
                  ></a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="inner-column">
        <h2 class="dark-header">Core Values</h2>
      </div>
      <div class="four-item-carousel owl-carousel owl-theme">
        <!--Services Block Two-->
        <div class="service-block-two" v-for="block in blocks" :key="block.id">
          <div class="inner-box">
            <div class="flip-container">
              <div class="flipper">
                <div class="front">
                  <div class="icon-box">
                    <span class="icon">
                      <img :src="`/images/icons/icon-${block.id}.svg`" alt="" />
                    </span>
                  </div>
                  <h3>{{ block.title }}</h3>
                  <div class="text">
                    {{ block.message }}
                  </div>
                </div>

                <div class="back">
                  <div class="overlay-box">
                    <div class="overlay-inner">
                      <div class="overlay-content">
                        <h4>
                          <a href="#">{{ block.title }}</a>
                        </h4>
                        <div class="overlay-text">
                          {{ block.message2 }}
                        </div>
                        <!-- <a href="architecture.html" class="read-more">Read more</a> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--End Video Section-->
</template>

<style scoped>
.dark-header {
  position: relative;
  color: #242424;
  font-size: 35px;
  font-weight: 600;
  line-height: 1.5em;
  margin-bottom: 18px;
}
</style>
