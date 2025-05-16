import { Bicycle } from "./bicycle.js";
import { Vehicle } from "./vehicle.js";
// vehicle instance
let ve = new Vehicle();
console.log("Vehicle details: ");
console.log("Color: ", ve.color);
console.log("Wheels: ", ve.wheels);
ve.honkHorn();

console.log("\n" + "-".repeat(15) + "\n");
// bicycle instance
let bi = new Bicycle();
console.log("Bicycle details: ");
console.log("Color: ", bi.color);
console.log("Wheels: ", bi.wheels);
bi.honkHorn();