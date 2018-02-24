import React, { PureComponent } from "react";
import ReactSwipe from "react-swipe";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Image, Dimmer, Loader, Button, Icon } from "semantic-ui-react";

import { FetchData } from "../../actions";

import Dislikes from "../../views/dislikes";
import Likes from "../../views/likes";

class Tinder extends PureComponent {
  constructor() {
    super();

    this.state = {
      slides: [
        {
          id: 1,
          name: "Один",
          desctiprion: "lorem lorem lorem",
          image:
            "http://actlikeaman.org/wp-content/uploads/2013/04/tumblr_inline_mlh4cxiHEr1r61ztt.png"
        },
        {
          id: 2,
          name: "Два",
          desctiprion: "lorem lorem lorem2",
          image: "https://northernheckler.files.wordpress.com/2010/10/work.gif"
        },
        {
          id: 3,
          name: "Три",
          desctiprion: "lorem lorem lorem3",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaacb0DOvTxwJZkmfKPORtPIjJrSpGodmeTZ_u9r8yd7OlUw1"
        },
        {
          id: 4,
          name: "Четыре",
          desctiprion: "lorem lorem lorem4",
          image:
            "http://actlikeaman.org/wp-content/uploads/2013/04/tumblr_inline_mlh4cxiHEr1r61ztt.png"
        },
        { id: 5, name: "Пять", desctiprion: "lorem lorem lorem5" },
        { id: 6, name: "Шесть", desctiprion: "lorem lorem lorem6" },
        { id: 7, name: "Семь", desctiprion: "lorem lorem lorem7" }
      ],
      likes: [],
      dislikes: []
    };
  }

  componentWillMount() {
    this.props.FetchData();
  }

  getParams = () => {
    const slide = this.refs.reactSwipe.getPos();
    const items = this.state.slides.filter((item, index) => index === slide);
    return items;
  };

  like = () => {
    const { likes } = this.state;
    likes.push(this.getParams());
    localStorage.setItem("likes", JSON.stringify(likes));
    this.refs.reactSwipe.next();
  };

  dislike = () => {
    const { dislikes } = this.state;
    dislikes.push(this.getParams());
    localStorage.setItem('dislikes', JSON.stringify(dislikes));
    this.refs.reactSwipe.next();
  };

  render() {
    const { likes, dislikes, slides } = this.state;
    const { initialized, loading, data: { vacancies } } = this.props.store;
    if (loading && !initialized) return <Loader active />;
    else if (!vacancies) return <span />;
    console.log(this.state, "STATE");
    console.log(this.props, "props");
    return (
      <div>
        <Dimmer active={loading} inverted>
          <Loader />
        </Dimmer>
        <ReactSwipe
          ref="reactSwipe"
          className="carousel"
          swipeOptions={{ continuous: true }}
        >
          {slides.map(slide => (
            <div key={slide.id}>
              <h2>{slide.name}</h2>
              <p>{slide.desctiprion}</p>
              <Image src={slide.image} />
            </div>
          ))}
        </ReactSwipe>
        <div>
          <Icon
            name="dislike outline"
            size="big"
            color="red"
            circular={true}
            onClick={this.dislike}
          />
          <Icon
            name="like outline"
            size="big"
            color="green"
            circular={true}
            onClick={this.like}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  FetchData
};

const mapStateToProps = state => ({
  store: state
});

export default connect(mapStateToProps, mapDispatchToProps)(Tinder);
