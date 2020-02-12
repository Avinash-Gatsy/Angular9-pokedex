// classical inheritance
class Vehicle {
    wheels:number
    constructor(wheels){
        this.wheels = wheels;
    }
}
class Car extends Vehicle{
    model:string;
    color:string;
    constructor(model, color, wheels){
        super(wheels);
        this.model = model;
        this.color = color;
    }
    printDetails(){
        console.log(`${this.model}-${this.color}-${this.wheels} wheeler`);
    }
}
let dannyCar = new Car('polo','red', 4);
dannyCar.printDetails();
