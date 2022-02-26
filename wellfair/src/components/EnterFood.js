import { useState } from "react";
import Food from "./Food";
import "./styles/EnterFood.css";

function EnterFood() {
  const [food, setFood] = useState("");
  const [choice, setChoice] = useState("");
  const [calories, setCalories] = useState("");

  const [enteredFood, setEnteredFood] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(false);
  const [hasSelection, setHasSelection] = useState([]);

  function handleClick() {
    console.log("Clicked");
  }

  const foods = hasSelection.map((data) => {
    return <Food food={data} />;
  });

  return (
    <div className="entry-container">
      <h3>Enter your food.</h3>
      {!enteredFood ? (
        <input type="text" placeholder="Food..." />
      ) : !selectedChoice ? (
        <input type="number" min="0" max="10" step="1" placeholder="Number..." />
      ) : (
        <input type="text" placeholder="Calories..." />
      )}
      {foods}
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default EnterFood;
