import React from "react";
import { Route } from "react-router";
import { Dashboard } from "../Pages/DashboardPage/DashboardPage";
import SalaryPage from "../Pages/SalaryPage/SalaryPage";
import CourseTeachersPage from "../Pages/CourseTeachersPage/TeachersPage";
import KindergartenTeachersPage from "../Pages/KindergartenTeachersPage/TeachersPage";
import BabysittersPage from "../Pages/BabysittersPage/TeachersPage";
import StudentsPage from "../Pages/StudentsPage/StudentsPage";
import CoursesPage from "../Pages/CoursesPage/CoursesPage";
import StimulationPage from "../Pages/StimulationPage/StimulationPage";
import FinancePage from "../Pages/FinancePage/FinancePage";
import AdminsPage from "../Pages/AdminsPage/AdminsPage";

const SuperAdminPanelRoute = () => {
  return (
    <>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/salary" element={<SalaryPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/course-teachers" element={<CourseTeachersPage />} />
      <Route path="/kindergarten-teachers" element={<KindergartenTeachersPage />} />
      <Route path="/babysitters" element={<BabysittersPage />} />
      <Route path="/stimulations" element={<StimulationPage />} />
      <Route path="/stimulations/fine" element={<StimulationPage />} />
      <Route path="/stimulations/bonus" element={<StimulationPage />} />
      <Route path="/finance" element={<FinancePage />} />
      <Route path="/finance/expenses" element={<FinancePage />} />
      <Route path="/finance/incomes" element={<FinancePage />} />
      <Route path="/finance/food-ration" element={<FinancePage />} />
      <Route path="/admins" element={<AdminsPage />} />
    </>
  );
};

export default SuperAdminPanelRoute;
