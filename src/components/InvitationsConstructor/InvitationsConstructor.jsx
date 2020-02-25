import React, { Component } from "react";

import styles from "./InvitationsConstructor.module.scss";

class InvitationsConstructor extends Component {
  render() {
    const { id } = this.props;

    return <div>Active {id}</div>;
  }
}

export default InvitationsConstructor;
