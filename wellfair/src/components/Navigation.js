import { Link, useNavigate } from "react-router-dom";
import "./styles/Navigation.css";
import { signOut } from "firebase/auth";
import { auth } from "../fireconfig";

function Navigation(props) {
  const navigate = useNavigate();

  async function handleClick() {
    try {
      await signOut(auth);
      props.setIsAuth(false);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="navigation-container">
      <h3>Wellfair App</h3>
      {!props.isAuth ? (
        props.link ? (
          <Link className="signin-link" to="/signin">
            SIGN IN
          </Link>
        ) : (
          <Link className="signin-link" to="/register">
            REGISTER
          </Link>
        )
      ) : (
        <button onClick={handleClick}>LOG OUT</button>
      )}
    </div>
  );
}

export default Navigation;
