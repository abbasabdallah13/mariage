import React from 'react';
import Login from '../../components/login';
import DDay from '../../components/DDAY/index';
import './index.scss';
import flowers from '../../assets/flowers.png';

const LoginPage = () => {
  return (
    <div className='loginPage'>
      <div className='loginPage_Description'>
        <h1>Save the date</h1>
        <p>
          Maëva & Julien sont impatients de célébrer leur mariage à vos côtés
          le samedi 20 mai 2023. En attendant de pouvoir communiquer tous les
          détails, nous vous invitons à répondre au préalable à quelques
          questions.
        </p>
      </div>

      <div className='loginPage_DDay'>
        <div className='loginPage_img'>
          <img src={flowers} alt='flower' />
        </div>
        <div className='loginPage_DDay_content'>
          <h2>Maëva & Julien</h2>
          <DDay />
          <h3>Le samedi 20 mai 2023</h3>
        </div>
      </div>

      <div className='loginPage_Login'>
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
