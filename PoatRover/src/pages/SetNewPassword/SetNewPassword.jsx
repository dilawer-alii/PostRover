import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import "../style.css";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import logo from "../../assets/Logo.svg";
import {
  Button,
  Input,
  Details,
  Footer,
  Iconheadingparagraph,
  Navbar,
} from "../../components/index";
export default function setNewPassword() {
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
            color="black"
            path="/setnewpassword"
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
          <div style={{ marginTop: "248px" }}>
            <Iconheadingparagraph
              heading="Set new password"
              paragraph="Your new password must be different to previously used passwords."
              icon={<KeyboardOutlinedIcon />}
            />
          </div>
          <Input lable="Password" placeholder="**********" />
          <Input lable="Confirm Password" placeholder="**********" />
          <div className="check">
            <div className="checkfirst">
              <CheckCircleOutlinedIcon />
            </div>
            <div className="checksecond">Must be at least 8 characters</div>
          </div>
          <div className="check">
            <div className="checkfirst">
              <CheckCircleOutlinedIcon />
            </div>
            <div className="checksecond">
              Must contain one special character
            </div>
          </div>
          <Button text="Reset password" color="#FFFFFF" background="#2970FF" />
          <Button
            text="Back to log in"
            color="#475467"
            background="#FFFFFF"
            path="/"
          />
          <div className="circles">
            <div className="circle "></div>
            <div className="circle "></div>
            <div className="circle bluecircle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </>
  );
}
