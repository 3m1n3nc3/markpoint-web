<template>
  <!--Message Section-->
  <section class="contact-section">
    <div class="auto-container">
      <!--Sec Title-->
      <div class="sec-title">
        <h2>Drop us messge for any query</h2>
      </div>
      <div class="row clearfix">
        <!--Form Column-->
        <div class="form-column col-md-8 col-sm-12 col-xs-12">
          <div class="inner-column">
            <!--Contact Form-->
            <div class="default-form contact-form">
              <form method="post" action="sendemail.php" id="contact-form" novalidate="novalidate">
                <div class="row clearfix">
                  <div class="form-group col-md-6 col-sm-6 col-xs-12">
                    <input
                      type="text"
                      name="firstname"
                      value=""
                      placeholder="Your name"
                      required=""
                    />
                  </div>

                  <div class="form-group col-md-6 col-sm-6 col-xs-12">
                    <input
                      type="text"
                      name="email"
                      value=""
                      placeholder="Your email address"
                      required=""
                    />
                  </div>

                  <div class="form-group col-md-6 col-sm-6 col-xs-12">
                    <input
                      type="text"
                      name="phone"
                      value=""
                      placeholder="Phone number"
                      required=""
                    />
                  </div>

                  <div class="form-group col-md-6 col-sm-6 col-xs-12">
                    <input type="text" name="subject" value="" placeholder="Subject" required="" />
                  </div>

                  <div class="form-group col-md-12 col-sm-12 col-xs-12">
                    <textarea name="message" placeholder="Type your massage here..."></textarea>
                  </div>

                  <div class="form-group col-md-12 col-sm-12 col-xs-12">
                    <button type="submit" class="theme-btn btn-style-one">Submit now</button>
                  </div>
                </div>
              </form>
            </div>
            <!--End Contact Form-->
          </div>
        </div>

        <!--Info Column-->
        <div class="info-column col-md-4 col-sm-12 col-xs-12">
          <div class="inner-column">
            <h2>Mark Point Multi Links</h2>
            <ul class="list-style-three">
              <li>
                <span class="icon fa fa-map-marker"></span>No. 12 Kadpoly Consult premises, <br />
                Ali Akilu Road, Kaduna
              </li>
              <li><span class="icon fa fa-phone"></span>+234(0)8037006175, +234(0)8065959007</li>
              <li><span class="icon fa fa-envelope"></span>markpointmultilinksnigltd@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--End Message Section-->
</template>
