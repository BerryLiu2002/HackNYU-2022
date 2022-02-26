import { Link } from "react-router-dom";
import "./styles/Home.css";

function Home() {
  return (
    <div className="container">
      <div className="home-container">
        <h1>
          Be Healthy <br /> And Have Fun
        </h1>
        <Link className="join-community" to="/register">
          Join our community!
        </Link>
      </div>
      <button>
        <Link className="container-link" to="/register">
          Join Us Today
        </Link>
      </button>
    </div>
  );
}

export default Home;
