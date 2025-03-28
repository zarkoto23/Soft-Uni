class ShadyCarDealership {
  constructor(dealerName) {
    this.dealerName = dealerName;
    this.availableCars = [];
    this.soldCars = [];
    this.revenue = 0;
  }

  addCar(model, year, mileage, price) {
    if (model === "" || year < 0 || mileage < 0 || price < 0) {
      throw new Error("Invalid car");
    }

    price = Number(price);
    this.availableCars.push({ model, year, mileage, price });
    return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(
      2
    )}$`;
  }

  sellCar(model, desiredYear) {
    const carIndex = this.availableCars.findIndex((car) => car.model === model);

    if (carIndex === -1) {
      throw new Error(`${model} was not found!`);
    }
    const car = this.availableCars[carIndex];

    let discount = 0;
    const yearDifference = car.year - desiredYear;
    if (yearDifference > 5) {
      discount = 0.2;
    } else if (yearDifference >= 0) {
      discount = 0;
    } else {
      discount = 0.1;
    }
    const soldPrice = Number((car.price * (1 - discount)).toFixed(2));
    this.revenue += soldPrice;

    this.soldCars.push({
      model: car.model,
      year: car.year,
      mileage: car.mileage,
      soldPrice,
    });
    this.availableCars.splice(carIndex, 1);
    return `${model} (${car.year}) was sold for ${soldPrice.toFixed(2)}$`;
  }

  prepareCarForSale(model) {
    const car = this.availableCars.find((car) => car.model === model);
    if (!car) {
      return `${model} was not found for preparation!`;
    }
    car.mileage = Number(car.mileage / 2);
    car.price = Number((car.price * 1.3).toFixed(2));
    return `${model} (${car.year}) is prepared for sale with ${
      car.mileage
    } km. - ${car.price.toFixed(2)}$`;
  }

  salesJournal(criteria) {
    if (criteria === "model") {
      this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
    } else if (criteria === "year") {
      this.soldCars.sort((a, b) => b.year - a.year);
    } else {
      throw new Error("Invalid criteria!");
    }

    const result = [
      `${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$`,
      `${this.soldCars.length} cars sold:`,
    ];

    this.soldCars.forEach((car) => {
      result.push(
        `${car.model} (${car.year}) / ${
          car.mileage
        } km. / ${car.soldPrice.toFixed(2)}$`
      );
    });

    return result.join("\n");
  }
}



// const dealership = new ShadyCarDealership('Shady Motors');
// console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
// console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
// console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
// console.log(dealership.addCar('Toyota Yaris', 2015, 80000, 18000));



// const dealership = new ShadyCarDealership('Shady Motors');
// console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
// console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
// console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
// console.log(dealership.addCar('Toyota Yaris', 2015, 80000, 18000));
// console.log(dealership.prepareCarForSale('Honda CR-V'));
// console.log(dealership.prepareCarForSale('Honda Jazz'));


// const dealership = new ShadyCarDealership('Shady Motors');
// console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
// console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
// console.log(dealership.addCar('Toyota Yaris', 2015, 80000, 18000));
// console.log(dealership.prepareCarForSale('Honda CR-V'));
// console.log(dealership.prepareCarForSale('BMW X3'));
// console.log(dealership.sellCar('Honda CR-V', 2012));
// console.log(dealership.sellCar('BMW X3', 2012));
// console.log(dealership.sellCar('Toyota Yaris', 2012));


const dealership = new ShadyCarDealership('Shady Motors');
console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
console.log(dealership.prepareCarForSale('Honda CR-V'));
console.log(dealership.prepareCarForSale('BMW X3'));
console.log(dealership.sellCar('Honda CR-V', 2012));
console.log(dealership.sellCar('BMW X3', 2012));
console.log(dealership.salesJournal('model'));
