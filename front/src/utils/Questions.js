const questionGenerator = (reception, partner, children) => {
  let questionList = [];

  const attendingQuestion = [
    {
      name: 'reception',
      section: 'attendingQuestion',
      question: 'Are you coming to the ceremony? (Wine reception included)',
      answerType: 'boolean',
    },
    {
      name: 'wineReception',
      section: 'attendingQuestion',
      question: 'Are you coming to the wine reception ?',
      answerType: 'boolean',
    },
  ];

  const partnerQuestion = [
    {
      name: 'partner',
      section: 'partnerQuestion',
      question:
        'Is your partner attending as well? If so, add their name. If not, leave it as an empty space',
      answerType: 'string',
    },
  ];

  const childrensQuestion = [
    {
      name: 'childrens',
      section: 'childrensQuestion',
      question:
        'are you coming with your kids? If so, add their age with number',
      answerType: 'array',
    },
  ];

  const stayingQuestion = [
    {
      name: 'accommodation1night',
      section: 'stayingQuestion',
      question: 'do you need to stay 1 night ?',
      answerType: 'boolean',
    },
    {
      name: 'accommodation2night',
      section: 'stayingQuestion',
      question: 'do you need to stay 2 night ?',
      answerType: 'boolean',
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
