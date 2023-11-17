import React from "react";
import { Route } from "react-router";
import CourseTeachersPage from "../Pages/CourseTeachersPage/TeachersPage";
import KindergartenTeachersPage from "../Pages/KindergartenTeachersPage/TeachersPage";
import BabysittersPage from "../Pages/BabysittersPage/TeachersPage";
import StudentsPage from "../Pages/StudentsPage/StudentsPage";
import CoursesPage from "../Pages/CoursesPage/CoursesPage";

const AdminPanelRoute = () => {
  return (
    <>
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/course-teachers" element={<CourseTeachersPage />} />
      <Route path="/kindergarten-teachers" element={<KindergartenTeachersPage />} />
      <Route path="/babysitters" element={<BabysittersPage />} />
    </>
  );
};

export default AdminPanelRoute;
