import React from "react";
import cx from "classnames";

import {
  DISCOUNT_TITLE,
  DISCOUNT_SUBTITLE,
  DISCOUNT,
  OFFER_TITLE,
  OFFER_DISCOUNT,
  OFFER_DESCRIPTION
} from "constants/Discount";

import styles from "./Discount.module.scss";
import stylesApp from "styles/_base.scss";

function Discount() {
  return (
    <section
      className={cx(styles["section-discount"], stylesApp["section-discount"])}
    >
      <div className={cx(styles["section-discount-text"])}>
        <p className={cx(styles["section-discount-top-text"])}>
          {DISCOUNT_TITLE}
        </p>

        <p>{DISCOUNT_SUBTITLE}</p>
        <p className={cx(styles["section-discount-attention"])}>
          <b>{DISCOUNT}</b>
        </p>
      </div>

      <div
        className={cx(
          styles["discount-feetback"],
          stylesApp["discount-feetback"]
        )}
      >
        <p>{OFFER_TITLE}</p>
        <p className={cx(styles["discount-feetback-important-text"])}>
          {OFFER_DISCOUNT}
        </p>
        <button className={cx(styles["discount-feetback-btn"])}>
          {OFFER_DESCRIPTION}
        </button>
      </div>
    </section>
  );
}

export default Discount;
