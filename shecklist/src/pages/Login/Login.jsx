import { useState } from "react";
import "./Login.css";
import Header from "../../components/Header";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <div className="login-container">
        <Header />

        <div className="login-body">
          <div className="login-sign-up-container">
            <div className="login-tabs">
              <button
                className={isLogin ? "active" : ""}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={!isLogin ? "active" : ""}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </div>

            <div className="login-form-content">
              <div className={`form-fade${isLogin ? " active" : ""}`}>
                {isLogin && (
                  <div className="login-form-container">
                    {/* Login Form */}
                    <form action="" className="login-form">
                      <input name="email" placeholder="Email" type="email" />
                      <input
                        name="password"
                        placeholder="Password"
                        type="password"
                      />
                      <p className="forgot-password">Forgot Your Password?</p>
                      <button className="login-btn">
                        <span>Login</span>
                        <span></span>
                      </button>
                    </form>
                  </div>
                )}
              </div>
              <div className={`form-fade${!isLogin ? " active" : ""}`}>
                {!isLogin && (
                  <div className="signup-form-container">
                    {/* Sign Up Form */}
                    <div className="login-form-container">
                    {/* Login Form */}
                    <form action="" className="login-form">
                      <input type="text" placeholder="Name & Surname"/>
                      <input name="email" placeholder="Email" type="email" />
                      <input
                        name="password"
                        placeholder="Password"
                        type="password"
                      />
                      <input
                        name="retype-password"
                        placeholder="Retype Password"
                        type="password"
                      />
                      <button className="login-btn">
                        <span>Sign Up</span>
                        <span></span>
                      </button>
                    </form>
                  </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
