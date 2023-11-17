import React from "react";
import { Route } from "react-router";
import TeachersPage from "../Pages/TeachersPage/TeachersPage";
import StudentsPage from "../Pages/StudentsPage/StudentsPage";
import CoursesPage from "../Pages/CoursesPage/CoursesPage";

const AdminPanelRoute = () => {
  return (
    <>
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/teachers" element={<TeachersPage />} />
    </>
  );
};

export default AdminPanelRoute;
