class car {
    name: string;
    brand: string;
    year: number;
    color: string;
    engine_cc: number;
    cyclinders: number;
    doorlock: boolean;
    petrol: boolean;
    constructor(name: string, brand: string, year: number, color: string, engine_cc: number, cyclinders: number, doorlock: boolean,
        petrol: boolean) {
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.engine_cc = engine_cc;
        this.cyclinders = cyclinders;
        this.doorlock = doorlock;
        this.petrol = petrol;
    }
        StartCar():boolean{
            if(this.doorlock){
                if(this.petrol){
                    console.log("Car is started and running");
                    return true;
                }
                else{
                    console.log("No petrol");
                    return false;  
                }
            }
            else{
                console.log("Doors are not locked."); 
                return false;
            }
        }
        AccelerateCar(l1:boolean):boolean{
            let val1 = l1;
            if(val1==true){
                console.log("Acclerating Your Car");
                return true;
            }
            else{
                console.log("Start your car.");
                return false;
            }
        }
        OpenCarLock():void{
            console.log("Car is opened.");

        } 
        CloseCarLock():void{
            console.log("Car is locked");

        }
    
        StopCar(l4:boolean):void{
            let vl3=l4;
            if(vl3==true){
                console.log("Car Stopped");
            }
            else{
                console.log("Car is not running");               
            }
        } 
    }
let car1=new car("Verna","Hyundai",2020,"White",1998,4, true, true);
console.log(car1);
console.log("*** Start ***");
let val1 = car1.StartCar();
if(val1==true){
    let val2 = car1.AccelerateCar(val1);
    if(val2==true){
        car1.StopCar(val2);
    }
}
console.log("*** Stop ***");

car1.OpenCarLock();
car1.CloseCarLock();


        
    