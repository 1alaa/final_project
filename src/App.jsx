import "./App.css";
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;