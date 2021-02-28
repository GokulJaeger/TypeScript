var Dog = /** @class */ (function () {
    function Dog() {
        this.sound = "barking";
    }
    return Dog;
}());
var Lion = /** @class */ (function () {
    function Lion() {
        this.sound = "roaring";
    }
    return Lion;
}());
var Goat = /** @class */ (function () {
    function Goat() {
        this.sound = "bleat";
    }
    Goat.prototype.swim = function () {
        console.log("Cannot Swim!");
    };
    return Goat;
}());
var lion = new Dog();
var dog = new Lion();
var lionTwo = new Goat();
console.log("Lion Sound: " + lion.sound);
console.log("Dog sound: " + dog.sound);
console.log("Lion sound: " + lionTwo.sound);
3;
//let goat: Goat = new Lion(); // IDE & compiler error 
