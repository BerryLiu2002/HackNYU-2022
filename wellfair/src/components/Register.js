import { Link } from "react-router-dom";
import "./styles/Register.css";

function Register(props) {
  function handleClick() {
    props.setIsAuth(true);
  }

  props.setLink(true);

  return (
    <div className="register-container">
      <h2>REGISTER</h2>
      <input type="text" placeholder="Username..." />
      <input type="password" placeholder="Password..." />
      <button onClick={handleClick}>Submit</button>
      <Link className="has-account-link" to="/signin">
        Already have an account? Sign in.
      </Link>
    </div>
  );
}

export default Register;
