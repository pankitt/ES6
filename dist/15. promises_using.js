'use strict';

var movieList = document.getElementById('movies');

function addMovieToList(movie) {
    var img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}

// ES5
/*function getData(url, done) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            console.log(json);
            done(json.Search);
        } else {
            console.error(xhr.statusText);
        }
    };

    xhr.onerror = function (error) {
        console.error(error);
    };

    xhr.send();

let search = 'spider man';

getData(`http://www.omdbapi.com/?apikey=57d13b99&s=${search}`)
    .then(movies =>
        movies.forEach(movie =>
            addMovieToList(movie)))
    .catch(error => console.log(error));
}*/

// ES6
function getData(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status === 200) {
                var json = JSON.parse(xhr.response);
                resolve(json.Search);
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = function (error) {
            reject(error);
        };

        xhr.send();
    });
}

var batman = getData('http://www.omdbapi.com/?apikey=57d13b99&s=batman');
var superman = getData('http://www.omdbapi.com/?apikey=57d13b99&s=superman');

/*batman
    .then(movies =>
        movies.forEach(movie =>
            addMovieToList(movie)))
    .catch(error => console.log(error));

superman
    .then(movies =>
        movies.forEach(movie =>
            addMovieToList(movie)))
    .catch(error => console.log(error));*/

Promise.race([batman, superman]).then(function (movies) {
    return movies.forEach(function (movie) {
        return addMovieToList(movie);
    });
}).catch(function (error) {
    return console.log(error);
});

function go(num) {
    return new Promise(function (resolve, reject) {
        var delay = Math.ceil(Math.random() * 3000);
        console.log(num, delay);
        setTimeout(function () {
            if (delay > 2000) {
                reject(num);
            } else {
                resolve(num);
            }
        }, delay);
    });
}
var p1 = go(1);
var p2 = go(2);
var p3 = go(3);

//Promise.race([p1, p2, p3])
Promise.all([p1, p2, p3]).then(function (value) {
    return console.log(value);
}).catch(function (error) {
    return console.error(error);
});