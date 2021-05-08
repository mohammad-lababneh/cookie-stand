'use strict';
let HOURES = ['6AM : ', '7AM : ', '8AM : ', '9AM : ', '10AM : ', '11AM : ', '12AM :', ' 1PM : ', '2PM : ',` 3PM : `  , `4PM : `, '5PM :', ' 6PM: ', '7PM : '];
let Seattle = {
    cityname: 'Seattle',
    max: 65,
    min: 23,
    avg: 6.3,

    randomcustomer: [],
    salesPerHour: [],
    Total: 0,
    randomCustNumber: function () {
        for (let i = 0; i < HOURES.length; i++) {
            this.randomcustomer.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));


        }
    },


    sealsCookies: function () {
        for (let i = 0; i < 14; i++) {
            this.salesPerHour.push(Math.ceil(this.randomcustomer[i] * this.avg));
            this.Total += this.salesPerHour[i];


        }
    },



    render: function () {
        let container = document.getElementById('sales');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.cityname;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let hour = 0; hour < HOURES.length; hour++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${HOURES[hour]} ${this.salesPerHour[hour]} cookies`
        }
        let totalLi = document.createElement('li');
        ulEl.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.Total} cookies`


    },

}



// Seattle.randomCustNumber();
// Seattle.sealsCookies();
// Seattle.render();


/////////////////////////////////////////////////////////////////////////



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

