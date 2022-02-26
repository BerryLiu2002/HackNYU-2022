import "./App.css";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [link, setLink] = useState(false);

  return (
    <Router>
      <Navigation isAuth={isAuth} link={link} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<Signin setIsAuth={(val) => setIsAuth(val)} setLink={(val) => setLink(val)} />} />
        <Route path="/register" element={<Register setIsAuth={(val) => setIsAuth(val)} setLink={(val) => setLink(val)} />} />
      </Routes>
    </Router>
  );
}

export default App;
