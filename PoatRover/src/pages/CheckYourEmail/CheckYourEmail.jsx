import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
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
export default function checkYourEmail() {
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
            color="black"
            path="/checkyouremail"
          />
          <Details
            heading="Choose a password"
            paragraph="Choose a secure password."
            icon={<KeyboardOutlinedIcon />}
            color="#344054"
            path="/Setnewpassword"
          />
          <Details
            heading="Successfully"
            paragraph="Go back to log in into your account."
            icon={<CheckCircleOutlineOutlinedIcon />}
            color="#344054"
            path="/successful"
          />
          <Footer />
        </div>
        <div className="main">
          <Iconheadingparagraph
            heading="Check your email"
            paragraph="We sent a password reset link to olivia@smartdelivery.com"
            icon={<MailOutlinedIcon />}
          />
          <Input lable="Email" placeholder="Enter your email" />
          <Button text="Open email app" color="#FFFFFF" background="#2970FF" />
          <div style={{ width: "350px", marginLeft: "75px" }}>
            <span style={{ color: "#475467" }}>Didn’t receive the email?</span>
            <span style={{ color: "#2970FF" }}>Click to resend</span>
          </div>
          <Button
            text="Back to log in"
            color="#475467"
            background="#FFFFFF"
            path="/"
          />
          <div className="circles">
            <div className="circle "></div>
            <div className="circle bluecircle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </>
  );
}
