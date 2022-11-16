import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import questionGenerator from "../utils/Questions";

import Carousel from "../components/Carousel/index";

import mariage1 from "../assets/mariage1.jpeg";
import mariage2 from "../assets/mariage2.jpeg";
import mariage3 from "../assets/mariage3.jpeg";

import "./Home.scss";

const Home = () => {
  // Before generate states, I had to bring localStorage infos into the Home component.
  // So that I can use them in useState.
  // If I set localStorage infos above Home components, it gets slower or not calling it properly.
  // Because Home component is being called from app.js
  const localUserName = localStorage.getItem("userName");
  const localFirstName = localStorage.getItem("firstName");
  const localReception = localStorage.getItem("reception");
  const localPartner = localStorage.getItem("partner");
  const localChildrens = localStorage.getItem("childrens");
  const questionList = questionGenerator(
    localReception,
    localPartner,
    localChildrens
  );

  const [infoList, setInfoList] = useState(questionList);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerOptions, setAnswerOptions] = useState("");
  const [answer, setAnswer] = useState("");
  const [answerForArray, setAnswerForArray] = useState({
    kid1: "",
    kid2: "",
    kid3: "",
    kid4: "",
  });

  const navigate = useNavigate();
  const questionQuestion = infoList[currentQuestionIndex];

  // To handle submit button.
  // To avoid infinite rendering, I had to use useCallback.
  const handleSubmit = useCallback(
    (e) => {
      let updateInfoList = [
        ...infoList,
        questionQuestion.answerType === "array"
          ? (questionQuestion.answer = Object.values(answerForArray))
          : (questionQuestion.answer = answer),
      ];
      updateInfoList.pop();

      e.preventDefault();

      if (
        currentQuestionIndex <
        questionGenerator(localReception, localPartner, localChildrens).length -
          1
      ) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setInfoList(updateInfoList);
      } else {
        navigate("/exit");
      }
    },
    [
      currentQuestionIndex,
      answer,
      infoList,
      questionQuestion,
      answerForArray,
      localChildrens,
      localPartner,
      localReception,
      navigate,
    ]
  );

  // To save answer when the anser get changed.
  // To avoid infinite rendering, I had to use useCallback.
  const handleOptionChange = useCallback(
    (e) => {
      if (questionQuestion.answerType === "array") {
        const value = e.target.value;
        setAnswerForArray({ ...answerForArray, [e.target.name]: value });
      } else {
        setAnswer(e.target.value);
      }
    },
    [questionQuestion.answerType, answerForArray]
  );

  useEffect(() => {
    !localUserName && navigate("/");

    // To avoid infinite rendering, I had to add this block in useEffect.
    switch (questionQuestion.answerType) {
      case "string":
        setAnswerOptions(
          <form onSubmit={handleSubmit}>
            <input
              placeholder="type here"
              onChange={handleOptionChange}
            ></input>
            <button type="submit">Save</button>
          </form>
        );
        break;
      case "array":
        setAnswerOptions(
          <form onSubmit={handleSubmit}>
            <input
              placeholder="type here"
              name="kid1"
              value={answerForArray.kid1}
              onChange={handleOptionChange}
            ></input>
            <input
              placeholder="type here"
              name="kid2"
              value={answerForArray.kid2}
              onChange={handleOptionChange}
            ></input>
            <input
              placeholder="type here"
              name="kid3"
              value={answerForArray.kid3}
              onChange={handleOptionChange}
            ></input>
            <input
              placeholder="type here"
              name="kid4"
              value={answerForArray.kid4}
              onChange={handleOptionChange}
            ></input>
            <button type="submit">Save</button>
          </form>
        );
        break;
      default:
        setAnswerOptions(
          <form onSubmit={handleSubmit}>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="yesOrNo"
                  value="true"
                  checked={answer === "true"}
                  onChange={handleOptionChange}
                />
                Yes
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="yesOrNo"
                  value="false"
                  checked={answer === "false"}
                  onChange={handleOptionChange}
                />
                No
              </label>
            </div>
            <button type="submit">Save</button>
          </form>
        );
    }
  }, [
    navigate,
    answer,
    handleSubmit,
    handleOptionChange,
    questionQuestion,
    answerForArray,
    localUserName,
  ]);

  // Every time you save each answers, it will log in the console.
  console.log("updated list : ", infoList);

  return (
    <div className="home">
      <div className="home_container">
        <Carousel>
          <img src={mariage1} alt="placeholder" />
          <img src={mariage2} alt="placeholder" />
          <img src={mariage3} alt="placeholder" />
        </Carousel>
        <div className="home_content">
          <h1>Bonjour {localFirstName}</h1>
          <div className="question-section">
            <div className="question-count">
              Question {currentQuestionIndex + 1} / {infoList.length}
            </div>
            <div className="question">
              {infoList[currentQuestionIndex].question}
            </div>
          </div>
          <div className="answer-section">
            <div>{answerOptions}</div>
          </div>
          <div>
            <h2>Info List</h2>
            {infoList.map((eachInfo, index) => {
              return (
                <div key={index}>
                  <p>
                    <span>{eachInfo.name}</span> :{" "}
                    {/* each info answer shoud look like this : if true "yes" if false "no" */}
                    {eachInfo.answerType === "boolean"
                      ? eachInfo.answer === "true"
                        ? "yes"
                        : "no"
                      : eachInfo.answer}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
