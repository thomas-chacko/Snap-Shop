import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import slide1 from "../assets/banner1.jpg";
import slide2 from "../assets/banner2.jpg";
import slide3 from "../assets/banner3.jpg";
import slide4 from "../assets/banner4.jpg";

const Slide = () => {
  return (
    <div className="max-w-[1400px] mx-auto mt-10">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-[210px] my-5 px-2"
      >
        <SwiperSlide>
          <img src={slide1} className="w-full h-full" alt="no!" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} className="w-full h-full" alt="no!" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} className="w-full h-full" alt="no!" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} className="w-full h-full" alt="no!" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Slide;
