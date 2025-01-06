import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import product1 from "../../Assets/images/product/product_1.png";
import product2 from "../../Assets/images/product/product_2.png";
import product3 from "../../Assets/images/product/product_3.png";
import product4 from "../../Assets/images/product/product_4.png";
import product5 from "../../Assets/images/product/product_5.png";
import product6 from "../../Assets/images/product/product_6.png";
import product7 from "../../Assets/images/product/product_7.png";
import product8 from "../../Assets/images/product/product_8.png";

import { Navigation } from "swiper/modules";
const ProductList = () => {
  return (
    <section class="product_list section_padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="section_tittle text-center">
              <h2>
                awesome <span>shop</span>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="product_list_slider owl-carousel">
              <div class="single_product_list_slider">
                <div class="row align-items-center justify-content-between">
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={{
                        true: true,
                        nextEl: ".product-next",
                        prevEl: ".product-prev",
                      }}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div class="single_product_item">
                        <img src={product1} alt="" />
                        <div class="single_product_text">
                          <h4>Quartz Belt Watch</h4>
                          <h3>$150.00</h3>
                          <a href="#" class="add_cart">
                            + add to cart<i class="ti-heart"></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="single_product_item">
                        <img src={product2} alt="" />
                        <div class="single_product_text">
                          <h4>Quartz Belt Watch</h4>
                          <h3>$150.00</h3>
                          <a href="#" class="add_cart">
                            + add to cart<i class="ti-heart"></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="single_product_item">
                        <img src={product3} alt="" />
                        <div class="single_product_text">
                          <h4>Quartz Belt Watch</h4>
                          <h3>$150.00</h3>
                          <a href="#" class="add_cart">
                            + add to cart<i class="ti-heart"></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="single_product_item">
                        <img src={product4} alt="" />
                        <div class="single_product_text">
                          <h4>Quartz Belt Watch</h4>
                          <h3>$150.00</h3>
                          <a href="#" class="add_cart">
                            + add to cart<i class="ti-heart"></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="single_product_item">
                        <img src={product5} alt="" />
                        <div class="single_product_text">
                          <h4>Quartz Belt Watch</h4>
                          <h3>$150.00</h3>
                          <a href="#" class="add_cart">
                            + add to cart<i class="ti-heart"></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="single_product_item">
                        <img src={product6} alt="" />
                        <div class="single_product_text">
                          <h4>Quartz Belt Watch</h4>
                          <h3>$150.00</h3>
                          <a href="#" class="add_cart">
                            + add to cart<i class="ti-heart"></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="single_product_item">
                        <img src={product7} alt="" />
                        <div class="single_product_text">
                          <h4>Quartz Belt Watch</h4>
                          <h3>$150.00</h3>
                          <a href="#" class="add_cart">
                            + add to cart<i class="ti-heart"></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="single_product_item">
                        <img src={product8} alt="" />
                        <div class="single_product_text">
                          <h4>Quartz Belt Watch</h4>
                          <h3>$150.00</h3>
                          <a href="#" class="add_cart">
                            + add to cart<i class="ti-heart"></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div class="single_product_list_slider">
                <div class="row align-items-center justify-content-between">
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div class="single_product_item">
                        <img src={product1} alt="" />
                        <div class="single_product_text">
                          <h4>Quartz Belt Watch</h4>
                          <h3>$150.00</h3>
                          <a href="#" class="add_cart">
                            + add to cart<i class="ti-heart"></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="single_product_item">
                        <img src={product2} alt="" />
                        <div class="single_product_text">
                          <h4>Quartz Belt Watch</h4>
                          <h3>$150.00</h3>
                          <a href="#" class="add_cart">
                            + add to cart<i class="ti-heart"></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="single_product_item">
                        <img src={product3} alt="" />
                        <div class="single_product_text">
                          <h4>Quartz Belt Watch</h4>
                          <h3>$150.00</h3>
                          <a href="#" class="add_cart">
                            + add to cart<i class="ti-heart"></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="single_product_item">
                        <img src={product4} alt="" />
                        <div class="single_product_text">
                          <h4>Quartz Belt Watch</h4>
                          <h3>$150.00</h3>
                          <a href="#" class="add_cart">
                            + add to cart<i class="ti-heart"></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="single_product_item">
                        <img src={product5} alt="" />
                        <div class="single_product_text">
                          <h4>Quartz Belt Watch</h4>
                          <h3>$150.00</h3>
                          <a href="#" class="add_cart">
                            + add to cart<i class="ti-heart"></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div class="single_product_item">
                        <img src={product6} alt="" />
                        <div class="single_product_text">
                          <h4>Quartz Belt Watch</h4>
                          <h3>$150.00</h3>
                          <a href="#" class="add_cart">
                            + add to cart<i class="ti-heart"></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="single_product_item">
                        <img src={product7} alt="" />
                        <div class="single_product_text">
                          <h4>Quartz Belt Watch</h4>
                          <h3>$150.00</h3>
                          <a href="#" class="add_cart">
                            + add to cart<i class="ti-heart"></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div class="single_product_item">
                        <img src={product8} alt="" />
                        <div class="single_product_text">
                          <h4>Quartz Belt Watch</h4>
                          <h3>$150.00</h3>
                          <a href="#" class="add_cart">
                            + add to cart<i class="ti-heart"></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
