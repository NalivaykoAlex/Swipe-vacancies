import React, { Component } from "react";
import Cards, { Card } from "react-swipe-card";
import { connect } from "react-redux";
import Button, { Image, Dimmer, Loader } from "semantic-ui-react";

import { FetchData, Pushlikes, PushDislikes } from "../../actions";

class Tinder extends Component {
  componentWillMount() {
    this.props.FetchData();
  }

  componentDidMount() {
    /**
     * jTinder initialization
     */
    const { data: { slides }, likes, dislikes } = this.props.store;
    const PushDislikes = this.props.PushDislikes;
    const Pushlikes = this.props.Pushlikes;
    // console.log(likes, dislikes, 'WTF')
    // console.log(this.props.store, 'STORE')

    $("#tinderslide").jTinder({
      // dislike callback
      onDislike: function(item) {
        const dislike = slides.filter((items, index) => index === item.index());
        PushDislikes(dislike);
        // localStorage.setItem("dislikes", JSON.stringify(dislikes));
      },
      // like callback
      onLike: function(item) {
        const like = slides.filter((items, index) => index === item.index());
        Pushlikes(like);
        // console.log("Hooooo!");
      },
      animationRevertSpeed: 200,
      animationSpeed: 400,
      threshold: 1,
      likeSelector: ".like",
      dislikeSelector: ".dislike"
    });

    /**
     * Set button action to trigger jTinder like & dislike.
     */
    $(".actions .like, .actions .dislike").click(function(e) {
      e.preventDefault();
      $("#tinderslide").jTinder($(this).attr("class"));
    });
    // Jquery here $(...)...
  }

//   like = like => {
//     this.props.Pushlikes(like);
//     localStorage.setItem("likes", JSON.stringify(this.props.store.likes));
//   };

//   dislike = dislike => {
//     this.props.PushDislikes(dislike);
//     localStorage.setItem("dislikes", JSON.stringify(this.props.store.dislikes));
//   };


  render() {
    const { data: { initialized, loading, slides } } = this.props.store;
    if (loading && !initialized) return <Loader active />;
    else if (!slides) return <span />;

    console.log(this.props.store)

    return (
      <div>
        <Dimmer active={loading} inverted>
          <Loader />
        </Dimmer>
        <div>
          <div className="wrap">
            <div id="tinderslide">
              <ul>
                {slides.map((slide, index) => (
                  <li className="pane1" key={index}>
                    <p>{slide.name}</p>
                    <h2>{slide.price}</h2>
                    <div className="like" />
                    <div className="dislike" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="actions">
            <a href="#" className="dislike">
              <i />
            </a>
            <a href="#" className="like">
              <i />
            </a>
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
