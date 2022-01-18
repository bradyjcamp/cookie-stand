'use strict';

let storeSection = document.getElementById('dataByLocation');
// console.log(storeSection);

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

const shopNames = [];

function Store(location, minCust, maxCust, aveCookieSale){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookieSale = aveCookieSale;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookieSales = null;
  shopNames.push(this);
}

Store.prototype.getCustPerHour = function (){
  // this.custPerHour = `${randomCustNumber(this.minCust, this.maxCust)} customers`;
  for (let i = 0; i < hours.length; i++){
    this.custPerHour.push(randomCustNumber(this.minCust,this.maxCust));
    // console.log(this.custPerHour);
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
// console.log(seattle);

const tokyo = new Store ('Tokyo', 3, 24, 1.2);
// console.log(tokyo);

const dubai = new Store('Dubai', 11, 38, 3.7);
// console.log(dubai);

const paris = new Store('Paris', 11, 38, 3.7);
// console.log(paris);

const lima = new Store('Lima', 2, 16, 4.6);
// console.log(lima);

function randomCustNumber (min, max) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  // console.log(number);
  return number;
}


Store.prototype.renderStore = function(){

  const articleElem = document.createElement('article');
  storeSection.appendChild(articleElem);

  const h2Elem = document.createElement('h2');
  h2Elem.textContent = this.location;
  articleElem.appendChild(h2Elem);

  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for(let i=0; i < this.cookiesPerHour.length; i++){
    const liElem = document.createElement('li');
    liElem.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    ulElem.appendChild(liElem);
  }
  const liElem = document.createElement('li');
  liElem.textContent=`Total: ${this.totalCookieSales} cookies`;
  ulElem.appendChild(liElem);
};

function renderAllStores(){
  for (let i = 0; i < shopNames.length; i++){
    let currentStore = shopNames[i];
    currentStore.getCookiesPerHour();
    currentStore.renderStore();
  }
}

renderAllStores();

