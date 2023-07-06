import React from "react";
import "./Stress.css";
import { useNavigate } from "react-router-dom";
function Stress() {
  const navigate = useNavigate();

  return (
    <div className="stress_container">
      <h1>Take the Mental Health Check</h1>
      <div className="stress_gradient">
        <div className="text">
          
          <h4>
          Scientifically validated standard assessments - quickest way to determine if you are suffering from symptoms of any mental health disorder.
          </h4>
          <button onClick={() => navigate("/Test")}>Open</button>
        </div>

        <img
          src="https://res.cloudinary.com/nowandme/image/upload/blog/uojpfvzlqmcwobteblwe"
          alt=""
        ></img>
      </div>
     
    </div>
  );
}

export default Stress;
