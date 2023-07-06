//import '../Netflix-login-logo.png';
import "./LoginScreen.css";
import SignInScreen from "./SignInScreen";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
function LoginScreen() {
  const [sign, setSign] = useState(false);

  return (
    <div className="loginScreen">
      <Helmet>
        <title>Mind Mentor</title>
      </Helmet>
      <div className="loginScreen_background">
        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen_body">
        {sign ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Specialized Help For Your Mental Health.</h1>
            <h2>Choose Help. Not Suffering.</h2>
            <h3>
            Talk. Resolve. Heal.100% Private & Secure Platform
            </h3>
            <div className="loginScreen_input">
              <form>
                
               
                <button
                  onClick={() => setSign(true)}
                  className="loginScreen_getstarted"
                >
                  {" "}
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default LoginScreen;
