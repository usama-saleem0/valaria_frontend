import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashbord from "./dashboard";
import Dash1ah from "./dash1ah";
import Dash2ah from "./dash2ah";
import Dash3ah from "./dash3ah";
import Dash5ah from "./dash5ah";
import Dash6ah from "./dash6ah";
import Dash7ah from "./dash7ah";
import Dash8ah from "./dash8ah";
import Dash9ah from "./dash9ah";
import DashHomeh from "./DashboardHomeh";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashbord />} />
      <Route path="DashHomeh" element={<DashHomeh />} />
      <Route path="Dash1ah" element={<Dash1ah />} />
      <Route path="Dash2ah" element={<Dash2ah />} />
      <Route path="Dash3ah" element={<Dash3ah />} />
      <Route path="Dash5ah" element={<Dash5ah />} />
      <Route path="Dash6ah" element={<Dash6ah />} />
      <Route path="Dash7ah" element={<Dash7ah />} />
      <Route path="Dash8ah" element={<Dash8ah />} />
      <Route path="Dash9ah" element={<Dash9ah />} />
    </Routes>
  );
};

export default DashboardRoutes;
