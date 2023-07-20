import styles from "./Person.module.css";


const Person = ({info,style,onMouseEnter,onMouseLeave}) => {
  return <img className = {styles.person} src={info.imagesrc} style={style}
  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>;
};


export default Person;
