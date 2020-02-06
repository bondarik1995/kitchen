import React, { Component } from "react";
import cx from "classnames";

import {
  ABOUT_COMPANY_TITLE,
  ABOUT_COMPANY_SUBTITLE,
  ABOUT_COMPANY_DESCRIPTION,
  ABOUT_TEAM_TITLE,
  ABOUT_TEAM_SUBTITLE,
  TEAM
} from "constants/About";
import { MAIN_FOLDER } from "constants/App";

import styles from "./About.module.scss";
import stylesApp from "styles/_base.scss";

class About extends Component {
  state = {};

  componentDidMount() {
    this.setState({ team: TEAM });
  }

  renderPerson = person => {
    const { id, name, profession, experience, image } = person;

    return (
      <div className={cx(styles["person"])} key={id}>
        {image && (
          <img
            src={`${MAIN_FOLDER}${image}`}
            alt=""
            className={cx(styles["person-img"])}
          />
        )}
        {name && <p className={cx(styles["person-name"])}>{name}</p>}
        {(profession || experience) && (
          <p className={cx(styles["person-description"])}>
            {profession}
            {profession && experience && ", "}
            {experience && `стаж ${experience}`}
          </p>
        )}
      </div>
    );
  };

  render() {
    const { team } = this.state;

    return (
      <section className={cx(styles["section-about"])}>
        <div
          className={cx(
            styles["section-about-company"],
            stylesApp["section-about-company"]
          )}
        >
          <div className={cx(styles["section-about-title"])}>
            <h2>{ABOUT_COMPANY_TITLE}</h2>
            <p>{ABOUT_COMPANY_SUBTITLE}</p>
          </div>
          <div className={cx(styles["section-about-company-description"])}>
            <p>{ABOUT_COMPANY_DESCRIPTION}</p>
          </div>
        </div>
        <div className={cx(styles["section-about-team"])}>
          <div className={cx(styles["section-about-title"])}>
            <h2>{ABOUT_TEAM_TITLE}</h2>
            <p>{ABOUT_TEAM_SUBTITLE}</p>
          </div>
          {team && (
            <div className={cx(styles["team"])}>
              {team.map(item => this.renderPerson(item))}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default About;
