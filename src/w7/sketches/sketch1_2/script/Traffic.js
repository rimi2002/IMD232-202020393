class Traffic {
  constructor() {
    this.vehicles = [];
  }

  run() {
    this.vehicles.forEach((eachVehicle) => {
      eachVehicle.seperate(this.vehicles);
      eachVehicle.update();
      eachVehicle.borderInfinite;
      eachVehicle.disply();
    });
  }

  addVehicle(x, y) {
    this.vehicles.push(
      new Vehicle(x, y, 8, 5, 0.1, color(random(360), 100, 50))
    );
  }
}
