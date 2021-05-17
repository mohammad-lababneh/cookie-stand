// 'use strict';
// let Seattle = {
//     cityname: 'Seattle',
//     max: 65,
//     min: 23,
//     avg: 6.3,
//     HOURE: ['6AM: ', '7AM: ', '8AM: ', '9AM: ', '10AM: ', '11AM: ', '12AM:', ' 1PM: ', '2PM: ', '3PM: 4', 'PM: ', '5PM:', ' 6PM: ', '7PM: '],
//     Rnum: 0,
//     avgcust: 0,
//     s: 0,
//     cookiesPH: [],
//     CustArray: [],


//     getRandomIntInclusive: function (min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },


//     cookiesPerHour: function () {
//         for (let i = 0; i < 14; i++) {

//             let purchases = (this.getRandomIntInclusive(this.min, this.max) * this.avg);

//             this.cookiesPH[i] = purchases;
// this.Rnum+=this.getRandomIntInclusive(this.min, this.max) * this.avg;
//             return this.cookiesPH;
//             return this.Rnum;
//         }
//     },


//     render: function () {

//         let divE = document.getElementById('container');

//         let articleElement = document.createElement('article');
//         divE.appendChild(articleElement);
//         let h1E = document.createElement('h1');
//         h1E.textContent = this.cityname;
//         articleElement.appendChild(h1E);
//         let ul = document.createElement('ul');
//         articleElement.appendChild(ul);

//         for (let i = 0; i < 14; i++) {
//             let LIE = document.createElement('li');
//             LIE.textContent = `${this.HOURE[i]} ${this.cookiesPerHour(this.min, this.max)} cookies `;
//             ul.appendChild(LIE);
//         }
//        let LIT = document.createElement('li');
//        LIT.textContent= `total ${this.Rnum} cookies `
//        ul.appendChild(LIT);
//     }

// }
// Seattle.render();




