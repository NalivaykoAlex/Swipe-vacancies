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
          name: "Оператор call-центра",
          price: "20 000 — 30 000 руб.",
          company: "ООО Гранд Авто"
        },
        {
          id: 2,
          name: "Водитель в Яндекс Такси на любом авто",
          price: "80 000 — 100 000 руб.",
          company: "Яндекс Такси"
        },
        {
          id: 3,
          name: "Менеджер по работе с клиентами",
          price: "20 000 — 70 000 руб.",
          company: "ПАО МТС"
        },
        {
          id: 4,
          name: "Администратор-регистратор",
          price: "от 18 000 руб.",
          company: "Центр красоты и здоровья 'Грация'"
        }
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
    localStorage.setItem("dislikes", JSON.stringify(dislikes));
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
              <h3>Должность:</h3> {slide.name}
              <h3>Заработная плата:</h3> {slide.price}
              <h3>Компания:</h3> {slide.company}
              <Image
                src="../static/images/notes.svg"
                style={{ height: "100px", width: "100px" }}
              />
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
