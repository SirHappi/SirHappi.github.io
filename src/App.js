import logo from './logo.svg';
import './App.css';

import profilePic from "./images/profilepic.jpg";
import laurierLogo from "./images/laurier-crest-rev.png";
import devpostLogo from "./images/DevpostLogo.png";
import githubLogo from "./images/GithubLogo.png";
import playsyncLogo from "./images/Playsync.png";
import pseudoTradeLogo from "./images/PseudotradeLogo.png";
import packageHoundLogo from "./images/PackagehoundLogo.jpg";
import kagamusLogo from "./images/KagamusLogo.png";
import heartcrossLogo from "./images/HeartcrossLogo.png";
import pashLogo from "./images/pashLogo.jpg";
import linkedInLogo from "./images/linkedInLogo.png";
import emailLogo from "./images/gmailLogo.png"

import ParticlesBg from "particles-bg";
import Button from "@material-ui/core/Button";
import AndroidIcon from '@material-ui/icons/Android';
import Header from "./components/Header";


import {useEffect, useRef, useState} from "react";
function App() {
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const miscRef = useRef(null);
  const contactRef = useRef(null);
  
  const goToAboutMe = () => aboutMeRef.current.scrollIntoView();
  // const goToProjects = () => projectsRef.current.scrollIntoView();

  // const [mainImg, setMainImg] = useState('');
  const [schoolwork, setSchoolwork] = useState([
  [pseudoTradeLogo, ""],
  [kagamusLogo,""],
  [pashLogo,""]]);
  
  // setProjPics();
  let config = {
    num: [1, 3],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-10, 10],
    alpha: [0.6, 0],
    scale: [0.5, 0.4],
    position: "all",
    color: ["#235b99","#184f5c","#a3dae7","#0000FF"],
    cross: "kill",
    // emitter: "follow",
    random: 15
  };

  if (Math.random() > 0.85) {
    config = Object.assign(config, {
      onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(
          particle.p.x,
          particle.p.y,
          particle.radius * 2,
          particle.radius * 2
        );
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      }
    });
  }


  
  return (
    <div>
      
    <div className="allSections" >
    <Header aboutMe={aboutMeRef} projects={projectsRef} misc="#highlights" contact={contactRef}></Header>
        <div className="welcomeHeading">
          {/* <p className="greetings">Hi there, I'm</p>
          <h1>Haricharan Vinukonda</h1>
          <p className="quickBlurb">A computer science new-grad, with an interest in app development,<br/>
            and cybersecurity. I have an excellent understanding of Web and Android Applications.</p>
            
             */}
          <h1 style={{fontSize:"calc(40px + 4vw)"}}>Welcome!</h1>
          <Button onClick={() => goToAboutMe()} variant="contained" color="primary"  style={{marginTop:"10vh",marginBottom:"10vh",fontSize:"calc(10px + 0.5vw)",fontFamily:"Proxima Nova"}}>Proceed</Button>
        </div>
        <div className="aboutMe" ref={aboutMeRef}>
        
          <h1>About me</h1>
          <h3>Hi there, I'm Haricharan Sriharsha Vinukonda</h3>
          {/*This will be replaced later with a pic of me*/}
          <img src={laurierLogo} className="laurierLogo"></img>
          
          <p>
            I'm a Laurier Computer Science graduate, based in Waterloo, Ontario, with an interest in app development,<br/>
            and cybersecurity. My skillset is centered around Web and Android Applications.<br/>
          </p>
          <div className="mySkills" style={{color:"#444444"}}>
            <p>
              Languages: Java, Python, C, HTML/CSS, Javascript
            </p>
            <p>
              Technologies: Firebase, Git, MySQL, MongoDB, Heroku, Express, OpenCV, Pandas, Android
            </p>
            <p>
              Frameworks: ReactJS, NodeJS, Spring, ThreeJS (WebGL) 
            </p>
          </div>
        </div>
        <div className="projects" ref={projectsRef}>
          <h1>Projects</h1>
          <h3 className="projectsDesc">Here I have curated a couple of my projects to showcase my expertise.</h3>
          <div className="project">
            <h1 className="projectTitle" style={{backgroundColor:"white"}}>HeartCross</h1>
            <img  src={heartcrossLogo} alt="HeartCross Logo" style={{width:"25%",marginTop:"2vh"}}></img>
            <p className="projectDesc">
              Made for StarterHacks 2020. HeartCross was a platform we created that enabled the family and friends of those<br/>
              affected by disaster to check on the person(s) affected by the disaster.
            </p>
            <div className="projectBody">
              <div className="projectInfo">
                <p style={{marginBottom:"0.1vw"}}>Platform: Web</p>
                <p style={{marginTop:"0.1vw"}}>Technologies Used: HTML/CSS, JS, Google Cloud Engine </p>
                <div style={{justifyContent: "space-between"}}>
                <a href="https://devpost.com/software/heartcrossed"><img className="logo" src={devpostLogo} alt="Devpost" style={{marginRight:"1vw",marginBottom:"1vh"}}></img></a>
                <a href="https://github.com/StevennTran/StarterHacks2020"><img className="logo" src={githubLogo} alt="Github" style={{marginLeft:"1vw",marginBottom:"1vh"}}></img></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="project">
            <h1 className="projectTitle">Package Hound</h1>
            <img  src={packageHoundLogo} alt="Package Hound Logo" style={{width:"40%",marginTop:"2vh"}}></img>
            <p className="projectDesc">
              Our hack for uOttaHack3, Package Hound was a package tracking tool that came with a Android App.<br/>
              It had multiple key components, the tile itself, a device represent a step in the delivery process,<br/>
              and an Android app.
            </p>
            <div className="projectBody">
              <div className="projectInfo">
                <p style={{marginBottom:"0.1vw"}}>Platform: Android, Hardware</p>
                <p style={{marginTop:"0.1vw"}}>Technologies Used: Android SDK,Solace Message Broker, ESP32 </p>
                <div style={{justifyContent: "space-between"}}>
                <a href="https://devpost.com/software/canadiangoose"><img className="logo" src={devpostLogo} alt="Devpost" style={{marginRight:"1vw",marginBottom:"1vh"}}></img></a>
                <a href="https://github.com/leviaviv28/uOttaHack3"><img className="logo" src={githubLogo} alt="Github" style={{marginLeft:"1vw",marginBottom:"1vh"}}></img></a>
                </div>
              </div>
            </div>
          </div>

          <div className="project">
            <h1 className="projectTitle">Panch</h1>
            <AndroidIcon style={{ fontSize: 150, color: "#a4c639" }}></AndroidIcon>
            <p className="projectDesc">
              Panch was an Android app that I made, which connected to a CIA World Factbook API that I made.<br/>
              The point of it was to display information pertaining to a country (population density, hopsitals per-person, etc.) <br/>
              in a more interactive fashion.
            </p>
            <div className="projectBody">
              <div className="projectInfo">
                <p style={{marginBottom:"0.1vw"}}>Platform: Android</p>
                <p style={{marginTop:"0.1vw"}}>Technologies Used: Android SDK, Firebase, RESTful APIs </p>
                <div style={{justifyContent: "space-between"}}>
                {/* <a href="https://devpost.com/software/tbd-8z6kq9"><img className="logo" src={devpostLogo} alt="Devpost" style={{marginRight:"1vw",marginBottom:"1vh"}}></img></a> */}
                <a href="https://github.com/SriVinukonda/Panch"><img className="logo" src={githubLogo} alt="Github" style={{marginLeft:"1vw",marginBottom:"1vh"}}></img></a>
                </div>
              </div>
            </div>
          </div>

          <div className="project">
            <h1 className="projectTitle">Playsync</h1>
            <img  src={playsyncLogo} alt="Playsync Logo" style={{width:"15vw",marginTop:"2vh"}}></img>
            <p className="projectDesc">
              Created for uOttaHack4, Playsync was designed to be a platform for people to play together asynchronously.<br/>
              It had two main components, the server which handled data to and from the client.<br></br>
              And the client program which was the actual game itself.
            </p>
            <div className="projectBody">
              <div className="projectInfo">
                <p style={{marginBottom:"0.1vw"}}>Platform: Web</p>
                <p style={{marginTop:"0.1vw"}}>Technologies Used: NodeJS, PhaserJS, Heroku, Solace Message Broker </p>
                <div style={{justifyContent: "space-between"}}>
                <a href="https://devpost.com/software/tbd-8z6kq9"><img className="logo" src={devpostLogo} alt="Devpost" style={{marginRight:"1vw",marginBottom:"1vh"}}></img></a>
                <a href="https://github.com/russellgoldman/Plasync"><img className="logo" src={githubLogo} alt="Github" style={{marginLeft:"1vw",marginBottom:"1vh"}}></img></a>
                </div>
              </div>
            </div>
          </div>
          

          
          
          
          <div className="project" style={{backgroundColor:"#FFFFFF", display:"flex", flexDirection:"column", itemsAlign:"center"}}>
            <h1 className="projectTitle">Current Pursuits</h1>
            <h3 className="projectDesc" >
              There are two things I'm working on at the moment. 
            </h3>
              <div className="pursuitBody" style={{display:"flex",flexDirection:"column", alignContent:"center", alignItems:"center",backgroundColor:"#FFFFFF"}}>
                <div className="pursuit" style={{paddingLeft:"2vw",paddingRight:"2vw",paddingTop:"0vw",paddingBottom:"0vw" }}>  
                  {/* <img style={{marginTop:"2vh",width:"12vw"}}src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.idgesg.net%2Fimages%2Farticle%2F2018%2F11%2Faws_logo-100781597-large.jpg&f=1&nofb=1"></img> */}
                  <p style={{color:"#444444"}}>
                    One of them is getting my AWS certification, because I am interested in the applications
                    that the cloud has on all fields. Namely, I want to see the how it affects the need for
                    security applications.
                  </p>
                </div>
                <div className="pursuit" style={{paddingLeft:"0vw",paddingRight:"0vw",paddingTop:"0vw",paddingBottom:"0vw", display:"flex",flexDirection:"column",justifyContent: "space-between"}}>  
                <p style={{color:"#444444"}}>
                  The second one is a program which allows for users to create faces that resembles their own<br/>
                  in a character creation screen.
                  </p> 
                  <a href="https://github.com/SriVinukonda/FacePicker"><img className="logo" src={githubLogo} alt="Github" style={{marginLeft:"1vw",marginBottom:"1vh"}}></img></a>
                
                </div>   
              </div>       
          </div>
        </div>
        <div className="contact" ref={contactRef}>

             <h1 className="subHeading">Contact</h1>
             <h3>Here are my socials!</h3>
             <div className="contactLogos"style={{display:"flex", backgroundColor:"#FFFFFF", justifyContent:"center",alignItems:"center"}} >
                <a href="https://github.com/SriVinukonda"><img style={styles.contactLogo} src={githubLogo}></img></a>
                <a href="https://devpost.com/sri13vinukonda"><img style={styles.contactLogo} src={devpostLogo}></img></a>
                <a href="https://www.linkedin.com/in/srivinukonda/"><img style={styles.contactLogo,{maxWidth:"6vw"}} src={linkedInLogo}></img></a>
                
                {/* <a><img style={styles.contactLogo} src={emailLogo}></img></a> */}

             </div>
        </div>
        
        
        
        {/* <div className="education">
          <h2>Education</h2>
          <img src={laurierLogo} alt="Laurier Logo" className="laurierLogo"></img>
          <p>
            B.Sc Computer Science,<br/>
            Wilfrid Laurier University, 2017 - 2021</p>
        </div> */}
       <ParticlesBg g="30" color="#FFFFFF" type="lines" config={config} bg={true} cross="dead"/> 
    </div>
    
    
    </div>
    
  );
}
const styles = {
  contactLogo: {
    maxWidth:"5vw",
    backgroundColor:"#FFFFFF",
    margin:"0.5vw",
    marginLeft:"1vw",
    marginRight:"1vw",
  },
  heartCross: {
  
  },
  packageHound: {

  },
  panch: {

  },

}
export default App;

