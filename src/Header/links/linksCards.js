import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

export default ({ link }) => (
  <Icon as={Link} to={link.to} >
    <Icon name={link.icon} />
  </Icon>
);
