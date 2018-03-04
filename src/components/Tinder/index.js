import React, { Component } from "react";
import Cards, { Card } from "react-swipe-card";
import { connect } from "react-redux";
import { Image, Dimmer, Loader } from "semantic-ui-react";

import { FetchData, Pushlikes, PushDislikes } from "../../actions";

class Tinder extends Component {

  componentWillMount() {
    this.props.FetchData();
  }
  
  like = like => {
    this.props.Pushlikes(like);
    localStorage.setItem("likes", JSON.stringify(this.props.store.likes));
  };
  
  dislike = dislike => {
    this.props.PushDislikes(dislike)
    localStorage.setItem("dislikes", JSON.stringify(this.props.store.dislikes));
  };

  render() {
    const { data: { initialized, loading, slides } } = this.props.store;
    if (loading && !initialized) return <Loader active />;
    else if (!slides) return <span />;

    return (
      <div>
        <Dimmer active={loading} inverted>
          <Loader />
        </Dimmer>
        <div>
          <Cards className="master-root">
            {slides.map(slide => (
              <Card
                className="card"
                key={slide.id}
                onSwipeLeft={() => this.dislike(slide)}
                onSwipeRight={() => this.like(slide)}
              >
                <div key={slide.id}>
                  <h3>Должность:</h3> {slide.name}
                  <h3>Заработная плата:</h3> {slide.price}
                  <h3>Компания:</h3> {slide.company}
                  <h3>Описание:</h3> {slide.description}
                  <Image
                    src="../static/images/notes.svg"
                    style={{ height: "70px", marginTop: "15px" }}
                  />
                </div>
              </Card>
            ))}
          </Cards>
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
