function Backdrop(props) {
  return <div className="backdrop" onClick={props.onCancel} />;
  // we are defining onCancel to reference the built in onClick prop built in the jsx <div>
  // we could just write onClick={props.onClick} but are differentiating for booger clarity
}

export default Backdrop;
