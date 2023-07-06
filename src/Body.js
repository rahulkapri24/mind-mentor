import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Body.css";
function Body() {
  return (
    <div className="body">
      <div className="body_content">
        <h1>The Finest Selection of Experts</h1>

        <h4>
          A therapeutic relationship is built on trust and confidence. At
          Now&Me, we provide you with the right expert who can help you feel
          safe and comfortable in your mental health journey.
        </h4>
        <button className="banner__button">Click</button>
      </div>
      <CardGroup className="body_card">
        <Card className="body_cardcontainer">
          <Card.Img
            className="body_img"
            variant="top"
            src="https://axismh.com/wp-content/uploads/2023/01/AXIS-Bipolar-Disorder.jpg"
          />
          <Card.Body>
            <Card.Title>Bipolar disorder</Card.Title>
            <Card.Text>
              <p className="truncate-overflow">
              Bipolar disorder, previously known as manic depression, is a
              mental disorder characterized by periods of depression and periods
              of abnormally elevated mood that each last from days to weeks. If
              the elevated mood is severe or associated with psychosis, it is
              called mania; if it is less severe, it is called hypomania.
           
              </p>
               </Card.Text>
          </Card.Body>
        </Card>
        <Card className="body_cardcontainer">
          <Card.Img
            className="body_img"
            variant="top"
            src="https://www.health.com/thmb/oOS1HhfBVPxNlMUz2AtJ7HFe5Os=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Schizophrenia-Overview-PaigeMcLaughlin-Final-e784ef4214264c8ea708309a09c4901e.jpg"
          />
          <Card.Body>
            <Card.Title>Schizophrenia</Card.Title>
            <Card.Text>
              <p className="truncate-overflow">
              Schizophrenia is a serious mental disorder in which people
              interpret reality abnormally. Schizophrenia may result in some
              combination of hallucinations, delusions, and extremely disordered
              thinking and behavior that impairs daily functioning, and can be
              disabling.
              </p>
              
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="body_cardcontainer">
          <Card.Img
            className="body_img"
            variant="top"
            src="https://progress.im/sites/default/files/styles/content_full/public/istock-1339767475.jpg?itok=KH0-f-lH/100px160"
          />
          <Card.Body>
            <Card.Title> Depression</Card.Title>
            <Card.Text>
              <p className="truncate-overflow">
              Depression is a mood disorder that causes a persistent feeling of
              sadness and loss of interest. Also called major depressive
              disorder or clinical depression, it affects how you feel, think
              and behave and can lead to a variety of emotional and physical
              problems. You may have trouble doing normal day-to-day activities,
              and sometimes you may feel as if life isn't worth living.
            
              </p>
             </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup className="body_card">
        <Card className="body_cardcontainer">
          <Card.Img
            className="body_img"
            variant="top"
            src="https://axismh.com/wp-content/uploads/2023/01/AXIS-Bipolar-Disorder.jpg"
          />
          <Card.Body>
            <Card.Title>Anxiety </Card.Title>
            <Card.Text>
              <p className="truncate-overflow">
              Anxiety is a feeling of fear, dread, and uneasiness. It might cause you to sweat, feel restless and tense, and have a rapid heartbeat. It can be a normal reaction to stress.
              </p>
             </Card.Text>
          </Card.Body>
        </Card>
        <Card className="body_cardcontainer">
          <Card.Img
            className="body_img"
            variant="top"
            src="https://www.health.com/thmb/oOS1HhfBVPxNlMUz2AtJ7HFe5Os=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Schizophrenia-Overview-PaigeMcLaughlin-Final-e784ef4214264c8ea708309a09c4901e.jpg"
          />
          <Card.Body>
            <Card.Title>Stress</Card.Title>
            <Card.Text>
              <p className="truncate-overflow">
              Stress can be defined as a state of worry or mental tension caused by a difficult situation. Stress is a natural human response that prompts us to address challenges and threats in our lives. Everyone experiences stress to some degree.
              </p>
              
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="body_cardcontainer">
          <Card.Img
            className="body_img"
            variant="top"
            src="https://progress.im/sites/default/files/styles/content_full/public/istock-1339767475.jpg?itok=KH0-f-lH/100px160"
          />
          <Card.Body>
            <Card.Title> Manifestation</Card.Title>
            <Card.Text>
              <p className="truncate-overflow">
                {" "}
                The word 'manifestation' means to create something or turn something from an idea into a reality. In psychology, manifestation generally means using our thoughts, feelings, and beliefs to bring something to our physical reality.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Body;
