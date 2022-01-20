/*let whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`)
}

let greet = (time,fn) => {
    if (time < 12) {
        fn("Morning")
    } else if (time > 12 && time < 18){
        fn("Afternoon")
    } else {
        fn ("Evening")
    }
}
greet(14,whichGreeting)
*/
let whichWeather = (tempToday) => {
    console.log(`It's ${tempToday} today.`)
}

let weather = (temp, fn) => {
    if (temp < 0 ) {
        fn("freezing")
    } else if (temp > 0 && temp < 10) {
        fn("a little chilly")
    } else {
        fn("nice out")
    }
}

weather(3, whichWeather)

let myFunction = () => {
    return () => {
        console.log("hello")
    }
}
console.log(myFunction())