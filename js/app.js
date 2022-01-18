'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let seattle = {
  location: 'Seattle',
  minCust: 22,
  maxCust: 65,
  aveCookieSale: 6.3,
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
      this.cookiesPerHour.push(Math.round(this.custPerHour[i] * this.aveCookieSale));
      console.log(this.cookiesPerHour[i]);
      this.totalCookieSales += (this.cookiesPerHour[i]);
    }
  },
};

let tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  aveCookieSale: 1.2,
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
      this.cookiesPerHour.push(Math.round(this.custPerHour[i] * this.aveCookieSale));
      console.log(this.cookiesPerHour[i]);
      this.totalCookieSales += (this.cookiesPerHour[i]);
    }
  },
};

let dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  aveCookieSale: 3.7,
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
      this.cookiesPerHour.push(Math.round(this.custPerHour[i] * this.aveCookieSale));
      console.log(this.cookiesPerHour[i]);
      this.totalCookieSales += (this.cookiesPerHour[i]);
    }
  },
};

let paris = {
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
      this.cookiesPerHour.push(Math.round(this.custPerHour[i] * this.aveCookieSale));
      console.log(this.cookiesPerHour[i]);
      this.totalCookieSales += (this.cookiesPerHour[i]);
    }
  },
};


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
      this.cookiesPerHour.push(Math.round(this.custPerHour[i] * this.aveCookieSale));
      // console.log(this.cookiesPerHour[i]);
      this.totalCookieSales += (this.cookiesPerHour[i]);
    }
  },
};

function randomCustNumber (min, max) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  // console.log(number);
  return number;
}

seattle.getCookiesPerHour();
tokyo.getCookiesPerHour();
dubai.getCookiesPerHour();
paris.getCookiesPerHour();
lima.getCookiesPerHour();
console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);
