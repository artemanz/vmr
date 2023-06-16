import React from "react";

import styles from "./Block8.module.scss";
import Img from "../../assets/img/Block8/Picture1.png";
import Img2 from "../../assets/img/Block8/Picture2.png";
import Img3 from "../../assets/img/Block8/Picture3.png";
import Img4 from "../../assets/img/Block8/Picture4.png";
import Img5 from "../../assets/img/Block8/Picture5.png";
import Img6 from "../../assets/img/Block8/Picture6.png";
import Img7 from "../../assets/img/Block8/Picture7.png";

const Block8 = () => {
  const scrollToForm = () => {
    const form = document.querySelector("#bitrix-form");
    const topOffset = form.offsetTop - 91;
    window.scrollTo({ top: topOffset, behavior: "smooth" });
  };

  return (
    <div className={styles.Block8} data-aos="fade-up" data-aos-duration="1500">
      <div className={styles.Block8_H1}>
        <h1>КЕЙС ОПТИКА</h1>
        <span>Контроль соблюдения операционной модели</span>
      </div>
      <div className={styles.Block8_Info}>
        <div
          className={styles.Block8_Info_Item}
          data-aos="fade-up-left"
          data-aos-duration="1500"
        >
          <div className={styles.Block8_Info_Item_elements}>
            <div className={styles.Block8_Info_Item_elements_img}>
              <img src={Img} alt="Picture1" />
            </div>

            <span>
              Контроль <strong>фактического открытия </strong> и закрытия салона
            </span>
          </div>
          <div className={styles.Block8_Info_Item_elements}>
            <div className={styles.Block8_Info_Item_elements_img}>
              {" "}
              <img src={Img2} alt="Picture2" />
            </div>

            <span>
              Ежедневная <strong>сверка товара с фиксацией</strong> времени
            </span>
          </div>
          <div className={styles.Block8_Info_Item_elements}>
            <div className={styles.Block8_Info_Item_elements_img}>
              {" "}
              <img src={Img3} alt="Picture3" />
            </div>

            <span>
              Оценка <strong>выполнения стандартов</strong> обслуживания
            </span>
          </div>
        </div>

        {/* // Left */}
        <div className={styles.Block8_Info_Item_2} data-aos="fade-up-right">
          <div className={styles.Block8_Info_Item_2_elements_2}>
            <div className={styles.Block8_Info_Item_2_elements_2_img}>
              <img src={Img4} alt="Picture4" />
            </div>
            <span>
              Оценка <strong>выполнения стандартов</strong> поведения на рабочем
              месте
            </span>
          </div>
          <div className={styles.Block8_Info_Item_2_elements_2}>
            <div className={styles.Block8_Info_Item_2_elements_2_img}>
              <img src={Img5} alt="Picture5" />
            </div>

            <span>
              <strong>Мониторинг выхода сотрудников</strong>в рабочее время в
              сравнении с данными биометрических устройств
            </span>
          </div>
          <div className={styles.Block8_Info_Item_2_elements_2}>
            <div className={styles.Block8_Info_Item_2_elements_2_img}>
              <img src={Img6} alt="Picture6" />
            </div>

            <span>
              <strong> Подсчет посетителей</strong>, проходящих диагностику
            </span>
          </div>
          <div className={styles.Block8_Info_Item_2_elements_2}>
            <div className={styles.Block8_Info_Item_2_elements_2_img}>
              <img src={Img7} alt="Picture7" />
            </div>
            <span>Расчет процента реальных покупателей (заказов)</span>
          </div>
        </div>
      </div>
      <div className={styles.Block8_button}>
        <button onClick={scrollToForm}>Задать вопрос</button>
      </div>
    </div>
  );
};

export default Block8;
