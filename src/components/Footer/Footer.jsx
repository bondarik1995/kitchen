import React, { Component } from "react";
import cx from "classnames";

import { COPYRIGHT, DEVELOPERS } from "constants/Footer/";

import styles from "./Footer.module.scss";
import stylesApp from "styles/_base.scss";

class Footer extends Component {
  state = {};

  componentDidMount() {
    this.setState({ currentYear: new Date().getFullYear() });
  }

  render() {
    const { currentYear } = this.state;

    return (
      <footer>
        <div className={cx(stylesApp["container"])}>
          <div className={cx(styles["footer"])}>
            <div className={cx(styles["footer-item"])}>
              <p>
                {currentYear} {COPYRIGHT}
              </p>
            </div>
            <div className={cx(styles["footer-item"])}>
              <p>{DEVELOPERS}</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
