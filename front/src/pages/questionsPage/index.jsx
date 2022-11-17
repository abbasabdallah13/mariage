import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import questionGenerator from "../../utils/Questions";

import Carousel from "../../components/Carousel/index";

import mariage1 from "../../assets/mariage1.jpeg";
import mariage2 from "../../assets/mariage2.jpeg";
import mariage3 from "../../assets/mariage3.jpeg";
import mariage4 from "../../assets/mariage4.jpeg";
import mariage5 from "../../assets/mariage5.jpeg";
import mariage6 from "../../assets/mariage6.jpeg";
import mariage7 from "../../assets/mariage7.jpeg";
import mariage8 from "../../assets/mariage8.jpeg";
import mariage9 from "../../assets/mariage9.jpeg";

import "./index.scss";

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

  const inputArr = [
    {
      type: "text",
      id: 1,
      value: ""
    }
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr(s => {
      const lastId = s[s.length - 1].id;
      return [
        ...s,
        {
          type: "text",
          value: ""
        }
      ];
    });
  };

  const handleChange = e => {
    e.preventDefault();

    const index = e.target.id;
    setArr(s => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

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
            {arr.map((item, index) => (
              <input
                key={index}
                id={index}
                value={item.value}
                onChange={handleChange}
              />
            ))}
            <button type="button" onClick={addInput}>
              Add
            </button>
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
    <div className='home'>
      <div className='home_carousel'>
        <Carousel>
          <img src={mariage1} alt='placeholder' />
          <img src={mariage2} alt='placeholder' />
          <img src={mariage3} alt='placeholder' />
          <img src={mariage4} alt='placeholder' />
          <img src={mariage5} alt='placeholder' />
          <img src={mariage6} alt='placeholder' />
          <img src={mariage7} alt='placeholder' />
          <img src={mariage8} alt='placeholder' />
          <img src={mariage9} alt='placeholder' />
        </Carousel>
        <div className='home_contents'>
          <h1>Bonjour {localFirstName}</h1>
          <div className='home_contents_questions'>
            <div className='question-count'>
              Question {currentQuestionIndex + 1} / {infoList.length}
            </div>
            <div className='question'>
              {infoList[currentQuestionIndex].question}
            </div>
          </div>
          <div className='home_contents_answers'>
            <div>{answerOptions}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
