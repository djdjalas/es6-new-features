export default () => {

  /*
    this will fail because this in console.log is out of scope

    var person = {
      name: "John",
      cars: ["ferrari", "lambo", "land rover evoque"],
      printProfile: function printProfile() {
        this.cars.forEach(function (car) {
          console.log(this.name.toUpperCase() + " has " + car);
        });
      }
    };

    we can fix this by using

      1.bind is a bit weird but does the job
        var person = {
          name: "John",
          cars: ["ferrari", "lambo", "land rover evoque"],
          printProfile: function printProfile() {
            this.cars.forEach(function (car) {
            console.log(`${this.name.toUpperCase()} has a ${car}`);
            }.bind(this));
          }
        };

      2.self pattern a little bit better but can be confusing
        var person = {
          name: "John",
          cars: ["ferrari", "lambo", "land rover evoque"],
          printProfile: function printProfile() {
            const self = this;
            this.cars.forEach(function (car) {
            console.log(`${self.name.toUpperCase()} has a ${car}`);
            });
          }
        };

      3. ES6 arrow functions
        see code below

  */

  var person = {
    name: "John",
    cars: ["ferrari", "lambo", "land rover evoque"],
    printProfile: function printProfile() {
      const self = this;
      this.cars.forEach(car => {
        console.log(`${this.name.toUpperCase()} has a ${car}`);
      });
    }
  };

  person.printProfile();

  // but there is a catch with this approach

};
