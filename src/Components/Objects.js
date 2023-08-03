import styles from "./Objects.module.css";
import Ben from "../Images/people/ben.png";
import Bill from "../Images/people/bill.png";
import Ed from "../Images/people/ed.png";
import Fran from "../Images/people/fran.png";
import Jeff from "../Images/people/jeff.png";
import Marti from "../Images/people/marti.png";
import Owen from "../Images/people/owen.png";
import Rea from "../Images/people/rea.png";
import Rina from "../Images/people/rina.png";
import Steven from "../Images/people/steven.png";
import Tilda from "../Images/people/tilda.png";
import Timo from "../Images/people/timo.png";
import barricade from "../Images/objects/barricade.png";
import butterscotch from "../Images/objects/butterscotch.png";
import champagne from "../Images/objects/champagne.png";
import chef_knife from "../Images/objects/chef_knife.png";
import chess_knight from "../Images/objects/chess_knight.png";
import cigarette from "../Images/objects/cigarette.png";
import colt from "../Images/objects/colt.png";
import dollar from "../Images/objects/dollar.png";
import espresso from "../Images/objects/espresso.png";
import fedora from "../Images/objects/fedora.png";
import fork from "../Images/objects/fork.png";
import fried_egg from "../Images/objects/fried_egg.png";
import inkwell from "../Images/objects/inkwell.png";
import lazy_susan from "../Images/objects/lazy_susan.png";
import lightbulb from "../Images/objects/lightbulb.png";
import lighter from "../Images/objects/lighter.png";
import mask from "../Images/objects/mask.png";
import paintbrush from "../Images/objects/paintbrush.png";
import painting_knife from "../Images/objects/painting_knife.png";
import pipe from "../Images/objects/pipe.png";
import plate from "../Images/objects/plate.png";
import quarter from "../Images/objects/quarter.png";
import radio from "../Images/objects/radio.png";
import radish from "../Images/objects/radish.png";
import riot_badge from "../Images/objects/riot_badge.png";
import sparrow from "../Images/objects/sparrow.png";
import spoon from "../Images/objects/spoon.png";
import telephone from "../Images/objects/telephone.png";
import tobacco from "../Images/objects/tobacco.png";
import turkey from "../Images/objects/turkey.png";
import turpentine from "../Images/objects/turpentine.png";
import typewriter from "../Images/objects/typewriter.png";
import vinyl from "../Images/objects/vinyl.png";
import logo from "../Images/others/MainTitle.png";

import { useState } from "react";

const Objects = ({onHover}) => {
  const objectList = [
    { name: "모세 로젠탈러", subname: "예술가", content: "아 예술. 삶이 짧은데 예술이라도 길어야죠.", img: Ben, id:"Ben" },
    { name: "아서 하위처 주니어", subname: "편집장", content: "울지 마세요. 일부러 그렇게 쓴 것처럼 써보세요.", img: Bill,id:"Bill" },
    { name: "줄리엔 카다지오", subname: "말 잘 하는 사람", content: "말 잘 하는 사람들은 그들의 삶 자체로 예술을 합니다. 카다지오도 그들 중 하나죠.", img: Ed,id:"Ed"},
    { name: "루신다 크레멘츠", subname: "글로 먹고 사는 여자", content: "언론의 중립성은 외로움을 감추는 커튼입니다. 하지만 커튼은 투명해 보이네요.", img: Fran,id:"Fran" },
    { name: "로벅 라이트", subname: "글 쓰는 사람, 외국인", content: "고향과 다른 시간이 흐르는 곳에서 시차 뒤에 남겨진 기억은 지워지지 않습니다. 종이 위에 찍힌 철자처럼요.", img: Jeff,id:"Jeff" },
    { name: "경찰서장", subname: "엄마 저 배고파요", content: "“금강산도 식후경찰서장”", img: Marti,id:"Marti" },
    { name: "허브세인트 새저랙", subname: "앙뉘를 깨운 장본인", content: "“전 꽃 싫어해요.”", img: Owen,id:"Owen" },
    { name: "시몬", subname: "피사체, 뮤즈, 교도관, 그리고 미래", content: "그녀와 그리고자 했던 미래는 콘크리트 위에 그려졌습니다.", img: Rea,id:"Rea" },
    { name: "줄리엣", subname: "가장 똑똑한 애", content: "줄리엣은 기억할 것입니다.", img: Rina,id:"Rina" },
    { name: "네스카피에 경위", subname: "요리사, 외국인", content: "빠뜨린 것들을 찾아 헤매고, 두고 온 것들을 그리워합니다.", img: Steven,id:"Steven" },
    { name: "J.K.L. 베렌슨", subname: "필진 중 최고가", content: "여행 경비가 최고가인 필진입니다.", img: Tilda,id:"Tilda" },
    { name: "제피렐리", subname: "혜성", content: "그는 혜성이 맞습니다. 좀 일찍 졌을 뿐이죠. 그리고 동경하는 자들의 티셔츠 속에서 영원히 질 것입니다.", img: Timo,id:"Timo" },
    {name: "바리케이드", subname:"죄도 없고 필요도 없는 칸막이",content:"사실, 바리케이드 너머와의 거리는 악수하면 손 닿을 거리만큼 멀지도 않습니다.",img:barricade,id:"barricade"},
    {name: "버터스카치 캔디", subname:"감옥 뇌물",content:"캔디와 뚱뚱한 간수가 없었다면 카다지오와 모세의 만남도 없었겠죠.",img:butterscotch,id:"butterscotch"},
    {name: "샴페인", subname:"달콤한 술",content:"꽉 찬 샴페인 병과 빈 와인잔은 서로 완전히 반대입니다.",img:champagne,id:"champagne"},
    {name: "네스카피에 경위의 칼", subname:"요리사 칼",content:"총은 칼보다 강하죠. 하지만 때로 요리사의 칼은 총보다 강합니다.",img:chef_knife,id:"chef_knife"},
    {name: "체스 말", subname:"전쟁 도구도 무엇도 아닌 것",content:"“나이트로 나이트를 잡는다”. 그 뒤 많은 것이 바뀌었다.",img:chess_knight,id:"chess_knight"},
    {name: "담배 한 개비", subname:"필수 소비재(누군가에게는)",content:"크레멘츠 씨에게 담배와 섹스는 언론의 중립성을 유지하는 데 꼭 필요합니다.",img:cigarette,id:"cigarette"},
    {name: "권총", subname:"마피아 진압 도구",content:"중절모와 권총은 환상의 짝꿍이죠.",img:colt,id:"colt"},
    {name: "달러", subname:"예술의 연료",content:"아서는 마지막 1달러까지 아끼려 했습니다. 물론 그의 필진들이 다 써버렸지만요.",img:dollar,id:"dollar"},
    {name: "에스프레소", subname:"커피",content:"진짜 커피를 즐기려면 <<Tabac>> 바의 에스프레소와 데운 우유를.",img:espresso,id:"espresso"},
    {name: "중절모", subname:"권총의 친구",content:"중절모와 권총은 환상의 짝꿍이죠.",img:fedora,id:"fedora"},
    {name: "포크", subname:"멋진 포크",content:"외국인도 쓸 수 있어요.",img:fork,id:"fork"},
    {name: "계란 프라이", subname:"담백함",content:"익히지 마세요. 코냑과 함께 드세요.",img:fried_egg,id:"fried_egg"},
    {name: "잉크병", subname:"커피보다 진한 액체",content:"잉크병은 엎어져도 펜촉은 마르지 않습니다.",img:inkwell,id:"inkwell"},
    {name: "레이지 수잔", subname:"‘서빙 테이블’의 별칭",content:"레이지 수잔에 올라간 품목들: 머그컵 1개, 커피 포트 2개, 접시, 샤또 쇼스탈 화이트 와인 한 병, 빈 와인잔, 식전주 2잔(베르무트와 아페롤), 코냑 20ml(달걀 노른자와 타바스코 소스와 굴 포함), 아포가토, 콜라 1병과 잔, 골리스테스 담배와 성냥 한 갑 씩, 발포성 알약이 들어있는 물 1잔.",img:lazy_susan,id:"lazy_susan"},
    {name: "전구", subname:"어떤 상징",content:"전구가 나가고 곧이어 밝은 빛이 꺼졌습니다. 혜성 만큼은 아니어도 전구 만큼은 밝던 빛이요.",img:lightbulb,id:"lightbulb"},
    {name: "라이터", subname:"지포 라이터",content:"그냥 멋있잖아요. 소리도 좋고.",img:lighter,id:"lighter"},
    {name: "방독면", subname:"답답함",content:"방독면은 공기의 소중함을 알게 해줍니다.",img:mask,id:"mask"},
    {name: "유화 붓", subname:"모세의 붓",content:"감옥에도 예술은 있었습니다. 사랑도요.",img:paintbrush,id:"paintbrush"},
    {name: "페인팅 나이프", subname:"모세의 화구",content:"칼 중에 가장 예술적인 칼입니다.",img:painting_knife,id:"painting_knife"},
    {name: "파이프", subname:"파이프 아님",content:"이건 파이프가 아닙니다. 파이프의 이미지라고요.",img:pipe,id:"pipe"},
    {name: "접시", subname:"외국인의 친구",content:"어디에 가도 당신을 위한 접시는 준비되어 있죠. 당신이 외국인이더라도.",img:plate,id:"plate"},
    {name: "동전", subname:"통신 도구",content:"때로는 동전 하나가 영리한 아이의 목숨을 살릴 수도 있습니다.",img:quarter,id:"quarter"},
    {name: "라디오", subname:"오래된 최신 기술",content:"앙뉘의 모든 사람이 라디오로 제피렐리의 연설을 들었습니다. 그 다음에 일어난 일도요.",img:radio,id:"radio"},
    {name: "순무", subname:"선택적 살인 도구",content:"때로는 순무가 나쁜 어른들과 죄 없는 쇼걸의 목숨을 앗아갈 수도 있습니다.",img:radish,id:"radish"},
    {name: "경찰 뱃지", subname:"그냥 빨간 뱃지",content:"이 뱃지를 단 사람을 발견하면, 체스를 두자고 하세요.",img:riot_badge,id:"riot_badge"},
    {name: "참새", subname:"피사체",content:"모세의 눈에는 완벽한 참새보다 벌거벗은 시몬이 더 아름다웠습니다.",img:sparrow,id:"sparrow"},
    {name: "숟가락", subname:"멋진 숟가락",content:"멋진 숟가락.",img:spoon,id:"spoon"},
    {name: "전화", subname:"전기를 가장 쓸모 있게 쓰는 도구",content:"하지만 유괴범은 전화보다도 빨랐습니다.",img:telephone,id:"telephone"},
    {name: "담배", subname:"감옥 화폐",content:"<벌거벗은 시몬, J동 취미실>의 가치는 25만 프랑이었습니다. 혹은 담배 75개비 거나요.",img:tobacco,id:"tobacco"},
    {name: "칠면조", subname:"아서가 원했던 것",content:"“오, 안 돼. 그게 뭐야? 칠면조를 그리라니까!”",img:turkey,id:"turkey"},
    {name: "테레빈유", subname:"예술적인 기름",content:"누군가에게는 예술의 재료가 될 수도, 누군가에게는 향수가 될 수도 있습니다. 아, 둘이 똑같은 게 될 수도 있겠네요.",img:turpentine,id:"turpentine"},
    {name: "타자기", subname:"시작과 끝",content:"언제나 그랬듯, 모든 것은 타자기로부터 시작 되었죠.",img:typewriter,id:"typewriter"},
    {name: "레코드판", subname:"동그랗고 납작한 낭만",content:"제피렐리와 줄리엣이 카페 <<상 블레그>>에서 들은 노래는 Jarvis Cocker의 <Aline>입니다.",img:vinyl,id:"vinyl"},
    {name: "프렌치 디스패치", subname:"웨스 앤더슨",content:"흥미의 시대에 바치는 사랑과 낭만의 문장",img:logo,id:"logo"}
  ]
  
  const mouseEnterHandler = (index) =>{
    const updatedArr = Array(objectList.length).fill(false);
    updatedArr[index] = true;
    setHoveredObj(updatedArr);
    onHover(objectList[index]);
  }
  const mouseLeaveHandler = () =>{
    setHoveredObj(Array(objectList.length).fill(false));
    onHover(null);
  }

  const [hoveredObj,setHoveredObj] = useState(Array(objectList.length).fill(false));

  return (
    <div className={styles["objects_container"]}>
      {objectList.map((object,index) => {
        return (
          <div
            key={object.name}
            className={`${styles["imgcontainer"]} ${styles[object.id]} ${hoveredObj[index] && styles['zoomed']}`}
          >
            <img
              className={`${styles["img"]} ${styles[object.id]}`}
              src={object.img}
              alt={object.name}
              onMouseEnter={() => mouseEnterHandler(index)}
              onMouseLeave={mouseLeaveHandler}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Objects;
