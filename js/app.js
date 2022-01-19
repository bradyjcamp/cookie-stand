'use strict';

let storeSection = document.getElementById('dataByLocation');

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
  for (let i = 0; i < hours.length; i++){
    this.custPerHour.push(randomCustNumber(this.minCust,this.maxCust));
  }
};
//grand total outside for loop
//let total should be inbetween for loops
Store.prototype.getCookiesPerHour = function(){
  this.getCustPerHour();
  for (let i = 0; i < this.custPerHour.length; i++){
    this.cookiesPerHour.push(Math.round(this.custPerHour[i] * this.aveCookieSale));
    this.totalCookieSales += (this.cookiesPerHour[i]);
  }
};

new Store('Seattle', 23, 65, 6.3);
new Store ('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 11, 38, 3.7);
new Store('Lima', 2, 16, 4.6);

function randomCustNumber (min, max) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}


function renderHeader (){

  const tableElem = document.createElement('table');
  storeSection.appendChild(tableElem);

  const theadElem = document.createElement('thead');
  tableElem.appendChild(theadElem);

  const row1 = document.createElement('tr');
  theadElem.appendChild(row1);

  const th2Elem = document.createElement('th');
  row1.appendChild(th2Elem);

  for(let i=0; i < hours.length; i++){
    const th1Elem = document.createElement('th');
    th1Elem.textContent = `${hours[i]}`;
    row1.appendChild(th1Elem); 
  }
  const th3Elem = document.createElement('th');
  th3Elem.textContent = 'Daily Location Total';
  row1.appendChild(th3Elem);
}
renderHeader();

Store.prototype.renderStore = function(){

  // grab the table

  let table = document.querySelector('table');

  // create row add to table

  const row2 = document.createElement('tr');
  table.appendChild(row2);

  // first cell is name of store add to row

  const th4Elem = document.createElement('th');
  th4Elem.textContent = this.location;
  row2.appendChild(th4Elem);



  // create more cells using stores cookie data
  // for loop (105-110) use td instead of li
  // then add td to row
  for(let i=0; i < this.cookiesPerHour.length; i++){
    const tdElem = document.createElement('td');
    tdElem.textContent = `${this.cookiesPerHour[i]} cookies`; // remove string to just add cookie number otherwise you will get NaN
    row2.appendChild(tdElem);
  }

  //create another td (113-115) for total cookie sales per location 

  const td2Elem = document.createElement('td');
  td2Elem.textContent = `${this.totalCookieSales} cookies`;
  row2.appendChild(td2Elem);
};

function renderFooter(){
  let table = document.querySelector('table');
  const footElem = document.createElement('tfoot');
  table.appendChild(footElem);

  const row3 = document.createElement('tr');
  footElem.appendChild(row3);

  const th5Elem = document.createElement('th');
  th5Elem.textContent = 'Totals';
  row3.appendChild(th5Elem);
}
renderFooter();

function renderAllStores(){
  for (let i = 0; i < shopNames.length; i++){
    let currentStore = shopNames[i];
    currentStore.getCookiesPerHour();
    currentStore.renderStore();
  }
}

renderAllStores();
