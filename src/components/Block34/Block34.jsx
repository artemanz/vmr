import React from "react";
import styles from "./Block34.module.scss";
import Img1 from "../../assets/img/Block34/image1.png";
import Img2 from "../../assets/img/Block34/image2.png";
import Img3 from "../../assets/img/Block34/image3.png";
import Img4 from "../../assets/img/Block34/image4.png";
import Img5 from "../../assets/img/Block34/image5.png";
const Block34 = () => {
  return (
    <div className={styles.Block34}>
      <h1>КОМУ ПОДХОДИТ ВМР</h1>

      <div className={styles.Block34_Info}>
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
    </div>
  );
};

export default Block34;
