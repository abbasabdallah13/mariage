import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {

  const localUserName = localStorage.getItem("userName");

  const Navigate = useNavigate();
  
  useEffect(() => {
    !localUserName && Navigate("/loginDashboard");
  }, [localUserName]);

  return <div>DashboardPage</div>;
};

export default DashboardPage;
