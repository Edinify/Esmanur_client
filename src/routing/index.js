import { Route, Routes, useLocation, useNavigate } from "react-router";
import { Login } from "../Pages/LoginPage/LoginPage";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../redux/actions/userAction";
import { Header } from "../Layout/Header/Header";
import LoginRoute from "./LoginRoute";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Sidebar from "../Layout/Sidebar/Sidebar";
import SuperAdminPanelRoute from "./SuperAdminPanelRoute";
import AdminPanelRoute from "./AdminPanelRoute";
import BranchesPage from "../Pages/BranchesPage/BranchesPage";

export const Routing = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { auth } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const forgetPassword = useSelector((state) => state.forgetPassword);
  const { show } = useSelector((state) => state.show);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = localStorage.getItem("auth");


  useEffect(() => {
    if (token) {
      if (!user._id) {
        dispatch(userAction());
      }
      if (user.role === "super-admin" && !notFound) {
        if (location.pathname.startsWith("/login")) {
          navigate("/dashboard");
        } else {
          return () => {};
        }
      } else if (user.role === "admin" && !notFound) {
        if (location.pathname.startsWith("/login")) {
          navigate("/courses");
        } else {
          return () => {};
        }
      }
    } else if (forgetPassword.login) {
      navigate("/login");
    } else {
      if (forgetPassword.email) {
        navigate("/forget");
      } else if (forgetPassword.otp) {
        navigate("/send");
      } else if (forgetPassword.changePassword) {
        navigate("/change");
      }
    }
  }, [auth, user, forgetPassword]);

 
  const [notFound, setNotFound] = useState(false);


  return (
    <div className={show ? "" : "main-container"}>
      {!show && <Sidebar />}
      <div className="left">
        {!show && <Header />}

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/branches" element={<BranchesPage />} />
          <Route path="*" element={<NotFoundPage setNotFound={setNotFound} />}/>

          {LoginRoute()}
          {userData?.role === "super-admin" && SuperAdminPanelRoute()}
          {userData?.role === "admin" && AdminPanelRoute()}
        </Routes>
      </div>
    </div>
  );
};
