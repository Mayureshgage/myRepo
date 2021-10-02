//example of encapsulation.
let employee = {
baseSalary : 1233,
      HRA : 2000,
     rate : 20,

     getWage: function() {
         return this.baseSalary+(this.HRA * this.rate);
     }    

 };
 console.log(employee.getWage());