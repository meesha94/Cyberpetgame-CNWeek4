const add = (num1, num2) => {
    return num1 + num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}
 
const subtract = (num1, num2) => {
    return num1 - num2
}



module.exports = {
    name: "Maths Functions",
    desc: "This is some code to help you with your maths",
    add: add,
    multiply,
    subtract,
}