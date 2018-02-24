import React from "react";

export default () => {
  const likes = JSON.parse(localStorage.getItem("likes"));

  return (
    <div>
      <h3>Тут список Лайков</h3>
      {likes.map(item =>
        item.map(item => (
          <ul key={item.id}>
            <li>{item.name}</li>
          </ul>
        ))
      )}
    </div>
  );
};
