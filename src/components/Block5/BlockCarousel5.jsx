import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import "./BlockCarousel.scss";
const responsive = {
  0: { items: 1 },
};

const items = [
  <div className="item" data-value="1">
    <ul>
      <li>Подсчет трафика клиентов</li>
      <li>Контроль своевременности открытия/закрытия точек</li>
      <li>
        Контроль поведения сотрудников на точке: соблюдение трудовой дисциплины,
        дресс-кода
      </li>
      <li>
        Контроль внешнего вида точки, мерчандайзинга, размещения POS-материалов
      </li>
      <li>
        Фиксация случаев мошенничества, как со стороны сотрудников, так и
        клиентов
      </li>
    </ul>
  </div>,
  <div className="item" data-value="2">
    <ul>
      <li>Выявление проблемных зон и критических нарушений</li>
      <li>Проверка и отработка клиентских жалоб</li>
      <li>Контроль адаптации стажеров, выявление зон развития</li>
      <li>
      Повышение уровня профессиональных знаний и умений сотрудников (развитие
      персонала)
    </li>
    </ul>
   
  </div>,
  <div className="item" data-value="3">
    <ul>
      <li>Контроль отработки техники продаж, продвижения новых продуктов</li>
      <li>Анализ корреляции действий сотрудника и поведения клиента</li>
      <li>
        Анализ сегментации клиентов по гендерному, возрастному, клиентскому
        признаку (потенциальный или существующий клиент)
      </li>
      <li>Кассовая аналитика и видеоархив операций</li>
    </ul>
  </div>,
];
const BlockCarousel5 = () => {
  return (
    <div>
      <AliceCarousel
        disableButtonsControls=" false"
        infinite="true"
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
};

export default BlockCarousel5;
