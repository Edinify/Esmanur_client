import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const AdminNav = ({ setOpenMenu }) => {
  const location = useLocation();

  let nav = ["/student", "/"];
  const isActiveRoute = (route) => {
    return nav.includes(route);
  };

  return (
    <>
      <NavLink
        onClick={() => setOpenMenu(true)}
        to="/"
        className={isActiveRoute(location.pathname) ? "active" : ""}
      >
        {" "}
        Davamiyyət{" "}
      </NavLink>
      <NavLink
        onClick={() => setOpenMenu(true)}
        to="/courses"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Fənlər
      </NavLink>
      <NavLink
        onClick={() => setOpenMenu(true)}
        to="/course-teachers"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Fənn Müəllimləri
      </NavLink>
      <NavLink
        onClick={() => setOpenMenu(true)}
        to="/kindergarten-teachers"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Bağça Müəllimləri
      </NavLink>
      <NavLink
        onClick={() => setOpenMenu(true)}
        to="/babysitters"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Dayələr
      </NavLink>
      <NavLink
        onClick={() => setOpenMenu(true)}
        to="/students"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Tələbələr
      </NavLink>
      <NavLink
        onClick={() => setOpenMenu(true)}
        to="/table"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Cədvəl
      </NavLink>
      <NavLink
        onClick={() => setOpenMenu(true)}
        to="/expenses"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Xərclər
      </NavLink>
    </>
  );
};

export default AdminNav;
