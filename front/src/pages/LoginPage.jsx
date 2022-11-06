import React from "react";
import Login from "../components/login";
import DDay from '../components/DDay';

const LoginPage = () => {
  return (
    <div>
      <h1>SAVE THE DATE</h1>
      <p>
        Maëva & Julien sont impatients de célébrer leur mariage à vos côtés le
        samedi 20 mai 2023. En attendant de pouvoir communiquer tous les
        détails, nous vous invitons à répondre au préalable à quelques
        questions.
      </p>
      <DDay />
      <Login />
    </div>
  );
};

export default LoginPage;
