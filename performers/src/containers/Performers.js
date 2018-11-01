import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/performers";

class Performers extends Component {
  componentDidMount = () => {};

  createCardOrig = data => {
    // id: is a unique performer id
    // name: is the name of the performer
    // hero_image_url: is the hero image link of the performer
    // category_group: is one of ['sport', 'concert', 'theater'] - NOTE: you only need this for the bonus task.

    return (
      <div>
        <div>{data.id}</div>
        <div>{data.name}</div>
        <div>{data.hero_image_url}</div>
        <div>{data.category_group}</div>
      </div>
    );
  };

  createCard = data => {
    // id: is a unique performer id
    // name: is the name of the performer
    // hero_image_url: is the hero image link of the performer
    // category_group: is one of ['sport', 'concert', 'theater'] - NOTE: you only need this for the bonus task.

    return (
      <Card>
        <Image src={data.hero_image_url} />
        <Card.Content>
          <Card.Header>
            {data.id} - {data.name}
          </Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>{data.category_group}</Card.Description>
        </Card.Content>
      </Card>
    );
  };

  render() {
    if (!this.props.performer) {
      return <div>No data yet</div>;
    }

    return this.createCard(this.props.performer);
  }
}

export default Performers;
