'use strict';

function applyForVisa(documents) {
    console.log('Processing an application...');

    //ES5
    /*setTimeout( function () {
        Math.random() > .5 ? resolve({}) : reject('The visa is denied :(');
    }, 2000);*/

    //ES6
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject('The visa is denied :(');
        }, 2000);
    });
    return promise;
}

function getVisa(visa) {
    console.info('Visa received :)');
    //return visa;
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return resolve(visa);
        }, 2000);
    });
}
function bookHotel(visa) {
    console.log(visa);
    console.log('Book a hotel');
    /*return new Promise(function (resolve, reject) {
        resolve({});
        //reject('No places');
    })*/
    return Promise.resolve(visa);
    //return Promise.reject('No places');
}
function buyTickets(booking) {
    console.log('Buy tickets');
    console.log('Reservation ', booking);
}

// ES5
/*applyForVisa({},
    function (visa) {
        console.info('Visa received :)');
        bookHotel(visa, function (reservation) {
            buyTickets(reservation, function () {
                
            }, function (error) {
                
            });
        }, function (error) {
            
        });
    },
    function (reason) {
        console.error(reason);
    }
);*/

// ES 6
applyForVisa({})

// v1
/*.then(function (visa) {
    console.info('Visa received :)');
},
function (reason) {
    console.error(reason);
});*/

// v2
.then(getVisa).then(bookHotel).then(buyTickets).catch(function (error) {
    return console.error(error);
});