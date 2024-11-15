import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getemails } from "./Features/userDetailSlice";
import AdminHeader from "./AdminHeader/AdminHeader";
import AdminSidebarh from "./AdminSidebar/AdminSidebarh";
import DashboardRoutes from "./DashboardRoutes";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.userDetail);

  //   useEffect(() => {
  //     console.log('Dispatching getemails...');
  //     dispatch(getemails());
  //   }, [dispatch]);

  return (
    <div className="main-Did">
      <AdminHeader />
      <div className="side-bar-my">
        <AdminSidebarh />
      </div>
      <div className="main-box-con">
        <div className="my-rout-box">
          <DashboardRoutes />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
