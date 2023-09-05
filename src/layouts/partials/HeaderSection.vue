<template>
  <!-- Main Header / Header Style Two-->
  <header class="main-header header-style-two">
    <!-- Header Top -->
    <div class="header-top">
      <div class="auto-container">
        <div class="inner-container clearfix">
          <!--Top Left-->
          <div class="top-left">
            <ul class="links clearfix">
              <li>
                <a href="tel:+2348037006175">
                  <span class="icon fa fa-phone"></span>+234(0)8037006175
                </a>
              </li>
              <li>
                <a href="tel:+2348065959007">
                  <span class="icon fa fa-phone"></span>+234(0)8065959007
                </a>
              </li>
              <li>
                <a href="mailto:markpointmultilinksnigltd@gmail.com" target="_blank">
                  <span class="icon fa fa-envelope-o"></span>markpointmultilinksnigltd@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <!--Top Right-->
          <div class="top-right clearfix">
            <!--social-icon-->
            <div class="social-icon">
              <ul class="clearfix">
                <li>Stay Connected :</li>
                <li>
                  <a href="#"><span class="fa fa-facebook"></span></a>
                </li>
                <li>
                  <a href="#"><span class="fa fa-twitter"></span></a>
                </li>
                <li>
                  <a href="#"><span class="fa fa-google-plus"></span></a>
                </li>
                <li>
                  <a href="#"><span class="fa fa-linkedin"></span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Header Top End -->

    <!-- Main Box -->
    <div class="main-box">
      <div class="auto-container">
        <div class="outer-container clearfix">
          <!--Logo Box-->
          <div class="logo-box">
            <div class="logo">
              <a
                :href="$router.resolve({ name: 'home.page' }).href"
                @click="location.href = $router.resolve({ name: 'home.page' }).href"
                ><img src="/images/logo.jpg" alt="Logo"
              /></a>
            </div>
          </div>

          <!--Nav Outer-->
          <div class="nav-outer clearfix">
            <!-- Main Menu -->
            <nav class="main-menu">
              <div class="navbar-header">
                <!-- Toggle Button -->
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>

              <div class="navbar-collapse collapse clearfix">
                <ul class="navigation clearfix">
                  <li class="dropdown" :class="{ current: $route.name === 'home.page' }">
                    <a
                      :href="$router.resolve({ name: 'home.page' }).href"
                      @click="location.href = $router.resolve({ name: 'home.page' }).href"
                      >Home</a
                    >
                  </li>
                  <li class="dropdown" :class="{ current: $route.name === 'projects.page' }">
                    <RouterLink :to="{ name: 'projects.page' }">Past Projects</RouterLink>
                  </li>
                  <li class="services" :class="{ current: $route.name === 'services.page' }">
                    <RouterLink :to="{ name: 'services.page' }">Services</RouterLink>
                  </li>
                  <li
                    class="services"
                    :class="{ current: $route.name === 'services.request.page' }"
                  >
                    <RouterLink :to="{ name: 'services.request.page' }">Service Request</RouterLink>
                  </li>
                  <li class="services" :class="{ current: $route.name === 'contact.page' }">
                    <RouterLink :to="{ name: 'contact.page' }">Contact Us</RouterLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <!--Nav Outer End-->
        </div>
      </div>
    </div>

    <!--Sticky Header-->
    <div class="sticky-header">
      <div class="auto-container">
        <div class="sticky-inner-container clearfix">
          <!--Logo-->
          <div class="logo pull-left">
            <a
              :href="$router.resolve({ name: 'home.page' }).href"
              @click="location.href = $router.resolve({ name: 'home.page' }).href"
              class="img-responsive"
              ><img src="/images/logo-small.jpg" alt="" title=""
            /></a>
          </div>

          <!--Right Col-->
          <div class="right-col pull-right">
            <!-- Main Menu -->
            <nav class="main-menu">
              <div class="navbar-header">
                <!-- Toggle Button -->
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>

              <div class="navbar-collapse collapse clearfix">
                <ul class="navigation clearfix">
                  <li class="dropdown" :class="{ current: $route.name === 'home.page' }">
                    <a
                      :href="$router.resolve({ name: 'home.page' }).href"
                      @click="location.href = $router.resolve({ name: 'home.page' }).href"
                      >Home</a
                    >
                  </li>
                  <li class="dropdown" :class="{ current: $route.name === 'projects.page' }">
                    <RouterLink :to="{ name: 'projects.page' }">Past Projects</RouterLink>
                  </li>
                  <li class="services" :class="{ current: $route.name === 'services.page' }">
                    <RouterLink :to="{ name: 'services.page' }">Services</RouterLink>
                  </li>
                  <li
                    class="services"
                    :class="{ current: $route.name === 'services.request.page' }"
                  >
                    <RouterLink :to="{ name: 'services.request.page' }">Service Request</RouterLink>
                  </li>
                  <li class="services" :class="{ current: $route.name === 'contact.page' }">
                    <RouterLink :to="{ name: 'contact.page' }">Contact Us</RouterLink>
                  </li>
                </ul>
              </div>
            </nav>
            <!-- Main Menu End-->

            <!--Outer Box-->
            <div class="outer-box">
              <!--Search Box-->
              <div class="search-box-outer">
                <div class="dropdown">
                  <button
                    class="search-box-btn dropdown-toggle"
                    type="button"
                    id="dropdownMenu4"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="fa fa-search"></span>
                  </button>
                  <ul class="dropdown-menu pull-right search-panel" aria-labelledby="dropdownMenu4">
                    <li class="panel-outer">
                      <div class="form-container">
                        <form method="post" action="blog.html">
                          <div class="form-group">
                            <input
                              type="search"
                              name="field-name"
                              value=""
                              placeholder="Search Here"
                              required
                            />
                            <button type="submit" class="search-btn">
                              <span class="fa fa-search"></span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End Sticky Header-->
  </header>
  <!--End Main Header -->
</template>

<script setup>
const location = window.location
</script>
