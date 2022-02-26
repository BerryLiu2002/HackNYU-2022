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
  const navigate = useNavigate();

  async function handleClick() {
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

  props.setLink(true);

  return (
    <div className="register-container">
      <h2>REGISTER</h2>
      <input onChange={(event) => setEmail(event.target.value)} type="text" placeholder="Email..." value={email} />
      <input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password..." value={password} />
      <button onClick={handleClick}>Submit</button>
      <Link className="has-account-link" to="/signin">
        Already have an account? Sign in.
      </Link>
      {errorMessage !== "" && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default Register;
