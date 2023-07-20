import styles from "./People.module.css";
import Person from "./Person";
import ben from "../Images/ben.png";
import bill from "../Images/bill.png";
import ed from "../Images/ed.png";
import fran from "../Images/fran.png";
import jeff from "../Images/jeff.png";
import marti from "../Images/marti.png";
import owen from "../Images/owen.png";
import rea from "../Images/rea.png";
import rina from "../Images/rina.png";
import steven from "../Images/steven.png";
import tilda from "../Images/tilda.png";
import timo from "../Images/timo.png";
import { useState } from "react";

const People = ({ onPersonChange }) => {
  //variables for positioning components.
  const Rad = 250;
  const center = [350, 250]; //[left, top] bias

  const [hoveredItems, setHoveredItems] = useState(Array(12).fill(false));

  const mouseEnterHandler = (index) => {
    const updatedHoveredItems = Array(12).fill(false);
    updatedHoveredItems[index] = true;
    setHoveredItems(updatedHoveredItems);
    onPersonChange(true, peopleList[index].text);
  };

  const mouseLeaveHandler = () => {
    setHoveredItems(Array(12).fill(false));
    onPersonChange(false);
  };

  const peopleList_ = [
    {
      id: "bill",
      imagesrc: bill,
      text: "Rohan Matmary, Trigona’s head bartender and bar manager",
      size: [70, 230],
    },
    {
      id: "tilda",
      imagesrc: tilda,
      text: "It’s amazing to represent Malaysia,” he told",
      size: [80, 230],
    },
    {
      id: "fran",
      imagesrc: fran,
      text: "Noting that much of the country is Muslim and doesn’t ",
      size: [80, 240],
    },
    {
      id: "timo",
      imagesrc: timo,
      text: "Representatives from the top 50 venues",
      size: [80, 230],
    },
    {
      id: "rina",
      imagesrc: rina,
      text: "rina",
      size: [120, 230],
    },
    {
      id: "jeff",
      imagesrc: jeff,
      text: "jeff",
      size: [80, 230],
    },
    {
      id: "steven",
      imagesrc: steven,
      text: "steven",
      size: [80, 230],
    },
    {
      id: "marti",
      imagesrc: marti,
      text: "marti",
      size: [80, 230],
    },
    {
      id: "ed",
      imagesrc: ed,
      text: "ed",
      size: [80, 230],
    },
    {
      id: "rea",
      imagesrc: rea,
      text: "rea",
      size: [80, 270],
    },
    {
      id: "ben",
      imagesrc: ben,
      text: "ben",
      size: [120, 230],
    },
    {
      id: "owen",
      imagesrc: owen,
      text: "owen",
      size: [100, 230],
    },
  ];

  const peopleList = peopleList_.map((person, index) => ({
    ...person,
    angle: 30 * index,
    position: [
      center[0] + Rad * Math.sin(30 * index * (Math.PI / 180)),
      center[1] - Rad * Math.cos(-30 * index * (Math.PI / 180)),
    ],
  }));
  peopleList[4].angle -= 20;

  const zoom = `@keyframes zoom {
      from{
          transform: scale(1);
      }
      to{
          transform: scale(1.2);
      }
  }`;

  const zoomAnimation = {
    animationName: "zoom",
    animationDuration: "0.5s",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "1",
    animationFillMode: "forwards",
  };

  const notHoveredStyle = peopleList.map((person) => ({
    transform: `rotate(${person.angle}deg)`,
    left: person.position[0],
    top: person.position[1],
    width: person.size[0],
    height: person.size[1],
  }));

  const hoveredStyle = peopleList.map((person) => ({
    transform: `rotate(${person.angle}deg)`,
    left: person.position[0],
    top: person.position[1],
    width: person.size[0] * 1.2,
    height: person.size[1] * 1.2,
  }));

  return (
    <div className={styles.peopleContainer}>
      <ul>
        {peopleList.map((person, index) => (
          
            <Person
              key={person.id} // Add a unique key prop to the Person component
              info={person}
              style = {
                hoveredItems[index]
                  ? { ...notHoveredStyle[index], ...zoomAnimation }
                  : notHoveredStyle[index]
              }
              onMouseEnter={() => mouseEnterHandler(index)}
              onMouseLeave={mouseLeaveHandler}
            />
        ))}
      </ul>
    </div>
  );
};

export default People;
