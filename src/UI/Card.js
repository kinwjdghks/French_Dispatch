import styles from "./Card.modules.css";

const Card = (props) => {
  return <div className={`${styles.card} ${styles[props.className]}`}>{props.children}</div>;
};

export default Card;
