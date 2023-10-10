import c from "./styles.module.scss";

type Props = {};

const Prices = (props: Props) => {
  return (
    <section className={c.section} id="prices">
      <div className={c.container}>
        <h2 className={c.title}>Цены</h2>

        <div className={c.pricesContainer} data-aos="fade-right">
          <ul className={c.prices}>
            <li className={c.price}>
              <p className={c.price_title}>ВИДЕОМОНИТОРИНГ</p>
              <p className={c.price_info}>
                Стоимость 1 оценки <br /> <span>от 220 рублей</span>
              </p>
            </li>
            <li className={c.price}>
              <p className={c.price_title}>АНАЛИТИЧЕСКИЙ ОТЧЕТ</p>
              <p className={c.price_info}>
                Стоимость
                <br /> <span>от 15000 рублей</span>
              </p>
            </li>
            <li className={c.price}>
              <p className={c.price_title}>УСТАНОВКА ВИДЕО КАМЕР</p>
              <p className={c.price_info}>
                Стоимость
                <br />
                <span>от 8000 рублей</span>
              </p>
            </li>
          </ul>

          <div className={c.priceInfluence} data-aos="fade-left">
            <p className={c.priceInfluence_title}>
              Что влияет на формирование цены:
            </p>

            <ul className={c.priceInfluence_list}>
              <li className={c.priceInfluence_item}>
                <p className={c.priceInfluence_item_title}>
                  Наличие камер видеонаблюдения
                </p>
                <p className={c.priceInfluence_item_info}>
                  Если у Вас еще не установлены камеры Вы можете поручить эту
                  задачу нам.
                </p>
              </li>
              <li className={c.priceInfluence_item}>
                <p className={c.priceInfluence_item_title}>
                  Количество локаций и оценок
                </p>
                <p className={c.priceInfluence_item_info}>
                  В зависимости от Ваших объемов и потребности мы сможем
                  рассчитать для Вас наиболее оптимальное ценовое предложение
                </p>
              </li>
              <li className={c.priceInfluence_item}>
                <p className={c.priceInfluence_item_title}>
                  Длительность видео отрезков
                </p>
                <p className={c.priceInfluence_item_info}>
                  Это может быть как совсем короткий эпизод так и более
                  длительные отрезки или не прерывный видео мониторинг на
                  протяжении длительного времени
                </p>
              </li>
              <li className={c.priceInfluence_item}>
                <p className={c.priceInfluence_item_title}>
                  Спецификация сценария
                </p>
                <p className={c.priceInfluence_item_info}>
                  Требования к видео которое берем для анализа
                </p>
              </li>
              <li className={c.priceInfluence_item}>
                <p className={c.priceInfluence_item_title}>
                  Необходимость детализации аналитики и отчетности
                </p>
                <p className={c.priceInfluence_item_info}>
                  По итогам мы предлагаем отчетность с разным уровнем
                  детализации
                </p>
              </li>
            </ul>
          </div>
        </div>

        <a className={c.button} href="#form">
          Получить ценовое предложение
        </a>
      </div>
    </section>
  );
};

export default Prices;
