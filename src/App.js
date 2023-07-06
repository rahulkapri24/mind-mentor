import HomeScreen from "./Screens/HomeScreen";
import Test from './Test';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import React,{ useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login,logout, selectUser } from "./features/userSlice";

function App() {const user = useSelector(selectUser);                                                 //Using selector from UserSlice to choose user
  const dispatch= useDispatch();                                                        //To provide logger details 
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{                            //setting logIn / logOut with firebase
      if(userAuth){
        //logged in 
        //console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,                                                             //Dispatching user id
          email:userAuth.email,                                                         //Dipatching user Email
        })
        );
      }
      else{
        //logged out
        dispatch(logout());                                                             //No user data found so Login out
      }
    });
    return unsubscribe;
    // eslint-disable-next-line
}, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (                                                                     //if New user found redirecting to login Page 
          <LoginScreen />
        ) : (
          
          <Routes>
            
            <Route path="/" element={<HomeScreen />} />
            <Route path="/Test" element={<Test/>}/>
          </Routes>
        )}
      </Router>
    </div> 
  );
}

export default App;
