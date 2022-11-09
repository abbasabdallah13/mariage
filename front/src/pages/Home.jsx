import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [answer, setAnswer] = useState(false);
  const navigate = useNavigate();

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
    } else {
      // false show a error message
      setAnswer(false);
      alert("too bad i dont like you then");
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("userName")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="home">
      {/* because i sent all the info from our guest to the local storage i can use it here */}
      {/* here i can use the local storage to get the name of the guest that is logged in */}
      <h1>Bonjour {localStorage.getItem("firstName")}</h1>
      <div className="questions">
        {/* i can tell if the user is invited to the reception or not */}

        {localStorage.getItem("reception") === "true" ? (
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
