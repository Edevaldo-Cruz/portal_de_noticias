/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import user from "../../assets/faceUser.png";
import { FaRegBell } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { FaSistrix } from "react-icons/fa";
import "./Styles.css";

function NewNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    //className="fixed-top shadow-sm divNav" sticky="top">
    <div className={`navbar fixed-top ${isScrolled ? "navbar-shadow" : ""}`}>
      <Container className="containerNav">
        <div className="d-flex justify-content-between align-items-center mt-4">
          <Navbar.Brand className="d-flex align-items-center spacing" href="#">
            <svg
              fill="currentColor"
              viewBox="0 0 124.66 168.19"
              xmlns="http://www.w3.org/2000/svg"
              className="sizeSvg"
            >
              <title>msn_logo</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path d="M82,91.65c4.37-9.67,9-19.47,15.26-28.08a62.89,62.89,0,0,1,10.59-11.63c3.19-2.64,8.68-6.68,13-4.53s3.93,9,3.35,13a60,60,0,0,1-4.45,14.85c-5.44,12.75-14,24.19-22.79,34.8-1.61,1.94-3.24,3.87-4.93,5.76a91.06,91.06,0,0,1-1,9.88,60.69,60.69,0,0,1-12.4,29c-2.8,3.44-7.74,8.81-12.77,7.81-5.31-1.06-5.32-8.77-5-12.87a57.14,57.14,0,0,1,3.78-15.39C72,115.8,79.9,96.68,82,91.65"></path>
                  <path d="M71,105.76c-5.37,18.4-16.84,44.69-33.28,55.66-7.45,5-17.46,8.8-26.36,5.6C1.47,163.53-1.09,152.5.38,143.16,2,132.72,7.75,123.65,14.49,115.75a54.18,54.18,0,0,1,12.67-10.13c7.47,4.14,16.59,8.72,24.27,11.15A99.3,99.3,0,0,1,34,102.35c-5.72-6.66-14.92-19.81-17.78-30.09-2.93-10.55-5.37-21.58-5.08-32.58.27-10,2.75-20.5,8.77-28.68C26.14,2.62,36.09-2,46.41.86,56.2,3.59,63.73,11.6,68.72,20.13a68.58,68.58,0,0,1,8.86,29.44A154.72,154.72,0,0,1,71,105.76Z"></path>
                </g>
              </g>
            </svg>
            <b>msn</b>
          </Navbar.Brand>

          <InputGroup className="d-flex">
            <Form.Control
              autoFocus
              placeholder=" "
              aria-describedby="basic-addon2"
              className="d-flex align-items-center shadow bg-white"
              style={{ width: "630px", height: "64px" }}
            />
            <InputGroup.Text className="d-flex shadow inputSearch center">
              <FaSistrix size={"2rem"} color={"#FFF"} />
            </InputGroup.Text>
          </InputGroup>

          <div className="d-flex justify-content-between align-items-center divInfo">
            <a href="#" className="nameUser">
              Isabely
            </a>
            <a>
              <img alt="" src={user} className="imgUser" />
            </a>
            <div className="divBtn center">
              <FaRegBell size={"1.5rem"} color={"#262626"} opacity={"0.5"} />
            </div>
            <div className="divBtn center">
              <GoGear size={"1.5rem"} color={"#262626"} opacity={"0.5"} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NewNavbar;
