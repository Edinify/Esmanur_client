import React from "react";
import { Route } from "react-router";
import { Dashboard } from "../Pages/DashboardPage/DashboardPage";
import SalaryPage from "../Pages/SalaryPage/SalaryPage";
import StudentsPage from "../Pages/StudentsPage/StudentsPage";
import StimulationPage from "../Pages/StimulationPage/StimulationPage";
import FinancePage from "../Pages/FinancePage/FinancePage";
import AdminsPage from "../Pages/AdminsPage/AdminsPage";
import TeachersPage from "../Pages/TeachersPage/TeachersPage";

const SuperAdminPanelRoute = () => {
  return (
    <>
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/teachers" element={<TeachersPage />} />
      <Route path="/finance/expenses" element={<FinancePage />} />
      <Route path="/finance/incomes" element={<FinancePage />} />
      <Route path="/finance/food-ration" element={<FinancePage />} />
      {/* <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/salary" element={<SalaryPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/stimulations" element={<StimulationPage />} />
      <Route path="/stimulations/fine" element={<StimulationPage />} />
      <Route path="/stimulations/bonus" element={<StimulationPage />} />
      <Route path="/admins" element={<AdminsPage />} /> */}
    </>
  );
};

export default SuperAdminPanelRoute;
