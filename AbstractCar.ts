abstract class Car {
  public name: string;


  constructor(name: string) {
    this.name = name;
  }
  public absbrake() {
    console.log("abs is activated\n");
  }
  abstract drivecar(): boolean;
  abstract startcar(): string;
  abstract cruisecontrol(): boolean;

  abstract stopcar(): string;
}
class SUV extends Car {
  constructor(val: string) {
    super(val);
  }
  drivecar(): boolean {
    console.log(this.name+" is a SUV model");
    return true;
  }
  stopcar(): string {
    console.log("stop the car");
    return "stop";
  }
  startcar(): string {
    console.log("car is running");
    return "car started";
  }

  cruisecontrol(): boolean {
    console.log("cruise control activated");
    return true;
  }
}

class Sedan extends Car {
  constructor(val: string) {
    super(val);
  }
  drivecar(): boolean {
    console.log(this.name+" is a Sedan model");
    return true;
  }
  stopcar(): string {
    console.log("stop the car");
    return "stop";
  }
  startcar(): string {
    console.log("car is running");
    return "car started";
  }

  cruisecontrol(): boolean {
    console.log("cruise control activated");
    return true;
  }
}

class Hatchback extends Car {
  constructor(val: string) {
    super(val);
  }
  drivecar(): boolean {
    console.log(this.name+" is a Hatchback model");
    return true;
  }
  stopcar(): string {
    console.log("stop the car");
    return "stop";
  }
  startcar(): string {
    console.log("car is running");
    return "car started";
  }

  cruisecontrol(): boolean {
    console.log("cruise control activated");
    return true;
  }
}

let Mahindra: SUV = new SUV("XUV500");
Mahindra.startcar();
Mahindra.drivecar();
Mahindra.cruisecontrol();
Mahindra.stopcar();
Mahindra.absbrake();

let Volkswagen: Hatchback = new Hatchback("GT_TSI");
Volkswagen.startcar();
Volkswagen.drivecar();
Volkswagen.cruisecontrol();
Volkswagen.stopcar();
Volkswagen.absbrake();

let Hyundai: Sedan = new Sedan("Verna");
Hyundai.startcar();
Hyundai.drivecar();
Hyundai.cruisecontrol();
Hyundai.stopcar();
Hyundai.absbrake();