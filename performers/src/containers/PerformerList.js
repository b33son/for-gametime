import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/performers";

import Performers from "./Performers";

class PerformerList extends Component {
  componentDidMount = () => {
    this.props.fetchPerformers();
  };
  render() {
    if (!this.props.performers.performers) {
      return <div>Loading...</div>;
    }
    debugger;
    return (
      <div>
        {this.props.performers.performers.map((item, i) => {
          return <Performers performer={item} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    performers: state.performers
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PerformerList);
