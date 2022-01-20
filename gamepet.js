class Characters{
    constructor (name, dob, home) {
        this._name = name 
        this._dob = dob
        this._home = home
    }
    get name(){
        return `${this._name}`
    }
    get age() {
        let date = new Date()
        let age = date.getFullYear() - this._dob
        return age
    }
    get home() {
        return `${this._name} lives in a ${this._home}`
    }
    }

    class Bear extends Characters{
        constructor (name, dob, home){
        super (name, dob, home)
        }
    hunger = 50
    thirsty = 50
    energy = 50
    honeypots = 20
    
    

    eat() {
        console.log(`Yum! ${this._name} feels much better after eating some honey!`)
        this.hunger--
        this.honeypots--
    }

    drink() {
        console.log (`${this._name} enjoyed their honey tea`)
        this.thirsty--
    }

    sleep() {
        console.log (`${this._name} feels much more energtic after their nap, maybe it's time for some more honey!`)
        this.energy++
    }
    honey(){
        console.log(`${this._name} has found a honeypot full of honey to take back home`)
        this.honeypots++
    }

    nothing (){
        console.log(`${this._name} is feeling very very hungry and sleepy, ${this._name} is not a happy bear!`)
        this.hunger ++
        this.energy--
        this.thirsty ++
    }
}
 class Tigger extends Characters {
    constructor (name, dob, home){
        super (name, dob, home)
        }
    hunger = 50
    thirsty = 50
    energy = 50
    clean = 50
    
    eat() {
        console.log(`${this._name} feels ready for some more bouncing after eating! `)
        this.hunger--
        this.energy++
    }

    play(){
        console.log(`${this._name} is feeling happy bouncing around the one hundred acre woods!`)
        this.thirsty++
        this.energy--
    }

    bath(){
        console.log(`All the mud on ${this._name} 's fur from bouncing around is all gone, he looks nice and clean after his bath.`)
        this.clean --
        this.energy++
    }

    nothing() {
        console.log(`${this._name} is feeling really sad as he hasn't bounced around in so long!`)
        this.clean--
        this.energy++
        this.hunger++
    }
}
    class Eeyore extends Characters {
        constructor (name, dob, home){
            super (name, dob, home)
            }
        hunger = 50
        happiness = 50
        energy = 50
        sticks = 10

    sleep(){
        console.log(`${this._name} feels very happy going for a nap, that's his favourite thing to do`)
        this.energy++
        this.happiness++
    }
    
    house(){
        console.log(`${this._name} went for a walk and found a stick to help build his house!`)
        this.energy--
        this.happiness++
    }
    hungry(){
        console.log(`${this._name} feels much better after having something to eat, maybe it's time for a nap now!`)
        this.happiness++
        this.hunger--
    }
    nothing(){
        console.log(`${this._name} is feeling upset as he didn't find enough sticks to built his house and can't go for a nap.`)
        this.happiness--
        this.energy--
        this.sticks--
        
    }
    
}

module.exports = {
    Characters,
    Bear,
    Tigger,
    Eeyore,
    
};





//let winnie = new Bear ("Winnie",2011,"inside a tree")
//let tigger = new Tigger("Tigger", 2012,"in the woods")
//let eeyore = new Donkey("Eeyore", 2010, "by the river")

/*console.log(winnie)
winnie.sleep()
console.log(winnie)
console.log(tigger)
tigger.play()
console.log(tigger)
console.log(eeyore)
eeyore.house()
console.log(eeyore)
*/
