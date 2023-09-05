<template>
  <!--Main Footer-->
  <footer class="main-footer" style="background-image: url(/images/background/6.jpg)">
    <div class="auto-container">
      <!--Upper Box-->
      <div class="upper-box">
        <ul class="list-style-one clearfix">
          <li>
            <span class="icon flaticon-pin"></span>No. 12 Kadpoly Consult premises, <br />
            Ali Akilu Road, Kaduna
          </li>
          <li>
            <span class="icon flaticon-envelope-1"></span>Email us : <br />
            markpointmultilinksnigltd@gmail.com
          </li>
          <li>
            <span class="icon flaticon-technology-2"></span>Call us : <br />
            +234(0)8037006175, +234(0)8065959007
          </li>
        </ul>
      </div>

      <!--Widgets Section-->
      <div class="widgets-section">
        <div class="row clearfix">
          <!--big column-->
          <div class="big-column col-md-6 col-sm-12 col-xs-12">
            <div class="row clearfix">
              <!--Footer Column-->
              <div class="footer-column col-md-7 col-sm-6 col-xs-12">
                <div class="footer-widget logo-widget">
                  <div class="logo">
                    <a href="index.html"><img src="/images/footer-logo.jpg" alt="" /></a>
                  </div>
                  <div class="text">
                    Dedicated to providing you with professional services of the highest global
                    standards.
                  </div>
                  <ul class="social-icon-two">
                    <li>
                      <a href="#"><span class="fa fa-twitter"></span></a>
                    </li>
                    <li>
                      <a href="#"><span class="fa fa-linkedin-square"></span></a>
                    </li>
                    <li>
                      <a href="#"><span class="fa fa-facebook-square"></span></a>
                    </li>
                    <li>
                      <a href="#"><span class="fa fa-skype"></span></a>
                    </li>
                  </ul>
                </div>
              </div>

              <!--Footer Column-->
              <div class="footer-column col-md-5 col-sm-6 col-xs-12">
                <div class="footer-widget links-widget">
                  <h2>Quick Links</h2>
                  <div class="widget-content">
                    <ul class="list">
                      <li>
                        <RouterLink :to="{ name: 'projects.page' }"> Past Projects </RouterLink>
                      </li>
                      <li>
                        <RouterLink :to="{ name: 'contact.page' }">Contact Us</RouterLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--big column-->
          <div class="big-column col-md-6 col-sm-12 col-xs-12">
            <div class="row clearfix">
              <!--Footer Column-->
              <div class="footer-column col-md-6 col-sm-6 col-xs-12">
                <div class="footer-widget links-widget">
                  <h2>Our Services</h2>
                  <div class="widget-content">
                    <ul class="list">
                      <li><RouterLink :to="{ name: 'services.page' }">Our Services</RouterLink></li>
                      <li>
                        <RouterLink :to="{ name: 'services.request.page' }">
                          Request For Services
                        </RouterLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!--Footer Column-->
              <div class="footer-column col-md-6 col-sm-6 col-xs-12">
                <div class="footer-widget newsletter-widget">
                  <h2>Newsletter</h2>
                  <div class="widget-content">
                    <div class="text">Get our offers & News in your inbox</div>
                    <!--Emailed Form-->
                    <div class="emailed-form">
                      <form method="post" action="contact.html">
                        <div class="form-group">
                          <input
                            type="email"
                            name="email"
                            value=""
                            placeholder="Email address"
                            required
                          />
                          <button type="submit" class="theme-btn">Subscribe now</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Footer Bottom-->
    <div class="footer-bottom">
      <div class="auto-container">
        <div class="row clearfix">
          <div class="column col-md-6 col-sm-12 col-xs-12">
            <div class="copyright">
              Copyright &copy; Mark Point Multi Links {{ new Date().getFullYear() }}. All rights
              reserved.
            </div>
          </div>
          <div class="column col-md-6 col-sm-12 col-xs-12">
            <div class="created">Powered by: Hoolicon Technologies</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!--End Main Footer-->
</template>
