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
  } else if (answers.type === "Tigger"){
      pet = new Tigger (answers.name,2022, answers.home)
  } else {
      pet = new Eeyore (answers.name, 2022, answers.home)
  } 

  loopingQuestion()
  
}

const loopingQuestion = async () => {
  // logic here to end the recursion
  let answers = await inquirer.prompt(
    [
      {
        type: "rawlist",
        name: "action",
        message: `What do you want to do with your pet?`,
        choices: ["Eat", "Drink", "Sleep", "Honey", "Nothing"],
      },
    ]
  )
  console.log(choices)
  if (answers.action === "Drink") {
         Bear.drink()
  } else if (answers.type === "Eat") {
        Bear.eat()
  } else if (answers.type === "Sleep"){
       Bear.sleep()
  } else if (answers.type === "Honey"){
       Bear.honey()
  } else if (answers.type === "Nothing") {
       Bear.nothing()
  };

  //loopingQuestion()
}

starter()