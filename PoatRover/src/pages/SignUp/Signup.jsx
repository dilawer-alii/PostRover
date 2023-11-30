import React from "react";
import "../style.css";
import img from "../../assets/Rectangle.svg";
import logo from "../../assets/Logo.svg";
import { Button, Input } from "../../components/index";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import StarIcon from "@mui/icons-material/Star";
import { useFormik } from "formik";
import { signUpSchema } from "../../Schemas/index";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Login() {
  const [gender, setGender] = useState("");
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    gender: "",
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const navigate = useNavigate();
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: async (values) => {
        try {
          const requestBody = {
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            password: values.password,
            gender: gender,
          };

          const response = await axios.post(
            "http://localhost:5000/register",
            requestBody
          );
          console.log(response)
          if (response.status === 200) {
            navigate("/");
            toast.success("Registration successful");
          } else {
            toast.error(response.data.message);
          }
        } catch (error) {
          toast.error("Error during registration:", error);
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
          <p className="heading">Sign up for your account</p>
          <p className="para">
            The signup page prioritizes user security, offering a seamless
            experience that ensures quick and convenient access to the system's
            array of benefits.
          </p>
          <form onSubmit={handleSubmit}>
            <Input
              lable="First-Name"
              placeholder="Enter your first name"
              name="firstname"
              id="firstname"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              lable="LastName"
              placeholder="Enter your last name"
              name="lastname"
              id="lastname"
              value={values.LastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              lable="Email"
              placeholder="Enter your email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p style={{ color: "#b22b27", marginBottom: "20px" }}>
                {" "}
                {errors.email}
              </p>
            ) : null}
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
            {errors.password && touched.password ? (
              <p style={{ color: "#b22b27" }}>{errors.password}</p>
            ) : null}
            <div style={{ marginTop: "8px" }}>
              <label>
                <input
                  style={{ marginRight: "8px" }}
                  type="radio"
                  value="male"
                  checked={gender === "male"}
                  onChange={handleGenderChange}
                />
                Male
              </label>

              <label style={{ marginLeft: "8px" }}>
                <input
                  style={{ marginRight: "8px" }}
                  type="radio"
                  value="female"
                  checked={gender === "female"}
                  onChange={handleGenderChange}
                />
                Female
              </label>
            </div>
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
              text="Register"
              background="#2970ff"
              color="white"
              type="submit"
            />
          </form>
          <Button
            text="Back to log in"
            color="#475467"
            background="#FFFFFF"
            path="/"
          />
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

// try {
//   const requestBody = {
//     firstname:values.firstname,
//     lastname:values.lastname,
//     email: values.email,
//     password: values.password,
//     gender:gender
//   };
//   const response = await fetch('http://localhost:5000/register', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(requestBody ),
//   });

//   const data = await response.json();
//   if (response.ok) {

//     navigate("/")
//     toast.success('Registration successful');

//   } else {
//    toast.error(data.message)
//   }
// } catch (error) {
//   console.error('Error during registration:', error);
// }
