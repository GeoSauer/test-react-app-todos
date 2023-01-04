import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  // props are important for creating reusable components, state is important for dynamically changing what we see on the screen
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // ^ useState always creates an array with two elements, the parameter passed into useState refers to the first element

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* {modalIsOpen ? <Modal /> : null} */}
      {/*  ^ if modalIsOpen is truthy return <Modal />, else return null */}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      {/* ^ if both conditions are truthy the second value will be returned,  since component functions are always true we're basically just checking if modalIsOpen and only then will we run the Modal and Backdrop component functions*/}
    </div>
  );
}

export default Todo;

// <Backdrop /> doesn't have the built in react props because it is custom, so we add more code to the Backdrop.js file
// We are using onCancel to demonstrate its boogeriness
// We also add handlers to <Modal /> in Modal.js
