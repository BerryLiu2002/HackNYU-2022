import { Link } from "react-router-dom";
import "./styles/Navigation.css";

function Navigation(props) {
  return (
    <div className="navigation-container">
      <h3>Wellfair App</h3>
      {!props.isAuth &&
        (props.link ? (
          <Link className="signin-link" to="/signin">
            SIGN IN
          </Link>
        ) : (
          <Link className="signin-link" to="/register">
            REGISTER
          </Link>
        ))}
    </div>
  );
}

export default Navigation;
