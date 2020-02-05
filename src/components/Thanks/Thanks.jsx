import React, { Component } from "react";
import cx from "classnames";

import { THANKS_TITLE, REVIEWS } from "constants/Thanks/";

import reviewPerson from "images/review-person.png";

import styles from "./Thanks.module.scss";

class Thanks extends Component {
  state = {};

  componentDidMount() {
    this.setState({ reviews: REVIEWS });
  }

  renderReview = review => {
    const { id, name, text } = review;

    return (
      <div className={cx(styles["review"])} key={id}>
        <div className={cx(styles["review-media"])}>
          <img src={reviewPerson} alt="" className={cx(styles["review-img"])} />
        </div>
        <div className={cx(styles["review-description"])}>
          {name && <p className={cx(styles["review-name"])}>{name}</p>}
          {text && <p>{text}</p>}
        </div>
      </div>
    );
  };

  render() {
    const { reviews } = this.state;

    return (
      <section className={cx(styles["section-thanks"])}>
        <div className={cx(styles["section-thanks-title"])}>
          <h2>{THANKS_TITLE}</h2>
        </div>
        {reviews && (
          <div className={cx(styles["reviews"])}>
            {reviews.map(item => this.renderReview(item))}
          </div>
        )}
      </section>
    );
  }
}

export default Thanks;
