import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import "../style.css";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import logo from "../../assets/Logo.svg";
import {
  Button,
  Input,
  Details,
  Footer,
  Iconheadingparagraph,
  Navbar,
} from "../../components/index";
export default function Successful() {
  return (
    <>
      <div className="toggle-navbar">
        <Navbar />
      </div>
      <div className="container">
        <div className="sidebar">
          <div className="sidebar-logo">
            <img src={logo} alt="" />
          </div>
          <Details
            heading="Your details"
            paragraph="Please provide your name and email."
            icon={<PermIdentityIcon />}
            color="#344054"
            path="/forgetpassword"
          />
          <Details
            heading="Check your email"
            paragraph="Please check your email to get reset link."
            icon={<MailOutlinedIcon />}
            color="#344054"
            path="/checkyouremail"
          />
          <Details
            heading="Choose a password"
            paragraph="Choose a secure password."
            icon={<KeyboardOutlinedIcon />}
            color="#344054"
            path="/setnewpassword"
          />
          <Details
            heading="Successfully"
            paragraph="Go back to log in into your account."
            icon={<CheckCircleOutlineOutlinedIcon />}
            color="black"
            path="/successful"
          />
          <Footer />
        </div>
        <div className="main">
          <Iconheadingparagraph
            heading="Successfully"
            paragraph="Your password has been successfully reset. Click below to log in magically."
            icon={<CheckCircleOutlineOutlinedIcon />}
          />
          <div style={{ marginTop: "20px" }}>
            <Button text="Continue" color="#FFFFFF" background="#2970FF" />
          </div>
          <Button
            text="Back to log in"
            color="#475467"
            background="#FFFFFF"
            path="/"
          />

          <div className="circles">
            <div className="circle "></div>
            <div className="circle "></div>
            <div className="circle "></div>
            <div className="circle bluecircle"></div>
          </div>
        </div>
      </div>
    </>
  );
}
