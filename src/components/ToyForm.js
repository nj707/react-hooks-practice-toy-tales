import React, { useState } from "react";

const initialVal = {
  name: "",
  image: "",
  likes: 0
}

function ToyForm({ addToy }) {
  const [jonForm, setJonForm] = useState(initialVal)

  const handleOnChange = (event) => {
    const { name, value } = event.target
    setJonForm({ ...jonForm, [name]: value })
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    addToy(jonForm)
    setJonForm(initialVal)
  }


  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleOnChange}
          value={jonForm.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleOnChange}
          value={jonForm.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div >
  );
}

export default ToyForm;
