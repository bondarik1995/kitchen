import React, { Component } from "react";
import cx from "classnames";

import { FEETBACK_TITLE, FEETBACK_DESCRIPTION } from "constants/Feetback/";

import styles from "./Feetback.module.scss";

class Feetback extends Component {
  renderForm = () => (
    <form className={cx(styles["section-feetback-form"])}>
      <input type="text" className={cx(styles["input"])} placeholder="Имя*" />
      <input
        type="text"
        className={cx(styles["input"])}
        placeholder="Телефон*"
      />
      <button type="submit" className={cx(styles["btn"])}>
        Узнать стоимость
      </button>
    </form>
  );

  render() {
    return (
      <section className={cx(styles["section-feetback"])}>
        <div className={cx(styles["section-feetback-title"])}>
          <h2>{FEETBACK_TITLE}</h2>
          <p>{FEETBACK_DESCRIPTION}</p>
        </div>
        {this.renderForm()}
      </section>
    );
  }
}

export default Feetback;
