import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; //never forget the space
  return <div className={classes}>{props.children}</div>;
};

export default Card;
