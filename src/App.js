import People from "./Components/People";
import Card from "./UI/Card";
import styles from "./App.module.css";
import InteractiveToon from "./Components/InteractiveToon";
import TypingAnimation from "./Functions/TypingAnimation";
import { useState } from "react";

function App() {
  const [dialog, setDialog] = useState("");
  const [isSomeoneHovered, setIsSomeoneHovered] = useState(false);
  const dialogHandler = (bool, text) => {
    setIsSomeoneHovered(bool);
    setDialog(text);
  };
  return (
    <div className={styles.mainpage}>
      <div className={`${styles.page} ${styles.p1}`}>
        <People onPersonChange={dialogHandler} />
        <Card className="text">
          {isSomeoneHovered && <TypingAnimation text={dialog} />}
        </Card>
      </div>
      <div className={`${styles.page} ${styles.p2}`}>
        <InteractiveToon className="toonContainer" />
      </div>
    </div>
  );
}

export default App;
