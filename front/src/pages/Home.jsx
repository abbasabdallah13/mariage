import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { client } from "../client";

const Home = () => {
  const user = localStorage.getItem('userName');
  const navigate = useNavigate();

  useEffect(() => {
    // if no user is logged in redirect to login page
    // this allow me to secure the access to the home page from the url
    !user && navigate('/');
  }, [navigate, user]);

  // when the userName exists, we will get the information of the user
  // for the future, should be handed down from utils/data.js
  // info 1. value for reception (boolean)
  // info 2. value for partner (string || null? undefined?)
  // info 3. value for childrens (array)
  // info 4. value for accommodation1night (boolean)
  // info 5. accommodation2night (boolean)

  // Create Ending Message components
  // Create yesOrNo components
  // Create Input components
  // Create question components
  // Q1. Attending?
  // Q2. Partner?
  // Q3. Kids? Name & Age?
  // Q4. How many nights?

  return <div>Hi I am Home(Main page)</div>;
};

export default Home;
