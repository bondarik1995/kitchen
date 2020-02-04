import React from "react";
import cx from "classnames";

import styles from "./Footer.module.scss";
import stylesApp from "styles/_base.scss";

function Footer() {
  return (
    <footer>
      <div className={cx(stylesApp["container"])}>
        <div className={cx(styles["footer"])}>
          <div className={cx(styles["footer-item"])}>
            <p>2020 Все права защищены</p>
          </div>
          <div className={cx(styles["footer-item"])}>
            <p>Разработка сайта</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
