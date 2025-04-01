import { Vehicle } from "./vehicle.js";

class Bicycle extends Vehicle {
    constructor(color="blue", wheels=2, horn="honk honk"){
        super(color, wheels, horn);
    }
}

export {
    Bicycle
};