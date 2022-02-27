import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles/Register.css";
import { auth } from "../fireconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [calorie, setCalorie] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  function handleClick() {
    if (email !== "" && password !== "" && calorie !== "") {
      createUser();
    } else {
      setErrorMessage("Required fields missing");
    }
    async function createUser() {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        props.setIsAuth(true);
        navigate("/main");
      } catch (error) {
        if (error.message.includes("auth/email-already-in-use")) {
          setErrorMessage("Email is already in use.");
        }
      }
    }
  }

  props.setLink(true);

  return (
    <div className="register-container">
      <h2>REGISTER</h2>
      <p>* are required</p>
      <input onChange={(event) => setEmail(event.target.value)} type="text" placeholder="*Email..." value={email} />
      <input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="*Password..." value={password} />

      <input onChange={(event) => setCalorie(event.target.value)} type="text" placeholder="*Calorie Goal..." value={calorie} />
      <input onChange={(event) => setGender(event.target.value)} type="text" placeholder="Gender..." value={gender} />
      <input onChange={(event) => setWeight(event.target.value)} type="text" placeholder="Weight..." value={weight} />
      <input onChange={(event) => setHeight(event.target.value)} type="text" placeholder="Height..." value={height} />
      <input onChange={(event) => setAge(event.target.value)} type="text" placeholder="Age..." value={age} />
      <button onClick={handleClick}>Submit</button>
      <Link className="has-account-link" to="/signin">
        Already have an account? Sign in.
      </Link>
      {errorMessage !== "" && <div className="error-message shake-anim">{errorMessage}</div>}
    </div>
  );
}

export default Register;
