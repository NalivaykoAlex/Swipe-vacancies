import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Card, Button } from "semantic-ui-react";

import { isEmpty } from "lodash";

class Dislikes extends PureComponent {
  render() {
    const { dislikes } = this.props.store;
    const check = isEmpty(dislikes);
    return (
      <div>
        {check && <h3 className="text-not-items"> Вы ничего не отметили </h3>}
        {!check &&
          dislikes.map((item, index) => (
            <Card
              style={{ width: "100%", height: "100%", top: "0px", left: "0px" }}
              key={index}
              header={item.header}
              meta={item.salary}
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state
});

export default connect(mapStateToProps, null)(Dislikes);
