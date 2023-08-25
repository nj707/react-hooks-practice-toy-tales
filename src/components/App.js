import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  const toyLink = "http://localhost:3001/toys"

  useEffect(() => {
    fetch(toyLink)
      .then(r => r.json())
      .then(setToys)
  }, [])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }


  const addToy = (newToy) => {
    const postRequest = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify(newToy)
    }
    fetch(toyLink, postRequest)
      .then(r => r.json())
      .then(newToyData =>
        setToys([...toys, newToyData]))
  }


  const handleDelete = (id) => {
    fetch(toyLink + "/" + id, {
      method: "DELETE",
    })
      .then(r => {
        if (r.ok) {
          const newToy = toys.filter((toy) => {
            return toy.id !== id
          })
          setToys(newToy)
        }
      })
  }


  const handleLike = (id, newLikes) => {
    fetch(toyLink + "/" + id, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify(newLikes)
    })
      .then(r => {
        if (r.ok) {
          setToys([...toys])
        }
      })
  }



  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        handleDelete={handleDelete}
        handleLike={handleLike} />
    </>
  );
}

export default App;
