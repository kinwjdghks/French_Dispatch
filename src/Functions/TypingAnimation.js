import { useEffect, useState } from "react";

const TypingAnimation = ({ text }) => {
  const [typingLetters, setTypingLetters] = useState("");
  const [idx, setIdx] = useState(0);
  const [completedText] = useState(text);

    useEffect(()=>{
      const interval = setInterval(()=>{
        if (idx >= completedText.length) return;
        setTypingLetters((prev) => {
          let result = prev ? prev + completedText[idx] : completedText[0];
          return result;
          });
        setIdx((prev) => prev + 1);
      },20);
      return ()=>{clearInterval(interval);}
  },[idx,completedText]);
  

  return <div>{typingLetters}</div>;
};

export default TypingAnimation;