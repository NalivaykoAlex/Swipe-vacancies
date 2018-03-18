import React, { Component } from "react";
import { connect } from "react-redux";
import Button, { Image, Dimmer, Loader } from "semantic-ui-react";

import { FetchData, Pushlikes, PushDislikes } from "../../actions";

class Tinder extends Component {
  componentDidMount() {
    this.props.FetchData();
  }

  componentDidUpdate() {
    const { vacancies, likes, dislikes } = this.props.store.data;
    const PushDislikes = this.props.PushDislikes;
    const Pushlikes = this.props.Pushlikes;

    $("#tinderslide").jTinder({
      onDislike: function(item) {
        const dislike = vacancies.find(
          (items, index) => index === item.index()
        );
        PushDislikes(dislike);
      },

      onLike: function(item) {
        const like = vacancies.find((items, index) => index === item.index());
        Pushlikes(like);
      },

      animationRevertSpeed: 400,
      animationSpeed: 150,
      threshold: 1,
      likeSelector: ".like",
      dislikeSelector: ".dislike"
    });
  }

  render() {
    const { initialized, loading, slides, vacancies } = this.props.store.data;
    if (loading && !initialized) return <Loader active />;
    else if (!vacancies) return <span />;

    return (
      <div>
        <Dimmer active={loading} inverted>
          <Loader />
        </Dimmer>
        <div>
          <div className="wrap">
            <div id="tinderslide">
              <ul>
                {vacancies.map((item, index) => (
                  <li className="pane1" key={index}>
                    <p>{item.header}</p>
                    <h2>{item.salary}</h2>
                    <div className="like" />
                    <div className="dislike" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  FetchData,
  Pushlikes,
  PushDislikes
};

const mapStateToProps = state => ({
  store: state
});

export default connect(mapStateToProps, mapDispatchToProps)(Tinder);
