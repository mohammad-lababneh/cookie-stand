'use strict'
'use strict';
let HOURES = ['6AM : ', '7AM : ', '8AM : ', '9AM : ', '10AM : ', '11AM : ', '12AM :', ' 1PM : ', '2PM : ', ` 3PM : `, `4PM : `, '5PM :', ' 6PM: ', '7PM : '];




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


city.prototype.randonNumber = function () {

    for (let i = 0; i < 14; i++) {
        this.randomcustomer.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));

    }
}


city.prototype.randomAvg = function () {

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

    let container = document.getElementById('container');
    let table = document.createElement('table');
    container.appendChild(table);

    let tr1 = document.createElement('tr');
    table.appendChild(tr1);


    let th1 = document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent = 'hours';

    for (let i = 0; i < HOURES.length; i++) {

        let th2 = document.createElement('th');
        tr1.appendChild(th2);
        th2.textContent = HOURES[i];

    }
}


city.prototype.tab = function () {

    let container = document.getElementById('container');
    let table = document.createElement('table');
    container.appendChild(table);

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

}

// city.prototype.footer = function (){

//     let container = document.getElementById('container');
//     let table = document.createElement('table');
//     container.appendChild(table);

//     let tr1 = document.createElement('tr');
//     table.appendChild(tr1);


//     let th1 = document.createElement('td');
//     tr1.appendChild(th1);
//     th1.textContent = 'totals';
    
//     let totalOfTotal = 0;
//     for (let i = 0; i < HOURES.length; i++) {

//         let th2 = document.createElement('td');
//         tr1.appendChild(th2);
//    let TA = 0;
//     for (let j = 0; j < HOURES.length; j++) {

//     TA +=  this.salesPerHour[i];
//     totalOfTotal += this.salesPerHour[i];

//     th2.textContent = TA;
//     }console.log(   TA);
//     let tr2 = document.createElement('tr');
//     table.appendChild(tr2);

//     let th3 = document.createElement('td');
//     tr2.appendChild(th3);
//     th3.textContent = totalOfTotal;
  

//     }

// }


hoursDay();

Seattle.randonNumber();
Seattle.randomAvg();
Seattle.tab();

Tokyo.randonNumber();
Tokyo.randomAvg();
Tokyo.tab();


Dubai.randonNumber();
Dubai.randomAvg();
Dubai.tab();


Paris.randonNumber();
Paris.randomAvg();
Paris.tab();

Lima.randonNumber();
Lima.randomAvg();
Lima.tab();

addAcity ();
// Lima.footer();

let lababnehCity = document.getElementById("lababnehCity");
lababnehCity.addEventListener('submit', addAcity);

function addAcity (event){

event.preventDefault();

let cityName = event.target.city.value;
let max = event.target.max.value;
let min = event.target.min.value;
let avg = event.target.avg.value;
let newcity = new city(cityName,max,min,avg);
console.log(cityName ,max , min, avg,);

newcity.randonNumber();
newcity.randomAvg();
newcity.tab();
}


