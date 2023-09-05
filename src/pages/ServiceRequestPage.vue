<script setup>
import MainHeaderSection from '../layouts/partials/MainHeaderSection.vue'

const services = [
  {
    title: 'Architectural Design and Contract Documentation'
  },
  {
    title: 'Construction of Building/Civil Engineering Works'
  },
  {
    title: 'Project Supervision and Implementation'
  },
  {
    title: 'Project Management'
  },
  {
    title: 'Real Estate Development, Management, Merchandise'
  },
  {
    title: 'Building Maintenance, Renovation, and Heritage Records'
  },
  {
    title: 'Facility Management'
  },
  {
    title: 'Hydro-Engineering Borehole Drilling'
  },
  {
    title: 'Syndicated Property Development'
  },
  {
    title: 'Feasibility Studies and Tender Preparation'
  },
  {
    title: 'Construction Control for Target Property Delivery'
  },
  {
    title: 'Consultancy and Conversion of cars to Compressed Natural Gas and Liquified Natural Gas'
  }
]

const states = [
  { name: 'Abia' },
  { name: 'Adamawa' },
  { name: 'Akwa Ibom' },
  { name: 'Anambra' },
  { name: 'Bauchi' },
  { name: 'Bayelsa' },
  { name: 'Benue' },
  { name: 'Borno' },
  { name: 'Cross River' },
  { name: 'Delta' },
  { name: 'Ebonyi' },
  { name: 'Edo' },
  { name: 'Ekiti' },
  { name: 'Enugu' },
  { name: 'Gombe' },
  { name: 'Imo' },
  { name: 'Jigawa' },
  { name: 'Kaduna' },
  { name: 'Kano' },
  { name: 'Katsina' },
  { name: 'Kebbi' },
  { name: 'Kogi' },
  { name: 'Kwara' },
  { name: 'Lagos' },
  { name: 'Nasarawa' },
  { name: 'Niger' },
  { name: 'Ogun' },
  { name: 'Ondo' },
  { name: 'Osun' },
  { name: 'Oyo' },
  { name: 'Plateau' },
  { name: 'Rivers' },
  { name: 'Sokoto' },
  { name: 'Taraba' },
  { name: 'Yobe' },
  { name: 'Zamfara' },
  { name: 'FCT' }
]
</script>

<template>
  <MainHeaderSection />

  <section class="contact-section">
    <div class="auto-container">
      <!--Sec Title-->
      <div class="sec-title">
        <h2>Request for a service</h2>
      </div>
      <div class="row clearfix">
        <!--Form Column-->
        <div class="form-column col-md-12">
          <div class="inner-column">
            <!--Contact Form-->
            <div class="default-form contact-form">
              <form method="post" action="sendemail.php" id="contact-form" novalidate="novalidate">
                <div class="row clearfix">
                  <div class="form-group col-md-6 col-sm-6 col-xs-12">
                    <input
                      type="text"
                      name="fullname"
                      value=""
                      placeholder="Full name"
                      required=""
                    />
                  </div>

                  <div class="form-group col-md-6 col-sm-6 col-xs-12">
                    <input
                      type="text"
                      name="phone"
                      value=""
                      placeholder="Phone Number"
                      required=""
                    />
                  </div>

                  <div class="form-group col-md-6 col-sm-6 col-xs-12">
                    <select name="state" value="" placeholder="State" required="">
                      <option value="" disabled selected>Select State</option>
                      <option :value="state.name" :key="state.name" v-for="state in states">
                        {{ state.name }}
                      </option>
                    </select>
                  </div>

                  <div class="form-group col-md-6 col-sm-6 col-xs-12">
                    <input type="text" name="city" value="" placeholder="City" required="" />
                  </div>

                  <div class="form-group col-md-12">
                    <input type="text" name="address" value="" placeholder="Address" required="" />
                  </div>

                  <div class="form-group col-md-12">
                    <select name="state" value="" placeholder="State" required="">
                      <option value="" disabled selected>Select Service</option>
                      <option :value="i" :key="service.title" v-for="(service, i) in services">
                        {{ service.title }}
                      </option>
                    </select>
                  </div>

                  <div class="form-group col-md-12 col-sm-12 col-xs-12">
                    <button type="submit" class="theme-btn btn-style-one">Send Request</button>
                  </div>
                </div>
              </form>
            </div>
            <!--End Contact Form-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
