import React from 'react'
import i4g from "./img/I4G.png";
import zuri from "./img/Vector.png";

function Footer() {
    return (
      <div className="footer">
        <img src={zuri} alt="" />
        <small>HNG Internship 9 Frontend task</small>
        <img src={i4g} alt="" />
      </div>
    );
  }

  
export default Footer;