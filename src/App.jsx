import "./App.css";
import { useState } from "react";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <div className="login-card">
        <div className="logo">☕</div>

        <h1>Cafferium</h1>
        <p className="subtitle">The Art & Science of Coffee</p>

        <form>
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="options">
            <span>
              <input type="checkbox" /> Remember me
            </span>
            <a href="#">Forgot Password?</a>
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>

        <p className="footer">Crafted for coffee lovers</p>
      </div>
    </div>
  );
}

export default App;