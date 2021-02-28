var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.absbrake = function () {
        console.log("abs is activated\n");
    };
    return Car;
}());
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(val) {
        return _super.call(this, val) || this;
    }
    SUV.prototype.drivecar = function () {
        console.log(this.name + " is a SUV model");
        return true;
    };
    SUV.prototype.stopcar = function () {
        console.log("stop the car");
        return "stop";
    };
    SUV.prototype.startcar = function () {
        console.log("car is running");
        return "car started";
    };
    SUV.prototype.cruisecontrol = function () {
        console.log("cruise control activated");
        return true;
    };
    return SUV;
}(Car));
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan(val) {
        return _super.call(this, val) || this;
    }
    Sedan.prototype.drivecar = function () {
        console.log(this.name + " is a Sedan model");
        return true;
    };
    Sedan.prototype.stopcar = function () {
        console.log("stop the car");
        return "stop";
    };
    Sedan.prototype.startcar = function () {
        console.log("car is running");
        return "car started";
    };
    Sedan.prototype.cruisecontrol = function () {
        console.log("cruise control activated");
        return true;
    };
    return Sedan;
}(Car));
var Hatchback = /** @class */ (function (_super) {
    __extends(Hatchback, _super);
    function Hatchback(val) {
        return _super.call(this, val) || this;
    }
    Hatchback.prototype.drivecar = function () {
        console.log(this.name + " is a Hatchback model");
        return true;
    };
    Hatchback.prototype.stopcar = function () {
        console.log("stop the car");
        return "stop";
    };
    Hatchback.prototype.startcar = function () {
        console.log("car is running");
        return "car started";
    };
    Hatchback.prototype.cruisecontrol = function () {
        console.log("cruise control activated");
        return true;
    };
    return Hatchback;
}(Car));
var Mahindra = new SUV("XUV500");
Mahindra.startcar();
Mahindra.drivecar();
Mahindra.cruisecontrol();
Mahindra.stopcar();
Mahindra.absbrake();
var Volkswagen = new Hatchback("GT_TSI");
Volkswagen.startcar();
Volkswagen.drivecar();
Volkswagen.cruisecontrol();
Volkswagen.stopcar();
Volkswagen.absbrake();
var Hyundai = new Sedan("Verna");
Hyundai.startcar();
Hyundai.drivecar();
Hyundai.cruisecontrol();
Hyundai.stopcar();
Hyundai.absbrake();
