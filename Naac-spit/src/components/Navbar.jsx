import React from "react";
import logo from "../assets/logo2.png";
import logo2 from "../assets/spit-transparent-bg-logo.png";
import college from "../assets/College.jpg";
import "./Navbar.css";

const undertaking_pdf = "http://localhost:5173/Undertaking.pdf";

const Navbar = () => {
  const openPDF = (url) => {
    window.open(url, "_blank");
  };

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <img className="w-[5rem]" src={logo2} alt="logo" />
          <img className="w-[25rem]" src={logo} alt="logo" />
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn">
            <i className="fas fa-times"></i>
          </label>
          <li>
            <a href="https://www.spit.ac.in/">Home</a>
          </li>
          <li>
            <a href="#" className="desktop-item">
              Academics
            </a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              Academics
            </label>
            <ul className="drop-menu">
              <li>
                <a href="https://www.spit.ac.in/academics/graduate/">
                  UG Programme
                </a>
              </li>
              <li>
                <a href="https://www.spit.ac.in/academics/post-graduate/">
                  PG Programme
                </a>
              </li>
              <li>
                <a href="https://www.spit.ac.in/academics/ph-d-programme/">
                  Ph.D.Programme
                </a>
              </li>
              <li>
                <a href="https://www.spit.ac.in/academics/departments/">
                  Departments
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="desktop-item">
              Library
            </a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              Library
            </label>
            <ul className="drop-menu">
              <li>
                <a href="http://dspace.spit.ac.in/xmlui/handle/123456789/6">
                  DSpace
                </a>
              </li>
              <li>
                <a href="http://library.spit.ac.in/qp.html#new_tab">
                  Question Papers
                </a>
              </li>
              <li>
                <a href="http://library.spit.ac.in/syllabus.html#new_tab">
                  Syllabus
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="desktop-item">
              About
            </a>
            <input type="checkbox" id="showMega" />
            <label htmlFor="showMega" className="mobile-item">
              About
            </label>
            <div className="mega-box">
              <div className="content">
                <div className="row">
                  <img src={college} alt="" />
                </div>
                <div className="row">
                  <header>Students</header>
                  <ul className="mega-links">
                    <li>
                      <a href="https://www.spit.ac.in/wp-content/uploads/2023/11/Students-Council-2023-24.pdf">
                        Students Council
                      </a>
                    </li>
                    <li>
                      <a href="https://www.spit.ac.in/placements/">
                        Placements
                      </a>
                    </li>
                    <li>
                      <a href="https://www.spit.ac.in/admissions/">
                        Admissions
                      </a>
                    </li>
                    <li>
                      <a href="http://www.spit.ac.in/category/exam/">Exams</a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header>Research and Innovation</header>
                  <ul className="mega-links">
                    <li>
                      <a href="https://www.spit.ac.in/idealab/">IdeaLab</a>
                    </li>
                    <li>
                      <a href="https://www.spit.ac.in/faculty-research/rd-committee/">
                        R&D Committee
                      </a>
                    </li>
                    <li>
                      <a href="https://www.spit.ac.in/faculty-research/funded-projects/">
                        Funded Projects
                      </a>
                    </li>
                    <li>
                      <a href="https://www.spit.ac.in/faculty-research/international-conferences/">
                        Internation Conferences
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header>Events</header>
                  <ul className="mega-links">
                    <li>
                      <a href="https://oculus.spit.ac.in/#new_tab">Oculus</a>
                    </li>
                    <li>
                      <a href="https://rotaract.spit.ac.in/#new_tab">
                        Rotaract Club
                      </a>
                    </li>
                    <li>
                      <a href="http://ecell.spit.ac.in/#new_tab">E-Cell</a>
                    </li>
                    <li>
                      <a href="http://ieee.spit.ac.in/#new_tab">IEEE</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a className="undertaking" onClick={() => openPDF(undertaking_pdf)}>
              Undertaking
            </a>
          </li>
        </ul>
        <label htmlFor="menu-btn" className="btn menu-btn">
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
