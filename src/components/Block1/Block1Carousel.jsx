import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

import "./Block1Carousel.scss";
const responsive = {
  0: { items: 1 },
};

const Block1Carousel = () => {
  const items3 = [
    <div className="item3" data-value="1">
      <span>ВИДЕОМОНИТОРИНГ</span> - многогранный исследовательский инструмент,
      позволяющий корректировать поведенческие алгоритмы сотрудников и с их
      помощью влиять на реакцию и решение покупателей. Что в свою очередь
      открывает возможность повысить уровень продаж и удовлетворённость
      клиентов.
    </div>,
    <div className="item3" data-value="2">
      <span>ВИДЕОАНАЛИТИКА</span> - наиболее оптимальный инструмент с точки
      зрения бюджета и количества обрабатываемых данных. С его помощью вы всегда
      будете в курсе актуальной информации на местах, а проработка алгоритмов
      персонального обслуживания успешно повысит конверсию посетителей в
      покупателей.
    </div>,
  ];

  return (
    <div>
      <AliceCarousel
        disableButtonsControls=" false"
        infinite="true"
        mouseTracking
        items={items3}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
};

export default Block1Carousel;
