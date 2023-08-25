import React, { useState } from "react";

function ToyCard({ toy, handleDelete, handleLike }) {
  const { id, name, image, likes } = toy
  const [counter, setCounter] = useState(0)

  const removeToy = () => {
    handleDelete(id)
  }

  const addLike = () => {
    handleLike(id, counter)
    setCounter((count) => count + 1)
  }


  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={addLike} className="like-btn">Like {"<3"}</button>
      <button onClick={removeToy} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
