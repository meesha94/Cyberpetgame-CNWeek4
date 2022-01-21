const inquirer = require("inquirer");

let { Characters, Bear, Tigger, Eeyore } = require("./gamepet.js");

let choices
let pet 

const starter = async () => {
  
  let answers = await inquirer.prompt([ {
    type: "list",
    name: "type",
    message: "What character would you like to look after?",
    choices: ["Winnie the Pooh", "Tigger", "Eeyore"],
    },
    {
        type:"input",
        name: "name",
        message:"What would you like to name your character?"
    },
    {
        type:"input",
        name:"home",
        message: "Where would you like your pet to live?",
        
    }
   ])
  
  console.log(choices)
  if (answers.type === "Winnie the Pooh"){
    pet = new Bear (answers.name,2022, answers.home)
    choices = "bear"
  } else if (answers.type === "Tigger"){
      pet = new Tigger (answers.name,2022, answers.home)
  } else {
      pet = new Eeyore (answers.name, 2022, answers.home)
  } 

  loopingQuestion()
  
}

let bearQuestions =  [
      {
        type: "rawlist",
        name: "action",
        message: `What do you want to do with your pet?`,
        choices: ["Eat", "Drink", "Sleep", "Honey", "Nothing"],
      },
    ]

let tigerQuestions = [
   {
        type: "rawlist",
        name: "action",
        message: `What do you want to do with your pet?`,
        choices: ["Eat", "Play", "Bath", "Nothing"],
      },
]

let inquirerQs

const loopingQuestion = async () => {
  if (choices === "bear") {
    inquirerQs = bearQuestions
  } else if (choices === "tiger") {
    inquirerQs = tigerQuestions
  }
  // logic here to end the recursion
  let answers = await inquirer.prompt(inquirerQs)
  
  console.log(choices)
  if (answers.action === "Drink") {
       pet.drink()
  } else if (answers.action === "Eat") {
       pet.eat()
  } else if (answers.action === "Sleep"){
       pet.sleep()
  } else if (answers.action === "Honey"){
       pet.honey()
  } else if (answers.action === "Nothing") {
       pet.nothing()
  } else if (answers.action === "Bath") {
      pet.bath()
  }
  //loopingQuestion()
}

starter()
