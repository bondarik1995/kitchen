import React from "react";
import cx from "classnames";

import styles from "./Discount.module.scss";

function Discount() {
  return (
    <section className={cx(styles["section-discount"])}>
      <div className={cx(styles["section-discount-text"])}>
        <p className={cx(styles["section-discount-top-text"])}>
          Наши цены <b>МАКСИМАЛЬНО</b> разумны,
          <br />
          но Вы сможете и <b>СЭКОНОМИТЬ</b>!
        </p>

        <p>только до конца месяца</p>
        <p className={cx(styles["section-discount-attention"])}>
          <b>АКЦИЯ!</b>
        </p>
      </div>

      <div className={cx(styles["discount-feetback"])}>
        <p>Закажите кухню</p>
        <p className={cx(styles["discount-feetback-important-text"])}>
          и получите скидку до 40%
        </p>
        <button className={cx(styles["discount-feetback-btn"])}>Не упустить шанс!</button>
      </div>
    </section>
  );
}

export default Discount;
