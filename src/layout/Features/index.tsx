import React from "react";
import c from "./styles.module.scss";
import { f1, f2, f3, f4, f5 } from "@/assets/images";

type Props = {};

const Features = (props: Props) => {
  return (
    <section className={c.section} id="features">
      <div className={c.container}>
        <h2 className={c.title}>Кому подходит Видеомониторинг</h2>

        <ul className={c.featuresGrid}>
          <li className={c.feature} data-aos="fade-up">
            <img src={f1} alt="feature" />
            <p>Тем, у кого уже есть камеры со звуком</p>
          </li>
          <li className={c.feature} data-aos="fade-up">
            <img src={f2} alt="feature" />
            <p>
              Тем, у кого уже есть камеры без звука (можно подключить микрофон)
            </p>
          </li>
          <li className={c.feature} data-aos="fade-up">
            <img src={f3} alt="feature" />
            <p>Тем, кто только приобретает камеры</p>
          </li>
          <li className={c.feature} data-aos="fade-up">
            <img src={f4} alt="feature" />
            <p>Тем, у кого нет проверок качества обслуживания</p>
          </li>
          <li className={c.feature} data-aos="fade-up">
            <img src={f5} alt="feature" />
            <p>
              Тем, у кого есть проверки качества обслуживания (в дополнение к
              имеющимся видам проверок)
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
