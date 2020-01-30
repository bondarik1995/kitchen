import React from "react";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <a href="" className="header-top-logo"><img src="images/logo.png" alt="" className="header-top-logo-img" />></a>
          <nav className="header-top-nav">
            <a href="" className="header-top-nav-link">Каталог</a>
            <a href="" className="header-top-nav-link">Товары</a>
            <a href="" className="header-top-nav-link">Акция</a>
            <a href="" className="header-top-nav-link">Контакты</a>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="header-content">
          <div className="header-content-title">
            <h1>Эксклюзивные <b>кухни</b></h1>
            <p>в Минске в наличии и под заказ</p>
            <button className="btn btn-default">Заказать кухню</button>
          </div>
          <div className="header-content-feedback">
            <form className="feedback-form">
              <p className="feedback-form-title">Оставьте заявку</p>
              <p>на <b>бесплатный</b> выезд дизайнера-замерщика</p>
              <input type="text" className="input feedback-form-input" placeholder="Телефон*" />
              <button type="submit" className="btn btn-default feedback-form-submit">Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
