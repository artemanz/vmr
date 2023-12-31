import c from "./styles.module.scss";
import { Logo } from "@/components";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section>
      <div className={c.container}>
        <div className={c.offer}>
          <div className={c.titleWrapper}>
            <Logo />
            <h1 className={c.title}>Видеомониторинг</h1>
          </div>
          <p className={c.subtitle}>Глаз, который не устаёт следить</p>

          <div className={c.cards}>
            <p className={c.card} data-aos="fade-right">
              <span>ВИДЕОМОНИТОРИНГ</span>
              многогранный исследовательский инструмент, позволяющий
              корректировать поведенческие алгоритмы сотрудников и с их помощью
              влиять на реакцию и решение покупателей.
            </p>
            <p className={c.card} data-aos="fade-left">
              <span>ВИДЕОАНАЛИТИКА</span>c его помощью вы всегда будете в курсе
              актуальной информации на местах, а проработка алгоритмов
              персонального обслуживания успешно повысит конверсию посетителей в
              покупателей.
            </p>
          </div>

          <a href="#form" className={c.button}>
            Заказать звонок
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
