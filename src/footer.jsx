import React from "react";
import { FaLinkedinIn , FaInstagram , FaFacebook} from "react-icons/fa";
function footer(){
 return(
    <>
    <div className="footer">
    <img className="fotter-head-logo" src="/assets/spit-transparent-bg-logo.png" alt="clg logo"></img>
    <div className="footer-head-socials">
    <FaLinkedinIn className="icons" />
    <FaInstagram className="icons" />
    <FaFacebook className="icons" />
    </div>
    <div className="footer-main">
    <div className="footer-info-left">
    <div className="footer-college-title">Sardar Patel Institute of Technology</div>
    <div className="footer-info-content">Bhavan's Campus, Munshi Nagar, Andheri (West), Mumbai 400 058</div>
    <div className="footer-info-content">Email: hod@spit.ac.in</div>
    </div><div className="footer-info-right"><div></div>
    </div></div>
    <div className="footer-copyright">Copyrights ©{new Date().getFullYear()}  | Sardar Patel Institute of Technology</div>
    </>
 );
}
export default footer