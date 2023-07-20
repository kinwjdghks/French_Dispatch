import Card from "../UI/Card";
import styles from "./InteractiveToon.module.css";
import { useState, useRef } from "react";
import image1 from '../Images/image1.jpeg';
import image2 from '../Images/image2.jpeg';
import image3 from '../Images/image3.jpeg';


const InteractiveToon = ({ className }) => {
  const useScroll = () => {
    const element = useRef();
    const moveToElement = () => {
      setTimeout(() => {
        element.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    };
    return { element, moveToElement };
  };

  const toonPages = {
    0: useScroll(),
    1: useScroll(),
    2: useScroll(),
  };

  const maxPage = 3; //page index: 0,1, ... , maxPage-1
  const [pageNo, setPageNo] = useState(0);

  const gotoPrevPage = () => {
    if (pageNo > 0) {
      setPageNo((prevPageNo) => prevPageNo - 1);
      toonPages[pageNo - 1].moveToElement();
    }
  };

  const gotoNextPage = () => {
    if (pageNo < maxPage - 1) {
      setPageNo((prevPageNo) => prevPageNo + 1);
      toonPages[pageNo + 1].moveToElement();
    }
  };

  return (
    <>
      <button
        className={`${styles.button} ${styles.prev}`}
        onClick={gotoPrevPage}
      >
        {(pageNo>0) && `Prev Page`}
      </button>

      <Card className={className}>
        <img
          className={`${styles.inside} ${styles.first}`}
          src={image1}
          ref={toonPages[0].element}
        >
          
        </img>
        <img
          className={`${styles.inside} ${styles.second}`}
          src={image2}
          ref={toonPages[1].element}
        >
        </img>
        <img
          className={`${styles.inside} ${styles.third}`}
          src={image3}
          ref={toonPages[2].element}
        >
        </img>
      </Card>

      <button
        className={`${styles.button} ${styles.next}`}
        onClick={gotoNextPage}
      >
       {(pageNo<maxPage-1) && `Next Page`}
      </button>
    </>
  );
};

export default InteractiveToon;
