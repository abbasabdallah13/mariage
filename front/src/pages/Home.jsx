import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { client } from "../client";
import { fetchUserName,fetchFirstName,fetchReception } from "../utils/fetch";

const Home = () => {
  const [answer, setAnswer] = useState(false);
  const navigate = useNavigate();

  const userName = fetchUserName();
  const firstName = fetchFirstName();
  const reception = fetchReception();
  // made a array of objects to store the questions
  const questions = [
    {
      id: 1,
      question: "Are you coming to the mariage (wine reception included)?",
    },
    {
      id: 2,
      question: "Are you coming to the wine reception ?",
    },
    {
      id: 3,
      question: "are you coming with your kids?",
    },
    {
      id: 4,
      question: "do you need to stay 1 night ?",
    },
    {
      id: 5,
      question: "do you need to stay 2 night ?",
    },
  ];

  // making a handler to handle the answer
  const handleAnswer = (answer) => {
    if (answer === "Yes") {
      setAnswer(true);
      // trying to say that if true then we show the next question
      alert("yassss");
    } else {
      // false show a error message
      setAnswer(false);
      alert("too bad i dont like you then");
    }
  };
  console.log(answer);

  useEffect(() => {
    // if no user is logged in redirect to login page
    // this allow me to secure the access to the home page from the url
    !userName && navigate("/");
  }, [navigate, userName]);

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

  // return <div>Hi I am Home(Main page)</div>;
  return (
    <div className="home">
      {/* because i sent all the info from our guest to the local storage i can use it here */}
      {/* here i can use the local storage to get the name of the guest that is logged in */}
      <h1>Bonjour {firstName}</h1>
      <div className="questions">
        {/* i can tell if the user is invited to the reception or not */}
        {reception === "true" ? (
          <div className="question">
            {/* if he is i show him the proper question */}
            <h2>{questions[0].question}</h2>
          </div>
        ) : (
          <div className="question">
            {/* if he is not i show him the question for wine reception */}
            <h2>{questions[1].question}</h2>
          </div>
        )}
        <button onClick={() => handleAnswer("Yes")}>Yes</button>
        <button onClick={() => handleAnswer("No")}>No</button>
      </div>
    </div>
  );
};

export default Home;
