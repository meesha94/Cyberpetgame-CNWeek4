let initQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "list",
      name: "type",
      message: "What kind of pet do you want?",
      choices: ["Giraffe", "Zebra", "Lion"],
    },
    {
      type: "input",
      name: "petName",
      message: "What would you like to name your pet?",
    },
  ]
  
  let loopQuestion = [
    {
      type: "rawlist",
      name: "action",
      message: `What do you want to do with your pet?`,
      choices: ["Eat", "Sleep", "Play", "Drink", "Nothing"],
    },
  ]
  
  module.exports = {
    initQuestions,
    loopQuestion,
  }