import React ,{useState}from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import "./Article.css";
import Card from "react-bootstrap/Card";
//import CardGroup from "react-bootstrap/CardGroup";
function Article() {
  //   const onPlayerReady: YouTubeProps["onReady"] = (event) => {
  //     // access to player in all event handlers via event.target
  //     event.target.pauseVideo();
  //   };
  const [shake, setShake] = useState(false);
    
    const animate = () => {
        
        // Button begins to shake
        setShake(true);
        
        // Buttons stops to shake after 2 seconds
        setTimeout(() => setShake(false), 2000);
        
    }
  // function onPlayerReady(event) {
  //   var embedCode = event.target.getVideoEmbedCode();
  //   event.target.playVideo();
  //   if (document.getElementById("embed-code")) {
  //     document.getElementById("embed-code").innerHTML = embedCode;
  //   }
   
  // }
  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "700",
    
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  
  return (
    <>
    <Card className="text-center">
      <Card.Header className="article_body">Mind Mentor</Card.Header>
      <Card.Body>
        <Card.Title className="article_title">Your Mind Matters !!</Card.Title>
        <YouTube
             
              videoId="rkZl2gsLUp4"
              opts={opts}
             
            />
        <Card.Text>
         When we deny our emotion, it owns us. When we own our emotion, we can rebuild and find our way through the pain. 
        </Card.Text>
       
      </Card.Body>
      <button onClick = {animate} className = {shake ? `shake` : null}>Surprise</button>
    </Card>
   
    </>
  );
}

export default Article;
