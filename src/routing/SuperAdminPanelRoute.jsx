import React from "react";
import { Route } from "react-router";
import { Dashboard } from "../Pages/DashboardPage/DashboardPage";
import SalaryPage from "../Pages/SalaryPage/SalaryPage";
import StudentsPage from "../Pages/StudentsPage/StudentsPage";
import StimulationPage from "../Pages/StimulationPage/StimulationPage";
import FinancePage from "../Pages/FinancePage/FinancePage";
import AdminsPage from "../Pages/AdminsPage/AdminsPage";
import TeachersPage from "../Pages/TeachersPage/TeachersPage";
import BranchesPage from "../Pages/BranchesPage/BranchesPage";
import { useSelector } from "react-redux";
import WarningPage from "../Pages/WarningPage/WarningPage";

const SuperAdminPanelRoute = () => {
  const { branchesData} = useSelector((state) => state.branchesData);

  return (
    <>
      {/* <Route path="/students" element={<StudentsPage />} />
      <Route path="/teachers" element={<TeachersPage />} /> */}
      <Route path="/admins" element={branchesData.length > 0 ? <AdminsPage /> : <WarningPage />} />
      <Route path="/finance/expenses" element={branchesData.length > 0 ? <FinancePage /> : <WarningPage />} />
      <Route path="/finance/incomes" element={branchesData.length > 0 ? <FinancePage /> : <WarningPage />} />
      <Route path="/finance/food-ration" element={branchesData.length > 0 ? <FinancePage /> : <WarningPage />} />
      <Route path="/finance/uniforms" element={branchesData.length > 0 ? <FinancePage /> : <WarningPage />} />
      <Route path="/branches" element={<BranchesPage />} />


      {/* <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/salary" element={<SalaryPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/stimulations" element={<StimulationPage />} />
      <Route path="/stimulations/fine" element={<StimulationPage />} />
      <Route path="/stimulations/bonus" element={<StimulationPage />} /> */}
    </>
  );
};

export default SuperAdminPanelRoute;
