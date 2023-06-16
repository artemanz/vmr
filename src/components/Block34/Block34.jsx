import React from "react";

import styles from "./Block34.module.scss";
import Img1 from "../../assets/img/Block34/image1.png";
import Img2 from "../../assets/img/Block34/image2.png";
import Img3 from "../../assets/img/Block34/image3.png";
import Img4 from "../../assets/img/Block34/image4.png";
import Img5 from "../../assets/img/Block34/image5.png";

const Block34 = () => {
  const scrollToForm = () => {
    const form = document.querySelector("#bitrix-form");
    const topOffset = form.offsetTop - 91;
    window.scrollTo({ top: topOffset, behavior: "smooth" });
  };

  return (
    <div
      className={styles.Block34}
      data-aos="fade-right"
      data-aos-duration="1500"
      id="Block34"
    >
      <h1>КОМУ ПОДХОДИТ ВМР</h1>
      <div
        className={styles.Block34_Info}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className={styles.Block34_Info_Element}>
          <img src={Img1} alt="Img1" />
          <span>Тем, у кого уже есть камеры со звуком</span>
        </div>
        <div className={styles.Block34_Info_Element}>
          <img src={Img2} alt="Img2" />
          <span>
            Тем, у кого уже есть камеры без звука (можно подключить микрофон)
          </span>
        </div>
        <div className={styles.Block34_Info_Element}>
          <img src={Img3} alt="Img3" />
          <span>Тем, кто только приобретает камеры</span>
        </div>
        <div className={styles.Block34_Info_Element}>
          <img src={Img4} alt="Img4" />
          <span>Тем, у кого нет проверок качества обслуживания</span>
        </div>
        <div className={styles.Block34_Info_Element}>
          <img src={Img5} alt="Img5" />
          <span>
            Тем, у кого есть проверки качества обслуживания (в дополнение к
            имеющимся видам проверок)
          </span>
        </div>
      </div>
      <div className={styles.Block34_button}>
        <button onClick={scrollToForm}>Задать вопрос</button>
      </div>
    </div>
  );
};

export default Block34;
