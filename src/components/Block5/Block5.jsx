import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Импортируйте CSS-файл AOS

import styles from "./Block5.module.scss";

const Block5 = () => {
  React.useEffect(() => {
    AOS.init(); // Инициализация AOS
  }, []);

  return (
    <div className={styles.Block5} data-aos="fade-right">
      <h1>ЗАДАЧИ, РЕШАЕМЫЕ С ПОМОЩЬЮ ВМР</h1>
      <div className={styles.Block5_List_Block} data-aos="fade-up">
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
          <button>ОБСУДИТЬ ВАШУ ЗАДАЧУ</button>
        </div>
      </div>
    </div>
  );
};

export default Block5;
