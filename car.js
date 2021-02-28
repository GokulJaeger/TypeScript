var car = /** @class */ (function () {
    function car(name, brand, year, color, engine_cc, cyclinders, doorlock, petrol) {
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.engine_cc = engine_cc;
        this.cyclinders = cyclinders;
        this.doorlock = doorlock;
        this.petrol = petrol;
    }
    car.prototype.StartCar = function () {
        if (this.doorlock) {
            if (this.petrol) {
                console.log("Car is started and running");
                return true;
            }
            else {
                console.log("No petrol");
                return false;
            }
        }
        else {
            console.log("Doors are not locked.");
            return false;
        }
    };
    car.prototype.AccelerateCar = function (l1) {
        var val1 = l1;
        if (val1 == true) {
            console.log("Acclerating Your Car");
            return true;
        }
        else {
            console.log("Start your car.");
            return false;
        }
    };
    car.prototype.OpenCarLock = function () {
        console.log("Car is opened.");
    };
    car.prototype.CloseCarLock = function () {
        console.log("Car is locked");
    };
    car.prototype.StopCar = function (l4) {
        var vl3 = l4;
        if (vl3 == true) {
            console.log("Car Stopped");
        }
        else {
            console.log("Car is not running");
        }
    };
    return car;
}());
var car1 = new car("Verna", "Hyundai", 2020, "black", 1998, 4, true, true);
console.log(car1);
console.log("*** Start ***");
var val1 = car1.StartCar();
if (val1 == true) {
    var val2 = car1.AccelerateCar(val1);
    if (val2 == true) {
        car1.StopCar(val2);
    }
}
console.log("*** Stop ***");
car1.OpenCarLock();
car1.CloseCarLock();
