import React from "react";
import { Route } from "react-router";
import MainPage from "../Pages/MainPage/MainPage";
import TablePage from "../Pages/TablePage/TablePage";
import TeachersPage from "../Pages/TeachersPage/TeachersPage";
import StudentsPage from "../Pages/StudentsPage/StudentsPage";
import CoursesPage from "../Pages/CoursesPage/CoursesPage";

const AdminPanelRoute = () => {
  return (
    <>
      <Route path="/" element={<MainPage />} />
      <Route path="/student" element={<MainPage />} />
      <Route path="/table" element={<TablePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/teachers" element={<TeachersPage />} />
    </>
  );
};

export default AdminPanelRoute;
