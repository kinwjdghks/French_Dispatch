import Objects from "./Components/Objects";
import mainTitle from './Images/others/MainTitle.svg'
import "./App.css";
import TypingAnimation from "./Functions/TypingAnimation";
import { useState } from "react";

function App() {

  const [hoveredObj,setHoveredObj] = useState(null);
  const onHoveredHandler = (object) =>{
    setHoveredObj(object);
  }

  return (
    <div className='mainpage'>
      <div className='imgcontainer_mainTitle'>
        <img className='img_mainTitle' src={mainTitle} alt="French Dispatch"/>
      </div>
      <div className='credits'>
        DIRECTED BY WES ANDERSON<br/>
        EDITED BY HONG HYUN GI<br/>
        PUBLISHED BY JUNG JUNG HWAN
      </div>
      <div className='discription kor'>
        이 페이지는 웨스 앤더스 감독의 &lt;프렌치 디스패치&gt;를 여러번 보고 또 보고 계속해서 본 사람이 만들었습니다.<br/>
        아래에는 영화를 웹페이지로 옮겨 놓은, '의도된 어질러짐'이 있습니다.<br/>
        영화를 보신 분들에게는 즐거운 회상의 시간이, 아직 안 보신 분들이게는 영화에 관심을 갖게 되는 계기가 되었으면 합니다.<br/>
        이 페이지를 웨스 앤더슨의 영화와 &lt;더 뉴요커&gt; 매거진과 타자기와 예술가들을 사랑하는 모든 사람에게 바칩니다.
      </div>
      <div className='discription eng'>
        This page is designed by someone who watched Wes Anderson's film &lt;The French Dispatch&gt; over and over for countless time.<br/>
        Following contents mimics the movie with a mess(which is intended) made by chosen goods from the movie.<br/>
        We intended delightful flashback to for those who watched the movie already, and little curiosity for those who yet have not.<br/>
        We dedicate this page fo everyone who loves Wes Anderson's films, &lt;The New Yorker&gt; magazine, typewriter, and artists.
      </div>

      <Objects onHover={onHoveredHandler} />

      <div className='textbox-container'>
        <div className='textbox name'>{hoveredObj===null ? "" : hoveredObj['name']}</div>
        <div className='textbox job'>{hoveredObj===null ? "" : hoveredObj['subname']}</div>
        {hoveredObj!==null && <div className = 'textbox content'><TypingAnimation text={hoveredObj['content']} /></div>} 
      </div>
      
    </div>
  );
}

export default App;
