import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MySwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img
          src="/image/blogImage.webp"
          alt="Blog"
          height="550px"
          width="100%"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/image/blogImage1.jpeg"
          alt="Blog"
          height="550px"
          width="100%"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/image/BlogTeddy.jpeg"
          alt="Blog"
          height="550px"
          width="100%"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/image/blogpic.webp" alt="Blog" height="550px" width="100%" />
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
