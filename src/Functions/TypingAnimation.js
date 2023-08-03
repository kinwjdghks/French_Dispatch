import { useEffect, useState } from "react";

const TypingAnimation = ({ text }) => {
  const [typingLetters, setTypingLetters] = useState("");
  const [idx, setIdx] = useState(0);
  useEffect(()=>{
    setTypingLetters("");
    setIdx(0);
  },[text]);

  useEffect(() => {

    if(!text) return;
    const len = text ? text.length : 0;
    const interval = setInterval(() => {
      if (idx >= len) return;
      setTypingLetters((prev) => {
        const result = prev ? prev+text[idx] : text[0];
        return result;
      });
      setIdx((prev)=>{return ++prev;});
      
    }, 35);

    return () => {
      clearInterval(interval);
      
    };
  }, [text, idx,typingLetters]);
  return <>{typingLetters}</>;
};

export default TypingAnimation;
