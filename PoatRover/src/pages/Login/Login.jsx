import React from "react";
import "../style.css";
import img from "../../assets/Rectangle.svg";
import logo from "../../assets/Logo.svg";
import { Button, Input } from "../../components/index";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import StarIcon from "@mui/icons-material/Star";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
// import { signUpSchema } from "../../Schemas/index";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate=useNavigate();


  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: async (values) => {


      try {


        const response = await axios.post(
          "http://localhost:5000/login",
          values
        );

        console.log(response);

        if (response.status === 200) {
        localStorage.setItem("token",response.data.token)
          navigate("/home")
          toast.success("Login successful");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Error during login:", error);
      }
    },
  });

  return (
    <>
      <div className="login-signup">
        <div className="form">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <p className="heading">Log in to your account</p>
          <p className="para">
            The login page prioritizes user security, offering a seamless
            experience that ensures quick and convenient access to the system's
            array of benefits.
          </p>
          <form onSubmit={handleSubmit}>
            <Input
              lable="Email"
              placeholder="Enter your email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Input
              type="password"
              lable="Password"
              placeholder="Enter your password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <div className="remember">
              <div className="rememberme">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <div className="forgetpassword">
                <Link to="/forgetpassword">
                  <p>Forgot password</p>
                </Link>
              </div>
            </div>
            <Button
              text="Log In"
              background="#2970ff"
              color="white"
              type="submit"
            />
          </form>
          <Button
            icon={<GoogleIcon />}
            text="Sign in with Google"
            background="white"
            color="#344054"
          />
          <div className="signup">
            <span style={{ color: "#475467" }}>Don’t have an account?</span>
            <a href="/signup" style={{ color: "#2970FF" }}>
              Sign up
            </a>
          </div>
        </div>
        <div
          className="img"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "600px",
          }}
        >
          <div className="img-overlay">
            <p className="img-overlay-paragraph">
              "Elevating access for modern needs – introducing Smart Lockers,
              where convenience meets security."
            </p>
            <div className="img-overlay-flex1">
              <p>Tanaka Hiroshi</p>
              <div>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <p className="product-manager">Product Manager, Phnom Penh</p>
            <div className="img-overlay-flex2">
              <p>Web Design Agency</p>
              <div>
                <ArrowCircleLeftOutlinedIcon />
                <ArrowCircleRightOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="login-footer">© Smart Delivery​​ 2023</p>
    </>
  );
}


//       try {
//         const requestBody = {
//           email: values.email,
//           password: values.password
//         };

//         const response = await fetch('http://localhost:5000/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(requestBody),
//         });
//         console.log(response)

//         const data = await response.json();
// console.log(data)
//         if (response.ok) {
//           console.log(data)
//           // setToken(data.token);
//           toast.success('Login successful');
//         } else {
//           toast.error(data.message);
//         }
//       } catch (error) {
//         toast.error('Error during login:', error);
//       }