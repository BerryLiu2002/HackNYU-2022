import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles/Main.css";
import ProgessBar from "./ProgressBar";
import Health from "./images/health.png";
import Shield from "./images/shield.png";
import FoodIcon from "./images/food.png";
import Toggle from "./Toggle";
import EnterFood from "./EnterFood";

function Main(props) {
  //const navigate = useNavigate();

  const [completion, setCompletion] = useState(100);
  const [shield, setShield] = useState(0);
  const [selection1, setSelection1] = useState(false);
  const [selection2, setSelection2] = useState(false);

  function goToSelection1() {
    setSelection1(true);
  }

  function goToSelection2() {
    setSelection2(true);
  }

  return (
    <div className="main-container">
      <div className="health-container">
        <img src={Health} style={{ width: "20%", height: "50%" }} />
        <ProgessBar bgcolor={"#FF0000"} completed={completion} />
      </div>
      <div className="shield-container">
        <img src={Shield} style={{ width: "20%", height: "50%" }} />
        <ProgessBar bgcolor={"#0b74b5"} completed={shield} />
      </div>
      <Toggle />

      <div className="entries">
        {/* {!selection1 ? <button onClick={goToSelection1}>Exercise</button> : <EnterFood />} */}
        {!selection2 ? <img onClick={goToSelection2} className="entries-img" src={FoodIcon} /> : <EnterFood />}
      </div>
    </div>
  );
}

export default Main;
