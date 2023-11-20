import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as CoursesIcon } from "../../../../assets/icons/coursesIcon.svg";
import { ReactComponent as TeachersIcon } from "../../../../assets/icons/teachersIcon.svg";
import { ReactComponent as StudentsIcon } from "../../../../assets/icons/studentsIcon.svg";

const SidebarAdmin = ({ closeSidebar }) => {
  const location = useLocation();
  let nav = ["/student", "/"];
  const isActiveRoute = (route) => {
    return nav.includes(route);
  };

  return (
    <ul className="sidebar-nav-list">
      <li>
        <NavLink to="/students" onClick={closeSidebar}>
          <StudentsIcon />
          Tələbələr
        </NavLink>
      </li>
      <li>
        <NavLink to="/teachers" onClick={closeSidebar}>
          <TeachersIcon />
          Müəllimlər
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/courses" onClick={closeSidebar}>
          <CoursesIcon />
          Fənlər
        </NavLink>
      </li>*/}
    </ul>
  );
};

export default SidebarAdmin;
