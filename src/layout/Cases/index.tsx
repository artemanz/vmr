import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { case1, case2, case3 } from "@/assets/images";

import c from "./styles.module.scss";
import "./swiper.style.scss";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

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
          <SwiperSlide className={c.slide}>
            <div className={c.case}>
              <div className={c.case_info}>
                <p className={c.case_title}>Оптика</p>
                <p className={c.case_subtitle}>
                  Контроль соблюдения операционной модели
                </p>
                <ul className={c.case_list}>
                  <li className={c.case_item}>
                    Контроль <span>фактического открытия</span> и закрытия
                    салона
                  </li>
                  <li className={c.case_item}>
                    Ежедневная <span>сверка товара с фиксацией</span> времени
                  </li>
                  <li className={c.case_item}>
                    Оценка <span>выполнения стандартов</span> обслуживания
                  </li>
                  <li className={c.case_item}>
                    Оценка <span>выполнения стандартов</span> поведения на
                    рабочем месте
                  </li>
                  <li className={c.case_item}>
                    <span>Мониторинг выхода сотрудников</span> в рабочее время в
                    сравнении с данными биометрических устройств
                  </li>
                  <li className={c.case_item}>
                    <span>Подсчет посетителей</span>, проходящих диагностику
                  </li>
                </ul>
              </div>
              <img src={case1} alt="Case image" className={c.case_image} />
            </div>
          </SwiperSlide>
          <SwiperSlide className={c.slide}>
            <div className={c.case}>
              <div className={c.case_info}>
                <p className={c.case_title}>ТЕЛЕКОММУНИКАЦИИ</p>
                <p className={c.case_subtitle}>
                  Обеспечение качества сервиса в Розничной сети продаж
                </p>
                <ul className={c.case_list}>
                  <li className={c.case_item}>
                    Оценка эффективности{" "}
                    <span>модели поведения сотрудников</span> Розничной сети для
                    развития клиентского сервиса
                  </li>
                  <li className={c.case_item}>
                    Предоставление <span>регулярной аналитики</span> по качеству
                    сервиса
                  </li>
                  <li className={c.case_item}>
                    Выявление проблемных зон и управление{" "}
                    <span>качеством сервиса</span> в торговых точках
                  </li>
                  <li className={c.case_item}>
                    <span>Совершенствование</span> клиентских процедур (развитие
                    клиентского сервиса)
                  </li>
                  <li className={c.case_item}>
                    Повышение <span>уровня профессиональных</span> знаний и
                    умений сотрудников
                  </li>
                  <li className={c.case_item}>
                    Выявление <span>критических нарушений</span> стандартов
                    сервиса и законодательства
                  </li>
                  <li className={c.case_item}>
                    Проверка по чек-листу консультации, показывающая{" "}
                    <span>реальные навыки и умения</span> сотрудника
                  </li>
                </ul>
              </div>
              <img src={case2} alt="Case image" className={c.case_image} />
            </div>
          </SwiperSlide>
          <SwiperSlide className={c.slide}>
            <div className={c.case}>
              <div className={c.case_info}>
                <p className={c.case_title}>АЗС</p>
                <p className={c.case_subtitle}>
                  Как увеличить доп. продажи и улучшить качество выполнения
                  стандартов?Как увеличить доп. продажи и улучшить качество
                  выполнения стандартов?
                </p>
                <ul className={c.case_list}>
                  <li className={c.case_item}>
                    Оценка эффективности{" "}
                    <span>модели поведения сотрудников</span>
                  </li>
                  <li className={c.case_item}>
                    Ежедневная сверка товара с фиксацией времени
                  </li>
                  <li className={c.case_item}>
                    Оценка выполнения <span>стандартов обслуживания</span>
                  </li>
                  <li className={c.case_item}>
                    Оценка выполнения <span>стандартов поведения</span> на
                    рабочем месте
                  </li>
                  <li className={c.case_item}>
                    Мониторинг выхода сотрудников в рабочее время в сравнении с
                    данными <span>биометрических устройств</span>
                  </li>
                  <li className={c.case_item}>
                    Подсчет посетителей, проходящих <span>диагностику</span>
                  </li>
                  <li className={c.case_item}>
                    Расчет процента реальных покупателей (заказов)
                  </li>
                </ul>
              </div>
              <img src={case3} alt="Case image" className={c.case_image} />
            </div>
          </SwiperSlide>
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
