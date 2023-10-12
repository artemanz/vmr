// @ts-nocheck
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import c from "./styles.module.scss";
import "./swiper.style.scss";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { cases } from "./Cases";

type Props = {};

const Cases = (props: Props) => {
  return (
    <section className={c.section} id="cases">
      <div className={c.container}>
        <h2 className={c.title}>Наши кейсы</h2>
        <Swiper
          className={c.slider}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          pagination={{
            el: "[data-selector=casesSliderPagination]",
            clickable: true,
          }}
          navigation={{
            nextEl: "[data-selector=casesSliderNext]",
            prevEl: "[data-selector=casesSliderPrev]",
          }}
          data-aos="fade-up"
        >
          {cases.map((Case) => (
            <SwiperSlide className={c.slide}>
              <Case.element />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={c.slider_nav}>
          <button
            data-selector="casesSliderPrev"
            className={c.slider_nav_button}
          >
            <HiArrowNarrowLeft size={32} />
          </button>
          <div
            className={c.slider_nav_pagination}
            data-selector="casesSliderPagination"
          ></div>
          <button
            data-selector="casesSliderNext"
            className={c.slider_nav_button}
          >
            <HiArrowNarrowRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cases;
