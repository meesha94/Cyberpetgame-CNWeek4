
// Classes & Objects

// OOP - Object Orientated Programming

// let favouriteFilm = "Avatar"
// let secondFilm = "Pirates of the Caribbean"

// console.log(favouriteFilm)

// favouriteFilm.length
// favouriteFilm.toUpperCase()

// let bensTaste = {
//     favouriteFilms: [
//         "Avatar",
//         "Pirates of the Caribbean",
//         "Gladiator",
//         "Spiderman: No way home"
//     ],
//     favActors: [
//         "Christoph Waltz",
//         "Adam Driver",
//         "Jonah Hill"
//     ]
// }

// let tracyTaste = {
//     favouriteFilms: [
//         "PS I love you",
//         "Silverling Playbooks",
//         "Home Alone"
//     ],
//     favActors: [
//         "Bradley Cooper"
//     ]

// }

// class Taste {
//   constructor(name, noFilmsWatched, favFilm) {
//     this.name = name
//     this.favFilm = favFilm
//     this.filmsWatched = noFilmsWatched
//   }

//   favActors = ["Bradley Cooper"]
//   isHuman = true
//   atCodeNation = true
// }

// let bensTaste = new Taste("Ben", 1000, "Gladiator")
// let tracyTaste = new Taste("Tracy", 600, "Silverlinings Playbook")
// let danielTaste = new Taste("Daniel", 20, "Spider Man")

// // tracyTaste.favFilms.push("Home Alone")

// console.log(bensTaste)
// console.log(tracyTaste)
// console.log(danielTaste)

/*class Dog {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  hunger = 0
  thirst = 0
  energy = 10

  play() {
    console.log(`${this.name} is having a great time playing! Woof!`)
    this.energy--
  }
}

let fido = new Dog("Fido", 2)

console.log(fido)
fido.play()
console.log(fido)
*/
class Pet {
    constructor(fname, sname, dob) {
      this._fname = fname
      this._sname = sname
      this.dob = dob
    }
  
    get name() {
      // etc:... profanityFilter(this.fname)
      return `${this._fname} ${this._sname}`
    }
  
    get age() {
      let date = new Date()
      let age = date.getFullYear() - this.dob
      return age
    }
  
    hunger = 0
    thirst = 0
  
    birthday() {
      console.log(`Happy birthday ${this.name}!`)
      this.age++
    }
  }
  
  class Dog extends Pet {
    constructor(fname, sname, dob, bonesBuried) {
      super(fname, sname, dob)
      this.bones = bonesBuried
    }
    energy = 10
  
    play() {
      console.log(`${this.name} is having a great time playing! Woof!`)
      this.energy--
    }
  }
  
  class Cat extends Pet {
    constructor(fname, sname, dob) {
      super(fname, sname, dob)
    }
    energy = 6
    purrs = 0
  
    sleep() {
      console.log(`${this.name} is having a great nap! Purr!`)
      this.energy++
      this.purrs++
    }
}
  
let fido = new Dog("Fido", "Wolfen", 2020, 8)
let thumper = new Dog("Thumper", "Wolfen", 2021, 3)
let mittens = new Cat("Mittens", "Wolfen-Cat", 2021)
  
//console.log(thumper._fname)
 console.log(fido)
// console.log(mittens)
// // fido.play()
// fido.birthday()
// console.log(fido)




