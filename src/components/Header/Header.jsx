import React, { Component } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import {
  TITLE,
  SUBTITLE,
  ORDER_BUTTON,
  FORM_TITLE,
  FORM_DESCRIPTION
} from "constants/Header/";
import { SITE_NAVIGATION } from "constants/Navigation";

import logo from "images/logo.png";

import styles from "./Header.module.scss";
import stylesApp from "styles/_base.scss";

class Header extends Component {
  state = {};

  componentDidMount() {
    this.setState({ navigation: SITE_NAVIGATION });
  }

  renderNavItem = item => {
    const { id, anchor, link } = item;

    return (
      <Link
        to={link}
        className={cx(
          styles["header-top-nav-link"]
          // style["active"]
        )}
        key={id}
      >
        {anchor}
      </Link>
    );
  };

  render() {
    const { navigation } = this.state;

    return (
      <header className={cx(styles["header"], stylesApp["header"])}>
        <div className={cx(styles["header-top"])}>
          <div className={cx(stylesApp["container"])}>
            <Link to="/" className={cx(styles["header-top-logo"])}>
              <img
                src={logo}
                alt=""
                className={cx(styles["header-top-logo-img"])}
              />
            </Link>
            {navigation && (
              <nav className={cx(styles["header-top-nav"])}>
                {navigation.map(item => this.renderNavItem(item))}
              </nav>
            )}
          </div>
        </div>
        <div className={cx(stylesApp["container"])}>
          <div className={cx(styles["header-content"])}>
            <div className={cx(styles["header-content-title"])}>
              <h1>{TITLE}</h1>
              <p>{SUBTITLE}</p>
              <button className={cx(styles["header-content-order-btn"])}>
                {ORDER_BUTTON}
              </button>
            </div>
            <div className={cx(styles["header-content-feedback"])}>
              <form className={cx(styles["feedback-form"])}>
                <p className={cx(styles["feedback-form-title"])}>
                  {FORM_TITLE}
                </p>
                <p>{FORM_DESCRIPTION}</p>
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
}

export default Header;
