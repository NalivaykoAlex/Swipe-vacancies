import React from "react";
import { isEmpty } from "lodash";

export default () => {
  const dislikes = JSON.parse(localStorage.getItem("dislikes"));
  const check = isEmpty(dislikes);

  return (
    <div>
      {check && <h3> Вы ничего не отметили </h3>}
      {!check && <h3>Список не понравившихся вакансий</h3> &&
        dislikes.map(item =>
          item.map(item => (
            <ul key={item.id}>
              <li>{item.name}</li>
            </ul>
          ))
        )}
    </div>
  );
};
