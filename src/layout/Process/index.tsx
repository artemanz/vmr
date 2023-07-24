import React from "react";
import c from "./styles.module.scss";
import { p1, p2, p3, p4, p5, p6 } from "@/assets/images";

type Props = {};

const Process = (props: Props) => {
  return (
    <section className={c.section} id="#process">
      <div className={c.container}>
        <h2 className={c.title}>ПРОЦЕСС ИСПОЛЬЗОВАНИЯ</h2>

        <ul className={c.processGrid}>
          <li className={c.process} data-aos="fade-up">
            <img src={p1} alt="process" />
            <p>Непрерывный мониторинг локаций. Заполнение анкет по чек-листу</p>
          </li>
          <li className={c.process} data-aos="fade-up">
            <img src={p2} alt="process" />
            <p>Повторный мониторинг для отслеживания динамики</p>
          </li>
          <li className={c.process} data-aos="fade-up">
            <img src={p3} alt="process" />
            <p>Обсуждение промежуточных результатов мониторинга</p>
          </li>
          <li className={c.process} data-aos="fade-up">
            <img src={p4} alt="process" />
            <p>Проработка сотрудниками заполненных анкет</p>
          </li>
          <li className={c.process} data-aos="fade-up">
            <img src={p5} alt="process" />
            <p>Презентация результатов мониторинга сотрудникам</p>
          </li>
          <li className={c.process} data-aos="fade-up">
            <img src={p6} alt="process" />
            <p>Определение проседающих стандартов и зоны развития</p>
          </li>
        </ul>

        <a href="#form" className={c.button}>
          Заказать бесплатный пилотный проект
        </a>
      </div>
    </section>
  );
};

export default Process;
