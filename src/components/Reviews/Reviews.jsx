import React from "react";
import cx from "classnames";

import styles from "./Reviews.module.scss";

function Reviews() {
  return (
    <section className={cx(styles["section-reviews"])}>
      <div className={cx(styles["section-reviews-title"])}>
        <h2>
          <b>Отзывы</b> наших клиентов
        </h2>
      </div>
      <div className={cx(styles["section-reviews-content"])}>
        <div className={cx(styles["section-reviews-description"])}>
          <p className={cx(styles["section-reviews-description-title"])}>Видеоотзывы</p>
          <p>
            Клиенты записывают нам видеоотзывы, чтобы выразить все свои эмоции
            от кухни-мечты! Присылайте свои отзывы и мы обязательно разметим их
            на нашем сайте.
          </p>
        </div>
        <div className={cx(styles["section-reviews-videos"])}>
          <div className={cx(styles["section-reviews-video-item"], styles["big"])}>
            <iframe
              title="video-1"
              src="https://www.youtube.com/embed/ufCNzlueYAg"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={cx(styles["section-reviews-video-item"])}>
            <iframe
              title="video-2"
              src="https://www.youtube.com/embed/ufCNzlueYAg"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={cx(styles["section-reviews-video-item"])}>
            <iframe
              title="video-3"
              src="https://www.youtube.com/embed/ufCNzlueYAg"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
