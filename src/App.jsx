import "./App.css";
import { useState } from "react";
import { Coffee, Eye, EyeOff } from "lucide-react";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">
      <div className="background-glow left"></div>
      <div className="background-glow right"></div>

      <div className="login-card">
        <div className="logo-section">
          <div className="logo-box">
            <Coffee size={30} color="white" />
          </div>

          <h1>Cafferium</h1>
          <p>The Art & Science of Coffee</p>
        </div>

        <form className="login-form">
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot Password?</a>
          </div>

          <button className="login-btn">Login</button>
        </form>

        <p className="footer-text">
          Crafted for coffee lovers ☕
        </p>
      </div>
    </div>
  );
}

export default App;