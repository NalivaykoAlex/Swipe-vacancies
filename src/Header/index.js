import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Label, Dropdown, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { isEmpty } from "lodash";

class Header extends Component {
  render() {
    const { likes, dislikes } = this.props.store;
    const dislike = isEmpty(dislikes) ? "0" : dislikes.length;
    const like = isEmpty(likes) ? "0" : likes.length;

    return <div className="header-content">
        <Link to="/swipe/">
          <Image src="../static/images/header.svg" style={{ height: "50px" }} />
        </Link>
        <Dropdown icon="align justify" style={{ fontSize: "30px" }}>
          <Dropdown.Menu className="left">
            <Dropdown.Item>
              <Menu.Item name="dislike outline">
                <Link to="/dislikes">
                  <Icon color="red" name="dislike outline" />
                  <Label color="red">{dislike}</Label>
                  Dislikes
                </Link>
              </Menu.Item>
              <Menu.Item name="like outline">
                <Link to="/likes">
                  <Icon color="green" name="like outline" />
                  <Label color="green">{like}</Label>
                  Likes
                </Link>
              </Menu.Item>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>;
  }
}

const mapStateToProps = state => ({
  store: state
});

export default connect(mapStateToProps, null)(Header);
