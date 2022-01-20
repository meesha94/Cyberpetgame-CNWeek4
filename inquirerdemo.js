let inquirer = require("inquirer")
let { initQuestions, loopQuestion } = require("./questionsdemo")

let choices
let pet

const starter = async () => {
  // inquirer.prompt().then()
  let answers = await inquirer.prompt(initQuestions)
  choices = new Bear ("Winnie",2011,"inside a tree")
  console.log(choices)
  loopingQuestion()
  //   console.log(answers)
  //   if (!answers.question1) {
  //     console.log("What is wrong with you?")
  //   } else {
  //     console.log(`${answers.question2} is an excellent choice`)
  //   }
}

const loopingQuestion = async () => {
  // logic here to end the recursion
  let answers = await inquirer.prompt(loopQuestion)
  console.log(answers)
  if (answers.action === "Drink") {
    // pet.drink()
  } else if (answers.action === "Play") {
    // pet.play()
  }

  loopingQuestion()
}

starter()