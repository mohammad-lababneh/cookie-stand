'use strict';
let HOURES = ['6AM : ', '7AM : ', '8AM : ', '9AM : ', '10AM : ', '11AM : ', '12AM :', ' 1PM : ', '2PM : ', ` 3PM : `, `4PM : `, '5PM :', ' 6PM: ', '7PM : '];

let container = document.getElementById('container');
    let table = document.createElement('table');
    container.appendChild(table);



let cities = [];
function city(cityname, max, min, avg) {
    this.cityname = cityname;
    this.max = max;
    this.min = min;
    this.avg = avg;
    this.randomcustomer = [];
    this.salesPerHour = [];
    this.Total = 0;
    cities.push(this);

}
city.prototype.randonCustomerNumber = function () {

    for (let i = 0; i < 14; i++) {
        this.randomcustomer.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));

    }
}
city.prototype.randomCookiesPerHour = function () {

    for (let i = 0; i < 14; i++) {

        this.salesPerHour.push(Math.ceil(this.randomcustomer[i] * this.avg))
        this.Total += this.salesPerHour[i];

    }
    
}
let Seattle = new city('Seattle', 65, 23, 6.3);
let Tokyo = new city('Tokyo', 24, 3, 1.2);
let Dubai = new city('Dubai', 38, 11, 3.7);
let Paris = new city('Paris', 38, 20, 2.3);
let Lima = new city('Lima', 16, 2, 4.6);

function hoursDay() {

    let tr1 = document.createElement('tr');
    table.appendChild(tr1);


    let th1 = document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent ='';

    for (let i = 0; i < HOURES.length; i++) {

        let th2 = document.createElement('th');
        tr1.appendChild(th2);
        th2.textContent = HOURES[i];

    }
let th3 = document.createElement('th')
tr1.appendChild(th3);
th3.textContent = 'Daily Location Total';
}


city.prototype.render = function () {

    let tr1 = document.createElement('tr');
    table.appendChild(tr1);
    let td1 = document.createElement('td');
    tr1.appendChild(td1);
    td1.textContent = this.cityname;

    for (let i = 0; i < 14; i++) {

        let td3 = document.createElement('td');
        tr1.appendChild(td3);
        td3.textContent = this.salesPerHour[i];

    }
let th = document.createElement('th');
tr1.appendChild(th);
th.textContent = this.Total;
}

 function footer (){
    let tr1 = document.createElement('tr');
    table.appendChild(tr1);
    let th1 = document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent = 'Totals';
    let totalOfTotal = 0;
    for (let i = 0; i < HOURES.length; i++) {
        let totalPerHour = 0;
    for (let j = 0; j < cities.length; j++) {
        totalPerHour +=  cities[j].salesPerHour[i];
    totalOfTotal += cities[j].salesPerHour[i];
    }
    let th2 = document.createElement('th')
    tr1.appendChild(th2);
        th2.textContent = totalPerHour;
     }
    let th3 = document.createElement('th');
    tr1.appendChild(th3);
    th3.textContent = totalOfTotal;
    }


hoursDay();

Seattle.randonCustomerNumber();
Seattle.randomCookiesPerHour();
Seattle.render();

Tokyo.randonCustomerNumber();
Tokyo.randomCookiesPerHour();
Tokyo.render();


Dubai.randonCustomerNumber();
Dubai.randomCookiesPerHour();
Dubai.render();


Paris.randonCustomerNumber();
Paris.randomCookiesPerHour();
Paris.render();

Lima.randonCustomerNumber();
Lima.randomCookiesPerHour();
Lima.render();

footer();
