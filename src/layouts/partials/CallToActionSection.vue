<template>
  <!--Call To Action Section Two-->
  <section
    class="call-to-action-section-two"
    style="background-image: url(/images/background/8.jpg)"
  >
    <div class="auto-container">
      <h2>Let's get to work</h2>
      <div class="text">
        Get in touch with us to get started on your project. We will take work through the planning,
        design and construction process to build your dream home.
      </div>
      <div class="number-box clearfix">
        <div class="pull-left">
          <div class="number">08037006175</div>
        </div>
        <div class="pull-right">
          <RouterLink :to="{ name: 'services.request.page' }" class="theme-btn btn-style-three">
            Request for service
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
  <!--End Call To Action Section Two-->
</template>
