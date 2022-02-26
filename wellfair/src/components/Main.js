import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles/Main.css";
import ProgessBar from "./ProgressBar";
import Health from "./images/health.png";
import Shield from "./images/shield.png";

import Toggle from "./Toggle";
import EnterFood from "./EnterFood";

function Main(props) {
  //const navigate = useNavigate();

  const [completion, setCompletion] = useState(100);
  const [shield, setShield] = useState(0);
  const [selection, setSelection] = useState(false);

  function goToSelection() {
    setSelection(true);
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
        {!selection ? <button onClick={goToSelection}>Exercise</button> : <EnterFood />}
        {!selection ? <button onClick={goToSelection}>Calorie</button> : <EnterFood />}
      </div>
    </div>
  );
}

export default Main;
