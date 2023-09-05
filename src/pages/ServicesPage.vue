<script setup>
import { computed } from 'vue'
import MainHeaderSection from '../layouts/partials/MainHeaderSection.vue'
import { useRoute } from 'vue-router'
const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  })
}
const services = [
  {
    id: 1,
    image: '/images/services/Architectural1.jpg',
    title: 'Architectural Design and Contract Documentation',
    text: `Our skilled architects bring your visions to life, creating innovative and functional designs that capture your requirements while adhering to industry standards. We provide meticulous contract documentation to ensure a seamless construction phase..`
  },
  {
    id: 2,
    image: '/images/services/Constrcuction2.jpg',
    title: 'Construction of Building/Civil Engineering Works',
    text: `From ground-breaking to completion, we excel in constructing buildings and civil engineering works that stand the test of time. Our commitment to quality and precision ensures projects are delivered on time and within budget.`
  },
  {
    id: 3,
    image: '/images/services/Project_Supversion.jpg',
    title: 'Project Supervision and Implementation',
    text: `Our experienced team oversees every aspect of project execution, ensuring that plans are translated into reality flawlessly. We supervise diligently to maintain quality standards and keep projects on track.`
  },
  {
    id: 4,
    image: '/images/services/ProjectMgt.jpg',
    title: 'Project Management',
    text: `Effective project management is our forte. We handle complexities, streamline processes, and deliver projects that exceed expectations, meeting your goals and objectives.`
  },
  {
    id: 5,
    image: '/images/services/RealEstate.jpg',
    title: 'Real Estate Development, Management, Merchandise',
    text: `In the world of real estate, we lead the way with comprehensive services that cover development, management, and merchandise. Whether it's residential, commercial, or mixed-use properties, we have you covered.`
  },
  {
    id: 6,
    image: '/images/services/BuildingMaintenace.jpg',
    title: 'Building Maintenance, Renovation, and Heritage Records',
    text: `We breathe new life into structures through meticulous maintenance, renovations, and preservation efforts. Our heritage records ensure the legacy of architectural marvels lives on.`
  },
  {
    id: 7,
    image: '/images/services/FacilityManagement.jpg',
    title: 'Facility Management',
    text: `We manage your facilities with expertise, optimizing their functionality, comfort, and efficiency. Our services enhance the life cycle of your built environment.`
  },
  {
    id: 8,
    image: '/images/services/Hydro-Engineering2.jpg',
    title: 'Hydro-Engineering Borehole Drilling',
    text: `We harness the power of hydro-engineering to provide sustainable water solutions. Our borehole drilling services ensure access to clean and reliable water sources.`
  },
  {
    id: 9,
    image: '/images/services/SyndicatedProperty1.jpg',
    title: 'Syndicated Property Development',
    text: `Innovative collaboration is at the heart of our syndicated property development. We create valuable partnerships to bring outstanding projects to fruition.`
  },
  {
    id: 10,
    image: '/images/services/FeasibilityStudies2.jpg',
    title: 'Feasibility Studies and Tender Preparation',
    text: `Our thorough feasibility studies guide informed decision-making, while our tender preparation ensures competitive and transparent processes for successful projects.`
  },
  {
    id: 11,
    image: '/images/services/ContructionControl.jpg',
    title: 'Construction Control for Target Property Delivery',
    text: `Precise control mechanisms ensure timely and accurate property delivery. Our construction control expertise minimizes risks and maximizes results.`
  },
  {
    id: 12,
    image: '/images/services/CNG_LN_Cars3.jpg',
    title: 'Consultancy and Conversion of cars to Compressed Natural Gas and Liquified Natural Gas',
    text: `With a commitment to sustainability, we offer consultancy services for converting vehicles to compressed natural gas (CNG) and liquified natural gas (LNG), contributing to eco-friendly transportation solutions.`
  }
]

const route = useRoute()
const service = computed(() => {
  return services.find((service) => service.id == route.params.service) || services[0] || {}
})
</script>
<template>
  <MainHeaderSection />

  <div class="sidebar-page-container">
    <div class="auto-container">
      <div class="row clearfix">
        <!--Sidebar Side-->
        <div class="sidebar-side col-lg-4 col-sm-5 col-xs-12">
          <aside class="sidebar">
            <!--Blog Category Widget-->
            <div class="sidebar-widget sidebar-blog-category">
              <ul class="blog-cat">
                <li
                  :key="serve.id"
                  :class="{ active: service.id == serve.id }"
                  v-for="serve in services"
                >
                  <RouterLink
                    :to="{ name: 'services.page', params: { service: serve.id } }"
                    @click="scrollTop"
                  >
                    {{ serve.title }}
                  </RouterLink>
                </li>
              </ul>
            </div>

            <!--Help Widget-->
            <div class="sidebar-widget help-widget">
              <div class="widget-content">
                <div class="image">
                  <img src="/images/services/ad.jpg" alt="" />
                  <div class="content">
                    <h2>
                      Available <br />
                      <span>for any type of construction</span>
                    </h2>
                    <h3>We can help</h3>
                    <RouterLink
                      class="theme-btn btn-style-six"
                      :to="{ name: 'services.request.page' }"
                    >
                      Request for a service
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <!--Content Side-->
        <div class="content-side col-lg-8 col-sm-7 col-xs-12">
          <div class="services-single">
            <div class="inner-service">
              <!--Image-->
              <div class="single-image">
                <img :src="service.image" alt="" />
              </div>
              <h2>{{ service.title }}</h2>

              <div class="text">
                <p>
                  {{ service.text }}
                </p>
                <!--Two Column-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
