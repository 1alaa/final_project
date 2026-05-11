import "./App.css";
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CoffeeTypes from "./components/CoffeeTypes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'coffee-types' && <CoffeeTypes />}
    </div>
  );
}

export default App;