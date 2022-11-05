import React from "react";
import Contact from "./contact";
import slack from "./img/slack.jpg";
import git from "./img/Iconm.png";
import share from "./img/share.jpg";
import dism from "./img/dism.png";
import focm from "./img/focm.png";
import i4g from "./img/I4G.png";
import zuri from "./img/Vector.png";
import pressm from "./img/pressm.png";
import more from "./img/Icon.png";
import profile_img from "./img/profile__img.png";
import { ReactDOM } from "react";
import "./App.css";
import {
  Navigate,
  BrowserRouter,
  
  Route,
  Link,
  Routes,
  NavLink,
} from "react-router-dom";

function Cir() {
  return (
    <div className="cir">
      <img src={share} alt="" />
      <img src={more} alt="" />
    </div>
  );
}

function Hor() {
  return (
    <div className="hor">
      <hr />
    </div>
  );
}

function Social() {
  return (
    <div id="social">
      <img src={slack} alt="" />
      <img src={git} alt="" />
    </div>
  );
}

function Profile() {
  return (
    <div id="profile_img">
      <img src={profile_img} alt="" />
    </div>
  );
}
function Profilename() {
  return <div id="twitter"> Adejumo Oluwapelumi </div>;
}

function Twitter() {
  return (
    <button>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/Adebaicy?t=M-q627HxLvpXcqYfmWZ0Gg&s=09"
      >
        {" "}
        Twitter Link
      </a>
    </button>
  );
}

function Slack() {
  return (
    <div className="invisible" id="slack">
      Adebaicy
    </div>
  );
}
function Zurit() {
  return (
    <button>
      <a
        id="btn__zuri"
        target="_blank"
        rel="noreferrer"
        href="https://training.zuri.team"
      >
        Zuri Team
      </a>
    </button>
  );
}

function Zurib() {
  return (
    <button>
      <a
        id="books"
        target="_blank"
        rel="noreferrer"
        href="https://books.zuri.team"
      >
        Zuri Books
      </a>
    </button>
  );
}

function Python() {
  return (
    <button>
      <a
        id="book__python"
        target="_blank"
        rel="noreferrer"
        href="https://books.zuri.team/python-for-beginners?ref_id=Adebaicy"
      >
        {" "}
        Python Books{" "}
      </a>
    </button>
  );
}

function Background() {
  return (
    <button>
      <a
        id="pitch"
        target="_blank"
        rel="noreferrer"
        href="https://background.zuri.team"
      >
        {" "}
        Background Check for Coders
      </a>
    </button>
  );
}

function Design() {
  return (
    <button>
      <a
        id="book__design"
        target="_blank"
        rel="noreferrer"
        href="https://books.zuri.team/design-rules"
      >
        {" "}
        Design Books
      </a>
    </button>
  );
}

function Footer() {
  return (
    <div className="footer">
      <img src={zuri} alt="" />
      <small>HNG Internship 9 Frontend task</small>
      <img src={i4g} alt="" />
    </div>
  );
}

function Oldq() {

  return(<div>
    <Cir />
      <Profile />

      <Profilename />

      <Slack />
      <div className="send d-flex flex-column">
        <Twitter />
        <br />
        <Zurit />
        <br />
        <Zurib />
        <br />
        <Python />
        <br />
        <Background />
        <br />
        <Design />
        <br/>
        <button ><a href="/contact">Contact Me</a></button>
      </div>
      

    

      <Social />
      <Hor />
      <Footer />
      
    
  </div>)
}
function App() {
  return (
    <div className="App">
  {/*    <Cir />
      <Profile />

      <Profilename />

      <Slack />
      <div className="send d-flex flex-column">
        <Twitter />
        <br />
        <Zurit />
        <br />
        <Zurib />
        <br />
        <Python />
        <br />
        <Background />
        <br />
        <Design />
      </div>
      

    

      <Social />
      <Hor />
      <Footer />
      
    
  */}

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Oldq />} />
      <Route path="/contact" element={<Contact />} />

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
