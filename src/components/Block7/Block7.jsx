import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Импортируйте CSS-файл AOS

import styles from "./Block7.module.scss";

const Block7 = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.Block7}>
      <div className={styles.Block7_Price} data-aos="fade-right">
        <div className={styles.Block7_Price_Info}>
          <div className={styles.Block7_Price_Info_text}>
            <span>ВИДЕОМОНИТОРИНГ</span>
            –Стоимость 1 оценки c от 220 рублей
          </div>
          <div className={styles.Block7_Price_Info_text}>
            <span> ВИДЕОАНАЛИТИКА</span>
            –Стоимость 1 минуты – от 7 рублей
          </div>
          <div className={styles.Block7_Price_Info_text}>
            <span>УСТАНОВКА ВИДЕО КАМЕР</span>– от 8000 руб
          </div>
        </div>
        <button>Получить ценовое предложение</button>
      </div>
      <div className={styles.Block7_Info_Block} data-aos="fade-left">
        <div className={styles.Block7_Info_Block_Element}>
          <span>Что влияет на формирование цены:</span> <br /> Наличие камер
          видео наблюдения Если у Вас еще не установлены камеры Вы можете
          поручить эту задачу нам.
        </div>
        <div className={styles.Block7_Info_Block_Element}>
          <span>Количество локаций и оценок</span> <br />В зависимости от Ваших
          объемов и потребности мы сможем рассчитать для Вас наиболее
          оптимальное ценовое предложение
        </div>
        <div className={styles.Block7_Info_Block_Element}>
          <span>Длительность видео отрезков</span> <br />
          Это может быть как совсем короткий эпизод так и более длительные
          отрезки или не прерывный видео мониторинг на протяжении длительного
          времени
        </div>
        <div className={styles.Block7_Info_Block_Element}>
          <span> Спецификация сценария</span> <br />
          Требования к видео которое берем для анализа
        </div>
        <div className={styles.Block7_Info_Block_Element}>
          <span>Необходимость детализации аналитики и отчетности</span> <br />{" "}
          По итогам мы предлагаем отчетность с разным уровнем детализации
        </div>
      </div>
    </div>
  );
};

export default Block7;
