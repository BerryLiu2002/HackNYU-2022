import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles/Main.css";

function Main(props) {
  //const navigate = useNavigate();
  // useEffect(() => {
  //   if (!props.isAuth) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <div>
      main
      <Link to="/entry">Add Entry</Link>
    </div>
  );
}

export default Main;
