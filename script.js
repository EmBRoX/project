let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    
    actors: {

    },

    genres: [],
    privat: false
};

let lastMovieWatched = prompt("Один из последних просмотренных фильмов?","");
let movieRate = prompt("На сколько оцените его?","");

personalMovieDB.movies[lastMovieWatched] = movieRate;

console.log(personalMovieDB);