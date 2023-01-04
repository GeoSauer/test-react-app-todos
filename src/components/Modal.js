function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }
  // ^ this is a long form way of writing out wrapper functions, one could also simply pass them into the onClick handlers in the buttons like this: onClick={props.onCancel}/{props.onConfirm}

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
