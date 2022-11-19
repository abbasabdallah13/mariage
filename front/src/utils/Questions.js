const questionGenerator = (reception, partner, children) => {
  let questionList = [];

  const attendingQuestion = [
    {
      name: 'reception',
      section: 'attendingQuestion',
      question: 'Will you be attending the wedding?', //Seras-tu présent(e) à notre mariage ?
      answerType: 'boolean',
    },// guest 1 and 2 get this question
    {
      name: 'wineReception',
      section: 'attendingQuestion',
      question: "Will you be attending the wine reception?", //Seras-tu présent(e) à notre vin d'honneur ?
      answerType: 'boolean',
    },// guest 1 and 2 get this question
  ];

  const partnerQuestion = [
    {
      name: 'partner',
      section: 'partnerQuestion',
      question: `Are you coming with ${partner} ?`, //Viens-tu avec ${partner} ?
      answerType: 'boolean',
    }, // guest 1 and 2 get this question
  ];

  const childrensQuestion = [
    {
      name: 'childrens',
      section: 'childrensQuestion',
      question: 'Are you coming with children ?', //Et ton/tes enfant(s) ?
      answerType: 'boolean', 
    }, // guest 1 and 2 get this question
    {
      name: 'childrens',
      section: 'childrensQuestionDetails',
      question: 'Please specify the age and name ?', //Rapelle-nous son prénom et son âge ?
      answerType: 'array',
    },  // guest 1 and 2 get this question
  ];

 
  // guest 2 get the ending message

  // guest 1 keep going to the next question
  // make a text before next question saying 
  // that you are able to stay overnight (depending on guest )
  // description of the place and price 
  // plus a button next going to the accomodation questions

  const stayingQuestion = [
    {
      name: 'accommodation1night',
      section: 'stayingQuestion',
      question: 'Souhaites-tu dormir sur place le samedi soir ?', //Do you want to stay overnight on Saturday night?
      answerType: 'boolean',
    },

    {
      name: 'accommodation2night',
      section: 'stayingQuestion',
      question: 'Souhaites-tu dormir sur place (76€/prs tant une que deux nuits) ?', //Do you want to stay overnight on Saturday night and friday night? (76€/prs for 2 nights same price )
      answerType: 'boolean', // make 3 options : saturday , friday or both
    },
  ];

  // could be reception ? A : B but it should compare values in string. Otherwise it doesn't bring right questions.
  reception === 'true'
    ? questionList.push(attendingQuestion[0])
    : questionList.push(attendingQuestion[1]);
  partner !== 'null' && questionList.push(...partnerQuestion);
  children !== 'null' && questionList.push(...childrensQuestion);
  reception === 'true' && questionList.push(...stayingQuestion);

  return questionList;
};

export default questionGenerator;

// 2 type of guest : 1/ come to wedding and wine reception + reception(diner)
//                   2/ come to the wedding and wine reception only

// 1/ question wedding next question partner next questions childrens next question staying
// 2/ question wedding next question partner next questions childrens (ending text : thx for answering we will see you at the wine reception)
