import React from "react";
import "./Login.css";
import googleIcon from "../../assets/googl.png"; 
import facebookIcon from "../../assets/facbk.png";  


const Login = () => {
  return (
    
    <div className="login-page">
      <div className="login-form">
        <h2>LOGIN</h2>
        <p>Please enter your information to log in</p>

      
        <div className="social-icons">
          <img src={googleIcon} alt="Google" className="social-icon" />
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
        </div>

        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          
          <button type="submit" className="login-btn">LOGIN</button>

          <div className="footer">
            <p>Not a member yet? <a href="/inscription">Create an account</a></p>
          </div>
        </form>
      </div>
    </div>
  );

};

export default Login;
