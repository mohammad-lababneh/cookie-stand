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

city.prototype.footer = function (){

    let container = document.getElementById('container');
    let table = document.createElement('table');
    container.appendChild(table);

    let tr1 = document.createElement('tr');
    table.appendChild(tr1);


    let th1 = document.createElement('td');
    tr1.appendChild(th1);
    th1.textContent = 'totals';
    
    let totalOfTotal = 0;
    for (let i = 0; i < HOURES.length; i++) {

        let th2 = document.createElement('td');
        tr1.appendChild(th2);
   let TA = 0;
    for (let j = 0; j < HOURES.length; j++) {

    TA +=  this.salesPerHour[i];
    totalOfTotal += this.salesPerHour[i];

    th2.textContent = TA;
    }console.log(   TA);
    let tr2 = document.createElement('tr');
    table.appendChild(tr2);

    let th3 = document.createElement('td');
    tr2.appendChild(th3);
    th3.textContent = totalOfTotal;
  

    }

}


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
Lima.footer();
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// city.prototype.randonNumber = function () {

//     for (let i = 0; i < HOURES.length; i++) {
//         this.randomcustomer.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));

//     }

// }

// city.prototype.cookiesNumber = function (){

//     for (let i = 0; i < 14; i++) {
//                     this.salesPerHour.push(Math.ceil(this.randomcustomer[i] * this.avg));
//                     this.Total += this.salesPerHour[i];
//     }
// }


// let H = function(){


//     let container = document.getElementById('container');
//     let table = document.createElement('table');
//     container.appendChild(table);

//     let tr1 = document.createElement('tr');
//     table.appendChild(tr1);

//     let th1 = document.createElement('th');
//     tr1.appendChild(th1);
//     th1.textContent = 'hours';
//     for (let i = 0; i < HOURES.length; i++) {
//         let th2 = document.createElement('th');
//         tr1.appendChild(th2);
//         th2.textContent = HOURES[i];
//     }
// }

// city.prototype.tab = function () {


//     let container = document.getElementById('container');
//     let table = document.createElement('table');
//     container.appendChild(table);

//     let tr1 = document.createElement('tr');
//     table.appendChild(tr1);


//     let tr2 = document.createElement('tr');
//     table.appendChild(tr2);
// let tdCity = document.createElement('td')
// tr2.appendChild(tdCity);
// tdCity.textContent=this.cityname;
//     for( let i = 0 ; i<this.salesPerHour.length ; i++ )
// {

// let td = document.createElement('td');
// tr2.appendChild(td);
// td.textContent=this.salesPerHour[i];

// }


//     let th3 = document.createElement('th');
//     tr1.appendChild(th3);
//     th3.textContent = 'min';

//     let th4 = document.createElement('th');
//     tr1.appendChild(th4);
//     th3.textContent = 'avg';
//     }

//     for (let std = 0; std < cities.length; std++) {

//         let stdRow = document.createElement('tr');
//         table.appendChild(stdRow);

//         let nameTd = document.createElement('td');
//         stdRow.appendChild(nameTd);
//         nameTd.textContent = cities[std].stdName;

//         let ageTd = document.createElement('td');
//         stdRow.appendChild(ageTd);
//         ageTd.textContent = cities[std].age;

//         let gradeTd = document.createElement('td');
//         stdRow.appendChild(gradeTd);
//         gradeTd.textContent = cities[std].grade;

// }


// H();

// Seattle.randonNumber();
// Seattle.cookiesNumber();
// Seattle.tab();

// Tokyo.randonNumber();
// Tokyo.cookiesNumber();
// Tokyo.tab();

// Dubai.randonNumber();
// Dubai.cookiesNumber();
// Dubai.tab();

// Paris.randonNumber();
// Paris.cookiesNumber();
// Paris.tab();

// Lima.randonNumber();
// Lima.cookiesNumber();
// Lima.tab();
// // //////////////////////////////////////////////////////////////////
// Tokyo.citiesName();

// console.log(cities);
// city.prototype.citiesName = function (){
// console.log( ` hi this is city name ${this.cityname} `);

// }


//     randomcustomer: [],
//     salesPerHour: [],
//     Total: 0,
//     randomCustNumber: function () {
//         for (let i = 0; i < HOURES.length; i++) {
//             this.randomcustomer.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));


//         }
//     },


//     sealsCookies: function () {
//         for (let i = 0; i < 14; i++) {
//             this.salesPerHour.push(Math.ceil(this.randomcustomer[i] * this.avg));
//             this.Total += this.salesPerHour[i];


//         }
//     },



//     render: function () {
//         let container = document.getElementById('sales');
//         let h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.cityname;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let hour = 0; hour < HOURES.length; hour++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${HOURES[hour]} ${this.salesPerHour[hour]} cookies`
//         }
//         let totalLi = document.createElement('li');
//         ulEl.appendChild(totalLi);
//         totalLi.textContent = `Total: ${this.Total} cookies`


//     },



// }



// Seattle.randomCustNumber();
// Seattle.sealsCookies();
// Seattle.render();


// /////////////////////////////////////////////////////////////////////////



// let Tokyo = {
//     cityname: 'Tokyo',
//     max: 3,
//     min: 24,
//     avg: 1.2,

//     randomcustomer: [],
//     salesPerHour: [],
//     Total: 0,
//     randomCustNumber: function () {
//         for (let i = 0; i < HOURES.length; i++) {
//             this.randomcustomer.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));


//         }
//     },


//     sealsCookies: function () {
//         for (let i = 0; i < 14; i++) {
//             this.salesPerHour.push(Math.ceil(this.randomcustomer[i] * this.avg));
//             this.Total += this.salesPerHour[i];


//         }
//     },



//     render: function () {
//         let container = document.getElementById('sales');
//         let h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.cityname;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let hour = 0; hour < HOURES.length; hour++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${HOURES[hour]} ${this.salesPerHour[hour]} cookies`
//         }
//         let totalLi = document.createElement('li');
//         ulEl.appendChild(totalLi);
//         totalLi.textContent = `Total: ${this.Total} cookies`


//     },



// }



// Tokyo.randomCustNumber();
// Tokyo.sealsCookies();
// Tokyo.render();





// //Dubai//////////////////////////////////////////////////////////////////////

// 'use strict';


// let Dubai = {
//     cityname: 'Dubai',
//     max: 38,
//     min: 11,
//     avg: 3.7,

//     randomcustomer: [],
//     salesPerHour: [],
//     Total: 0,
//     randomCustNumber: function () {
//         for (let i = 0; i < HOURES.length; i++) {
//             this.randomcustomer.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));


//         }
//     },


//     sealsCookies: function () {
//         for (let i = 0; i < 14; i++) {
//             this.salesPerHour.push(Math.ceil(this.randomcustomer[i] * this.avg));
//             this.Total += this.salesPerHour[i];


//         }
//     },



//     render: function () {
//         let container = document.getElementById('sales');
//         let h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.cityname;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let hour = 0; hour < HOURES.length; hour++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${HOURES[hour]} ${this.salesPerHour[hour]} cookies`
//         }
//         let totalLi = document.createElement('li');
//         ulEl.appendChild(totalLi);
//         totalLi.textContent = `Total: ${this.Total} cookies`


//     },



// }



// Dubai.randomCustNumber();
// Dubai.sealsCookies();
// Dubai.render();


// //Paris//////////////////////////////////////////////////////////////////////


// 'use strict';


// let Paris = {
//     cityname: 'Paris',
//     max: 38,
//     min: 20,
//     avg: 2.3,

//     randomcustomer: [],
//     salesPerHour: [],
//     Total: 0,
//     randomCustNumber: function () {
//         for (let i = 0; i < HOURES.length; i++) {
//             this.randomcustomer.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));


//         }
//     },


//     sealsCookies: function () {
//         for (let i = 0; i < 14; i++) {
//             this.salesPerHour.push(Math.ceil(this.randomcustomer[i] * this.avg));
//             this.Total += this.salesPerHour[i];


//         }
//     },



//     render: function () {
//         let container = document.getElementById('sales');
//         let h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.cityname;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let hour = 0; hour < HOURES.length; hour++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${HOURES[hour]} ${this.salesPerHour[hour]} cookies`
//         }
//         let totalLi = document.createElement('li');
//         ulEl.appendChild(totalLi);
//         totalLi.textContent = `Total: ${this.Total} cookies`


//     },



// }



// Paris.randomCustNumber();
// Paris.sealsCookies();
// Paris.render();






// //Lima////////////////////////////////////////////////////////////////////


// 'use strict';


// let Lima = {
//     cityname: 'Lima',
//     max: 38,
//     min: 16,
//     avg: 4.6,

//     randomcustomer: [],
//     salesPerHour: [],
//     Total: 0,
//     randomCustNumber: function () {
//         for (let i = 0; i < HOURES.length; i++) {
//             this.randomcustomer.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));


//         }
//     },


//     sealsCookies: function () {
//         for (let i = 0; i < 14; i++) {
//             this.salesPerHour.push(Math.ceil(this.randomcustomer[i] * this.avg));
//             this.Total += this.salesPerHour[i];


//         }
//     },



//     render: function () {
//         let container = document.getElementById('sales');
//         let h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.cityname;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let hour = 0; hour < HOURES.length; hour++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${HOURES[hour]} ${this.salesPerHour[hour]} cookies`
//         }
//         let totalLi = document.createElement('li');
//         ulEl.appendChild(totalLi);
//         totalLi.textContent = `Total: ${this.Total} cookies`


//     },



// }



// Lima.randomCustNumber();
// Lima.sealsCookies();
// Lima.render();

