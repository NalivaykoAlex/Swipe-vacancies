import React from "react";
import { isEmpty } from "lodash";

export default () => {
  const likes = JSON.parse(localStorage.getItem("likes"));
  const check = isEmpty(likes);

  return (
    <div>
      {check && <h3> Вы ничего не отметили </h3>}
      {!check &&
        likes.map(item =>
          item.map(item => (
            <ul key={item.id}>
              <li>{item.name}</li>
            </ul>
          ))
        )}
    </div>
  );
};
