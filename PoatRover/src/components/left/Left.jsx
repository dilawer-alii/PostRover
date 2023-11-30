import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { Button, Input, Details, Footer, KHP } from "../../components/index";
export default function Left() {
  return (
    <>
      <Details
        heading="Your details"
        paragraph="Please provide your name and email."
        icon={<PermIdentityIcon />}
        color="black"
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
        color="#344054"
        path="/successful"
      />
    </>
  );
}
