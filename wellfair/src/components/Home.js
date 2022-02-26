import { Link } from "react-router-dom";
import "./styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>
        Be Healthy <br /> And Have Fun
      </h1>
      <Link className="join-community" to="/register">
        Join our community!
      </Link>
    </div>
  );
}

export default Home;
