import c from "./styles.module.scss";
import { HiMenu } from "react-icons/hi";
import { logoWhite } from "@images";
import { Link, useLocation } from "react-router-dom";
import { AuthProvider } from "@/firebase";
import { useContext } from "react";

type Props = {
  setMobileMenu: Function;
};

const Header = ({ setMobileMenu }: Props) => {
  const location = useLocation();
  const { user } = useContext(AuthProvider);

  return (
    <header className={c.header}>
      <div className={c.container}>
        <Link to="/" className={c.logo}>
          <img src={logoWhite} alt="Logo" />
          <p>
            Видео
            <br /> мониторинг
          </p>
        </Link>

        {location.pathname == "/blog" ? (
          <nav className={c.nav}>
            <Link to={"/"}>На главную</Link>
            <Link to={"/login"}>{user ? "Выйти" : "Войти"}</Link>
          </nav>
        ) : (
          <nav className={c.nav}>
            <a href="#features">Для кого</a>
            <a href="#tasks">Наша задача</a>
            <a href="#prices">Цены</a>
            <a href="#cases">Кейсы</a>
            <a href="#form">Оставить заявку</a>
            <Link to="/blog">Блог</Link>
          </nav>
        )}

        <div className={c.contacts}>
          <a href="mailto:sales@servizoria.ru">sales@servizoria.ru</a>
          <a href="tel:74952680244">+7 (495) 268 02 44</a>
        </div>

        <button onClick={() => setMobileMenu(true)} className={c.mobileMenu}>
          <HiMenu size={32} />
        </button>
      </div>
    </header>
  );
};

export default Header;
