import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import Forgetpassword from "./pages/ForgetPassword/ForgetPassword";
import Checkyouremail from "./pages/CheckYourEmail/CheckYourEmail";
import Setnewpassword from "./pages/SetNewPassword/SetNewPassword";
import Successful from "./pages/Successful/Successful";
import SignUp from "./pages/SignUp/SignUp";
import PostDetails from "./pages/PostDetails/PostDeatils";
import Home from "./pages/Home/Home";
import "../src/App.css";
import "@fontsource/roboto/700.css";
function App() {
  const isAuthenticated = !!localStorage.getItem("token");
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Login />}
          />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/checkyouremail" element={<Checkyouremail />} />
          <Route path="/setnewpassword" element={<Setnewpassword />} />
          <Route path="/successful" element={<Successful />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/post/:postId" element={<PostDetails  />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
