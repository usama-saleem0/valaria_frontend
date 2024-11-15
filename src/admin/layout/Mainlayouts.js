import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebarh from '../AdminSidebar/AdminSidebarh';
import AdminHeader from '../AdminHeader/AdminHeader';

const MainLayouts = (props) => {
  return (
    <div className="main-layout">
      <AdminHeader />

      <div className="main-box-con">
        <div className="side-bar-my">
          <AdminSidebarh />
        </div>

        <div className="side-box-my">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayouts;
