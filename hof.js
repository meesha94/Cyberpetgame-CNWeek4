
let myFunction = () => {
    console.log ("hello code nation");
}

let greet = (func, number) => {
for (let i = 0; i < number; i++) {
   func();
}
};
greet(myFunction, 5); 


let sumFunction = (num1, num2) => {
    return (num1 + num2) 
};

let totalSum = (num1, num2, noTimes,fn) => {
    let runningTotal = 0
    for ( i =0; i < (noTimes); i++) {
        runningTotal = (fn(num1,num2) + runningTotal) 
    }
console.log(runningTotal)
}

totalSum(2,3,5, sumFunction)

const array = [2, 34, 6, 45, 5];

const map = array.map(x => x * 3);
console.log(map);






const multiply = (a,b) => {
    return a*b
}

const add = (a,b) => {
    return a+b
}

const divide =(a,b) => {
    return a/b
}

const subtract =(a,b) => {
    return a-b
}

const doMath = (num1) => {
    return (num2, fn) => {
        return fn(num1,num2)
    }
}


console.log(doMath(3)(9,add));

