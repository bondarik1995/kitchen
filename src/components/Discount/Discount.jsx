import React from "react";

import "./Discount.scss";

function Discount() {
  return (
    <section className="section-discount">
      <div className="section-discount-text">
        <p className="section-discount-top-text">
          Наши цены <b>МАКСИМАЛЬНО</b> разумны,
          <br />
          но Вы сможете и <b>СЭКОНОМИТЬ</b>!
        </p>

        <p>только до конца месяца</p>
        <p className="section-discount-attention">
          <b>АКЦИЯ!</b>
        </p>
      </div>

      <div className="discount-feetback">
        <p>Закажите кухню</p>
        <p className="discount-feetback-important-text">
          и получите скидку до 40%
        </p>
        <button className="btn btn-default">Не упустить шанс!</button>
      </div>
    </section>
  );
}

export default Discount;
