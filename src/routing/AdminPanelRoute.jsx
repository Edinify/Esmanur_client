import React from "react";
import { Route } from "react-router";
import StudentsPage from "../Pages/StudentsPage/StudentsPage";
import TeachersPage from "../Pages/TeachersPage/TeachersPage";

const AdminPanelRoute = () => {
  return (
    <>
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/teachers" element={<TeachersPage />} />
      {/* <Route path="/courses" element={<CoursesPage />} /> */}
    </>
  );
};

export default AdminPanelRoute;
