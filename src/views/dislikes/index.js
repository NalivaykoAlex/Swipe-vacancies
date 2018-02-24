import React from "react";

export default () => {
  const dislikes = JSON.parse(localStorage.getItem("dislikes"));

  return (
    <div>
      <h3>Тут список Дизлайков</h3>
      {dislikes.map(item =>
        item.map(item => (
          <ul key={item.id}>
            <li>{item.name}</li>
          </ul>
        ))
      )}
    </div>
  );
};
