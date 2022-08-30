import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //never forget the space
  return <div className={classes}>{props.children}</div>;
}

export default Card;
