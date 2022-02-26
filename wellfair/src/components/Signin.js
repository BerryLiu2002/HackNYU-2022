import { Link } from "react-router-dom";
import "./styles/Signin.css";

function Signin(props) {
  function handleClick() {
    props.setIsAuth(true);
  }

  props.setLink(false);

  return (
    <div className="signin-container">
      <h2>SIGN IN</h2>
      <input type="text" placeholder="Username..." />
      <input type="password" placeholder="Password..." />
      <button onClick={handleClick}>Submit</button>
      <Link className="no-account-link" to="/register">
        Don't have an account? Register.
      </Link>
    </div>
  );
}

export default Signin;
