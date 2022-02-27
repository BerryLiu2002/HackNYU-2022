import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Signin.css";
import { auth } from "../fireconfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleClick() {
    if (email === "" || password === "") {
      setErrorMessage("Empty Fields");
    } else {
      signInApp();
    }
  }

  async function signInApp() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      props.setIsAuth(true);
      navigate("/main");
    } catch (error) {
      if (error.message.includes("auth/wrong-password")) {
        setErrorMessage("Wrong Password.");
      } else if (error.message.includes("auth/user-not-found")) {
        setErrorMessage("Email does not exist.");
      }
    }
  }

  props.setLink(false);

  return (
    <div className="signin-container">
      <h2>SIGN IN</h2>
      <input onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email..." value={email} />
      <input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password..." value={password} />
      <button onClick={handleClick}>Submit</button>
      <Link className="no-account-link" to="/register">
        Don't have an account? Register.
      </Link>
      {errorMessage !== "" && <div className="error-message shake-anim">{errorMessage}</div>}
    </div>
  );
}

export default Signin;
