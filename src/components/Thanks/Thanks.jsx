import React from "react";

import reviewPerson from "images/review-person.png";

import "./Thanks.scss";

function Thanks() {
  return (
    <section className="section-thanks">
      <div className="section-thanks-title">
        <h2>Благодарности</h2>
      </div>
      <div className="reviews">
        <div className="review">
          <div className="review-media">
            <img src={reviewPerson} alt="" className="review-img" />
          </div>
          <div className="review-description">
            <p className="review-name">Александр Иванович</p>
            <p>
              Хочу сказать огромное спасибо менеджеру Наталье Пахоменко,
              работающей в студии кухни "Мария" на Минской улице, д.17, за
              помощь в подборе кухни, разработке дизайн-проекта, подборе
              техники, фурнитуры.Наталья грамотно и профессионально сделала свою
              работу. Мы очень довольны выбором.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Thanks;
