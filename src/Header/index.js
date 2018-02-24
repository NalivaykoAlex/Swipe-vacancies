import React from "react";
import { Image, Input, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

import LinkCard from "./links/linksCards";
import links from "./links/links";

import "./styles.css";

export default () => (
  <div>
    <Link to="/">
      <Image src="../static/images/header.svg" className="header-image" />
    </Link>
    <br />
    {/* <Input type="text" />
    <br /> */}
    <div style={{ fontSize: "35px", float: "right", margin: "auto" }}>
      {links.map((link, index) => <LinkCard key={index} link={link} />)}
    </div>
    <br />
  </div>
);
