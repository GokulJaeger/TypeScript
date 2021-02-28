class Dog {  
    sound = "barking";  
}  
class Lion {  
    sound = "roaring";  
}  
class Goat {  
    sound = "bleat";  
    swim(){  
        console.log("Cannot Swim!");  
    }  
}  
let lion: Lion = new Dog();  
let dog: Dog = new Lion();  
let lionTwo: Lion = new Goat();
// let goat: Goat = new lion();  

console.log("\nLion Sound: "+lion.sound);  
console.log("\nDog sound: "+dog.sound);  
console.log("\nLion sound: "+lionTwo.sound);  
 