import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Импортируйте CSS-файл AOS

import styles from "./Block1.module.scss";
import Img from "../../assets/img/Eye/eye.png";
import ImgW from "../../assets/img/Eye/eyeWhite.png";

const Block1 = () => {
  React.useEffect(() => {
    AOS.init(); // Инициализация AOS
  }, []);

  return (
    <div className={styles.Block1} data-aos="fade-right">
      <div className={styles.Block1_Info}>
        <span>
          <strong className={styles.Block1_Info_Tee}>ВИДЕОМОНИТОРИНГ</strong>–
          многогранный исследовательский инструмент, позволяющий корректировать
          поведенческие алгоритмы сотрудников и с их помощью влиять на реакцию и
          решение покупателей. Что в свою очередь открывает возможность повысить
          уровень продаж и удовлетворённость клиентов.
        </span>
        <div className={styles.Block1_Info_Img}>
          <img src={ImgW} alt="eye" />
        </div>
        <span>
          <strong className={styles.Block1_Info_Tee}>ВИДЕОАНАЛИТИКА</strong>–
          наиболее оптимальный инструмент с точки зрения бюджета и количества
          обрабатываемых данных. С его помощью вы всегда будете в курсе
          актуальной информации на местах, а проработка алгоритмов персонального
          обслуживания успешно повысит конверсию посетителей в покупателей
        </span>
      </div>
      <div className={styles.Block1_Img}>
        <img src={Img} alt="eye" />
      </div>
    </div>
  );
};

export default Block1;
