import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDelete, handleLike }) {

  const renderToys = toys.map((toy) => {
    return <ToyCard
      key={toy.id}
      toy={toy}
      handleDelete={handleDelete}
      handleLike={handleLike}
    />
  })
  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
