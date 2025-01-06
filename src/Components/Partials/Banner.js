import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <section class="banner_part">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <div class="banner_slider">
              <Swiper
                pagination={{
                  type: "fraction",
                  el: ".custom-pagination",
                  clickable: true,
                }}
                navigation={{
                  true: true,
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div class="single_banner_slider">
                    <div class="row">
                      <div class="col-lg-5 col-md-8">
                        <div class="banner_text">
                          <div class="banner_text_iner">
                            <h1>Wood & Cloth Sofa</h1>
                            <p>
                              Incididunt ut labore et dolore magna aliqua quis
                              ipsum suspendisse ultrices gravida. Risus commodo
                              viverra
                            </p>
                            <a href="#" class="btn_2">
                              buy now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="banner_img d-none d-lg-block">
                        <img src="img/banner_img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="single_banner_slider">
                    <div class="row">
                      <div class="col-lg-5 col-md-8">
                        <div class="banner_text">
                          <div class="banner_text_iner">
                            <h1>Cloth & Wood Sofa</h1>
                            <p>
                              Incididunt ut labore et dolore magna aliqua quis
                              ipsum suspendisse ultrices gravida. Risus commodo
                              viverra
                            </p>
                            <a href="#" class="btn_2">
                              buy now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="banner_img d-none d-lg-block">
                        <img src="img/banner_img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div class="single_banner_slider">
                    <div class="row">
                      <div class="col-lg-5 col-md-8">
                        <div class="banner_text">
                          <div class="banner_text_iner">
                            <h1>Wood & Cloth Sofa</h1>
                            <p>
                              Incididunt ut labore et dolore magna aliqua quis
                              ipsum suspendisse ultrices gravida. Risus commodo
                              viverra
                            </p>
                            <a href="#" class="btn_2">
                              buy now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="banner_img d-none d-lg-block">
                        <img src="img/banner_img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div class="single_banner_slider">
                    <div class="row">
                      <div class="col-lg-5 col-md-8">
                        <div class="banner_text">
                          <div class="banner_text_iner">
                            <h1>Cloth & Wood Sofa</h1>
                            <p>
                              Incididunt ut labore et dolore magna aliqua quis
                              ipsum suspendisse ultrices gravida. Risus commodo
                              viverra
                            </p>
                            <a href="#" class="btn_2">
                              buy now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="banner_img d-none d-lg-block">
                        <img src="img/banner_img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            {/* Custom Navigation Buttons */}
            <div className="custom-navigation">
              <button className="custom-prev">Prev</button>
              <button className="custom-next">Next</button>
            </div>

            {/* Custom Pagination */}
            <div className="custom-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
