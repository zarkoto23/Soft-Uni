
class Vehicle{

  constructor(vehicleType, vehicleModel, vehicleParts, vehicleFuel){
    this.type=vehicleType;
    this.model=vehicleModel;

    vehicleParts.quality=vehicleParts.engine*vehicleParts.power
    this.parts=vehicleParts
    this.fuel=vehicleFuel
}
    drive(num){
      this.fuel-=num
    }
  }
  



let vehicle = new Vehicle('a', 'b', parts={engine:4, power:50}, 100,);
vehicle.drive(5);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
