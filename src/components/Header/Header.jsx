import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import logo from "images/logo.png";

import styles from "./Header.module.scss";
import stylesApp from "styles/_base.scss";

function Header() {
  return (
    <header className={cx(styles["header"])}>
      <div className={cx(styles["header-top"])}>
        <div className={cx(stylesApp["container"])}>
          <Link to="/" className={cx(styles["header-top-logo"])}>
            <img
              src={logo}
              alt=""
              className={cx(styles["header-top-logo-img"])}
            />
          </Link>
          <nav className={cx(styles["header-top-nav"])}>
            <Link to="/" className={cx(styles["header-top-nav-link"])}>
              Главная
            </Link>
            <Link to="/catalog" className={cx(styles["header-top-nav-link"])}>
              Каталог
            </Link>
            <Link to="/reviews" className={cx(styles["header-top-nav-link"])}>
              Отзывы
            </Link>
            <Link to="/about" className={cx(styles["header-top-nav-link"])}>
              О нас
            </Link>
          </nav>
        </div>
      </div>
      <div className={cx(stylesApp["container"])}>
        <div className={cx(styles["header-content"])}>
          <div className={cx(styles["header-content-title"])}>
            <h1>
              Эксклюзивные <b>кухни</b>
            </h1>
            <p>в Минске в наличии и под заказ</p>
            <button className={cx(styles["header-content-order-btn"])}>
              Заказать кухню
            </button>
          </div>
          <div className={cx(styles["header-content-feedback"])}>
            <form className={cx(styles["feedback-form"])}>
              <p className={cx(styles["feedback-form-title"])}>
                Оставьте заявку
              </p>
              <p>
                на <b>бесплатный</b> выезд дизайнера-замерщика
              </p>
              <input
                type="text"
                className={cx(styles["feedback-form-input"])}
                placeholder="Телефон*"
              />
              <button
                type="submit"
                className={cx(styles["feedback-form-submit"])}
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
