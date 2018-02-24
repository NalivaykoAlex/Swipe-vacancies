import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Tinder from "../components/Tinder";
import Likes from "../views/likes";
import Dislikes from "../views/dislikes";

export default () => (
  <Switch>
    <Route exact path="/" component={Tinder} />
    <Route path="/likes" component={Likes} />
    <Route path="/dislikes" component={Dislikes} />
  </Switch>
);