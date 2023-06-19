import React from "react";

import styles from "./Block5.module.scss";

const Block5 = () => {
  const scrollToForm = () => {
    const form = document.querySelector("#bitrix-form");
    const topOffset = form.offsetTop - 91;
    window.scrollTo({ top: topOffset, behavior: "smooth" });
  };

  return (
    <div
      className={styles.Block5}
      data-aos="fade-right"
      data-aos-duration="1500"
      id="Block5"
    >
      <h1>ЗАДАЧИ, РЕШАЕМЫЕ С ПОМОЩЬЮ ВМР</h1>
      <div
        className={styles.Block5_List_Block}
        data-aos="fade-up"
        data-aos-duration="400"
      >
        <ul>
          <li>Подсчет трафика клиентов</li>
          <li>Контроль своевременности открытия/закрытия точек</li>
          <li>
            Контроль поведения сотрудников на точке: соблюдение трудовой
            дисциплины, дресс-кода
          </li>
          <li>
            Контроль внешнего вида точки, мерчандайзинга, размещения
            POS-материалов
          </li>
          <li>
            Фиксация случаев мошенничества, как со стороны сотрудников, так и
            клиентов
          </li>
          <li>Выявление проблемных зон и критических нарушений</li>
          <li>Проверка и отработка клиентских жалоб</li>
          <li>Контроль адаптации стажеров, выявление зон развития</li>
          <li>
            Повышение уровня профессиональных знаний и умений сотрудников
            (развитие персонала)
          </li>
          <li>
            Контроль отработки техники продаж, продвижения новых продуктов
          </li>
          <li>Анализ корреляции действий сотрудника и поведения клиента</li>
          <li>
            Анализ сегментации клиентов по гендерному, возрастному, клиентскому
            признаку (потенциальный или существующий клиент)
          </li>
          <li>Кассовая аналитика и видеоархив операций</li>
        </ul>
        <div className={styles.Block5_List_Block_Button}>
          <button onClick={scrollToForm}>Обсудить вашу задачу</button>
        </div>
      </div>
    </div>
  );
};

export default Block5;
