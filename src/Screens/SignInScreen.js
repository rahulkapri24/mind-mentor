import React, { useRef } from "react";
import "./SignInScreen.css";
import { auth } from "../firebase";
//import firebase from "firebase/compat/app";
function SignInScreen() {
  const emailRef = useRef(null);
  const passRef = useRef(null);
//  const nameRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
        passRef.current.value,
        // nameRef.current.value
    )
      // .createUserWithEmailAndPassword(
      //   emailRef.current.value,
      //   passRef.current.value,
      //   nameRef.current.value
      // )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  // firebase.auth().createUserWithEmailAndPassword().then((userCred) => {
  //   const {user} = userCred
  //   user.updateProfile({displayName: "myNewName"}).then(() => {
  //     console.log("Name Updated")
  //     console.log(firebase.auth().currentUser.displayName)
  //   })
  // })

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
     
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="SignIn">
      <form>
        <h1>Sign In</h1>
        
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passRef} placeholder="Password" type="password" />
        <button onClick={signIn} type="submit">
          {" "}
          Sign In
        </button>
        <h2>Or</h2>
      
        <h4 onClick={register}className="google">
          <img onClick={register}className="img-fluid" src="	https://www.felicity.care/assets/images/google.png" alt=''/>
          <span onClick={register}>Sign Up With Google</span>
        </h4>

        <h4>
       
          <span className="signIn_link" onClick={register}>
            {" "}
            Sign Up Now
          </span>
        </h4>
        
          </form>
    </div>
  );
}

export default SignInScreen;
