import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <Link to="/" className="header-top-logo">
            <img src={logo} alt="" className="header-top-logo-img" />
          </Link>
          <nav className="header-top-nav">
            <Link to="/" className="header-top-nav-link">
              Главная
            </Link>
            <Link to="/catalog" className="header-top-nav-link">
              Каталог
            </Link>
            <Link to="/reviews" className="header-top-nav-link">
              Отзывы
            </Link>
            <Link to="/about" className="header-top-nav-link">
              О нас
            </Link>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="header-content">
          <div className="header-content-title">
            <h1>
              Эксклюзивные <b>кухни</b>
            </h1>
            <p>в Минске в наличии и под заказ</p>
            <button className="btn btn-default">Заказать кухню</button>
          </div>
          <div className="header-content-feedback">
            <form className="feedback-form">
              <p className="feedback-form-title">Оставьте заявку</p>
              <p>
                на <b>бесплатный</b> выезд дизайнера-замерщика
              </p>
              <input
                type="text"
                className="input feedback-form-input"
                placeholder="Телефон*"
              />
              <button
                type="submit"
                className="btn btn-default feedback-form-submit"
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
