import React from "react";
import './Test.css';
import Form from "react-bootstrap/Form";
import {  useNavigate } from "react-router-dom";
function Test() {
  const navigate=useNavigate();
  return (
    <div  className="test">
    <div className="test_container">
        <h1>Mind Mentor</h1>
      <Form>
        {["checkbox"].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <h4>
              Are you having trouble concentrating on things such as reading the
              newspaper or watching TV?
            </h4>
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={"Yes"}
            />
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={"No"}
            />
            <h4>
              Are you feeling bad about yourself (ex. feel like a failure or
              constantly let your family down)?
            </h4>
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={"Yes"}
            />
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={"No"}
            />

            <h4>Do you have a poor appetite or are you overeating?</h4>
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={"Yes"}
            />
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={"No"}
            />
            <h4>Are you feeling tired or having little energy?</h4>
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={"Yes"}
            />
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={"No"}
            />
            <h4>
              Are you having trouble falling or staying asleep, or sleeping too
              much?
            </h4>
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={"Yes"}
            />
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={"No"}
            />
            <h4>Are you feeling down, depressed, or hopeless?</h4>
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={"Yes"}
            />
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={"No"}
            />
            <h4>Do you have little interest or pleasure in doing things?</h4>
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={"Yes"}
            />
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={"No"}
            />
            <h4>
              Are you having thoughts that you would be better off dead, or of
              hurting yourself?
            </h4>
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={"Yes"}
            />
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={"No"}
              
            />
                </div>
        ))}
         
       </Form>
    </div>
    <button onClick={()=>navigate("/")} className="button">Submit</button>
      
    </div>
  );
}

export default Test;
