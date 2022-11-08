import React from "react";
import Login from "../../components/login";
import DDay from "../../components/DDAY/index";
import "./index.scss";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="loginPage_Form">
        <h1>SAVE THE DATE</h1>
        <h2>Maëva & Julien</h2>
        <p>
          Nous sommes impatients de célébrer notres mariage à vos côtés le
          samedi 20 mai 2023. En attendant de pouvoir communiquer tous les
          détails, nous vous invitons à répondre au préalable à quelques
          questions.
        </p>
        <DDay />
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
