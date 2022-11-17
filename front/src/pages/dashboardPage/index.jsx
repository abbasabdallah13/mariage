import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from '../../components/dashboardHeader/index';
import DashboardNav from '../../components/dashboardNav/index';

import './index.scss'



const DashboardPage = () => {
  const localUserName = localStorage.getItem("userName");

  const Navigate = useNavigate();

  useEffect(() => {
    !localUserName && Navigate("/loginDashboard");
  }, [localUserName]);

  return (
    <div className="dashboard-page">
      <DashboardHeader />
      <div className="dashboard-content">
        The idea with this is to fetch the info list from the anwser , then in guest list we can see the list of guests and in the dashboard we can see the list of the answers
        so when we click on the guest we can see the answers of the guest
        
      </div>
      <DashboardNav />
    </div>
  );
};

export default DashboardPage;
