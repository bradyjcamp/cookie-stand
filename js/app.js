'use strict';

let storeSection = document.getElementById('dataByLocation');
// console.log(storeSection);

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(location, minCust, maxCust, aveCookieSale){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookieSale = aveCookieSale;
  this.custPerHour = this.getCustPerHour();
  this.cookiesPerHour = this.getCookiesPerHour();
  this.totalCookieSales = totalCookieSales;
}

Store.prototype.getCustPerHour = function (){
  // this.custPerHour = `${randomCustNumber(this.minCust, this.maxCust)} customers`;
  for (let i = 0; i < hours.length; i++){
    this.custPerHour.push(randomCustNumber(this.minCust,this.maxCust));
  }
};

Store.prototype.getCookiesPerHour = function(){
  this.getCustPerHour();
  for (let i = 0; i < this.custPerHour.length; i++){
    this.cookiesPerHour.push(Math.round(this.custPerHour[i] * this.aveCookieSale));
    // console.log(this.cookiesPerHour[i]);
    this.totalCookieSales += (this.cookiesPerHour[i]);
  }
};

const seattle = new Store('Seattle', 23, 65, 6.3);
seattle.getCustPerHour();
seattle.getCookiesPerHour();

const tokyo = new Store ('Tokyo', 3, 24, 1.2);
tokyo.getCustPerHour();
tokyo.getCookiesPerHour();

const dubai = new Store('Dubai', 11, 38, 3.7);
dubai.getCustPerHour();
dubai.getCookiesPerHour();

const paris = new Store('Paris', 11, 38, 3.7);
paris.getCustPerHour();
paris.getCookiesPerHour();

const lima = new Store('Lima', 2, 16, 4.6);
lima.getCustPerHour();
lima.getCookiesPerHour();

// let lima = {
//   location: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   aveCookieSale: 4.6,
//   custPerHour:[],
//   cookiesPerHour:[],
//   totalCookieSales: null,
//   getCustPerHour: function(){
//     // this.custPerHour = `${randomCustNumber(this.minCust, this.maxCust)} customers`;
//     for (let i = 0; i < hours.length; i++){
//       this.custPerHour.push(randomCustNumber(this.minCust,this.maxCust));
//     }
//   },
//   getCookiesPerHour: function(){
//     this.getCustPerHour();
//     for (let i = 0; i < this.custPerHour.length; i++){
//       this.cookiesPerHour.push(Math.round(this.custPerHour[i] * this.aveCookieSale));
//       // console.log(this.cookiesPerHour[i]);
//       this.totalCookieSales += (this.cookiesPerHour[i]);
//     }
//   },
// };

function randomCustNumber (min, max) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  // console.log(number);
  return number;
}

const shopNames = [seattle, tokyo, dubai, paris, lima];

function renderStore(store){

  const articleElem = document.createElement('article');
  storeSection.appendChild(articleElem);

  const h2Elem = document.createElement('h2');
  h2Elem.textContent = store.location;
  articleElem.appendChild(h2Elem);

  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for(let i=0; i < store.cookiesPerHour.length; i++){
    const liElem = document.createElement('li');
    liElem.textContent = `${hours[i]}: ${store.cookiesPerHour[i]} cookies`;
    ulElem.appendChild(liElem);
  }
  const liElem = document.createElement('li');
  liElem.textContent=`Total: ${store.totalCookieSales} cookies`;
  ulElem.appendChild(liElem);
}

function renderAllStores(){
  for (let i = 0; i < shopNames.length; i++){
    let store = shopNames[i];
    store.getCookiesPerHour();
    renderStore(store);
  }
}

renderAllStores();

