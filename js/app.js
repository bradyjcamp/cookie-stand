'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  aveCookieSale: 4.6,
  custPerHour:[],
  cookiesPerHour:[],
  totalCookieSales: null,
  getCustPerHour: function(){
    // this.custPerHour = `${randomCustNumber(this.minCust, this.maxCust)} customers`;
    for (let i = 0; i < hours.length; i++){
      this.custPerHour.push(randomCustNumber(this.minCust,this.maxCust));
    }
  },
  getCookiesPerHour: function(){
    this.getCustPerHour();
    for (let i = 0; i < this.custPerHour.length; i++){
      this.cookiesPerHour.push(Math.round(this.custPerHour[i] * this.avgCookieSale));
      console.log(this.cookiesPerHour[i]);
      // this.totalCookieSales += (this.cookiesPerHour[i]);
    }
  },
};

function randomCustNumber (min, max) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(number);
  return number;
}

lima.getCookiesPerHour();
console.log(lima);
