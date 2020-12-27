// {
//     //object - init
//     let movie = {
//         title: 'Avengers 4: Endgame',
//         releasedYear: 2019,
//         rating: 8.4,
//     }

//     //object - read
//     // method 1:
//     console.log(movie.title);
//     console.log(movie.releasedYear);
//     console.log(movie.rating);

//     // method 2
//     console.log(movie['title']);
//     console.log(movie['releasedYear']);
//     console.log(movie['rating']);

//     // 2.2
//     console.log(movie['director']); // undefine
//     // 2.3
//     let movieProperty = prompt('Enter the property:');
//     if (movie[movieProperty] == null || movie[movieProperty] == undefined) {
//         alert(`${movieProperty} is not exist in our data`);
//     } else {
//         alert(movie[movieProperty]);
//     }

//     // object - update
//     movie.rating = 8.7;
//     movie['rating'] += 0.5;
//     // 3.2
//     movieProperty = promp('What you want to update');
//     let movieProperty = prompt('Enter the property:');
//     if (movie[movieProperty] == null || movie[movieProperty] == undefined) {
//         alert(`${movieProperty} not exist in our data, please add`);
//         let userContent = prompt('Enter the new data:');
//         movie[movieProperty] = userContent;
//     } else {
//         alert(movie[movieProperty]);
//     }
// }

// {
//     let movie1 = {
//         title: 'Avengers 4: Endgame',
//         releasedYear: 2019,
//         rating: 8.4,
//     }
//     let movie2 = {
//         title: 'John Wick',
//         releasedYear: 2014,
//         rating: 7.4,
//     }
//     let movie3 = {
//         title: 'Mission: Impossible',
//         releasedYear: 2018,
//         rating: 7.7,
//     }
//     let movies = [movie1, movie2, movie3];
//     console.log(movies[0]);
//     console.log('------------------------');
//     console.log(movies[movies.length - 1]);
//     console.log('------------------------');
//     // using loop to to print
//     for(let Item of movies){
//         console.log(Item);
//         console.log('....................');
//     }

//     console.log('Print data in the given format');
//     for(let Item of movies){
//         console.log(Item.title);
//         console.log(`Year: ${Item.releasedYear}`);
//         console.log(`Rate: ${Item.rating}`);
//     }
//     // Increase the rate of the last movie in the movies list by 0.7
//     movies[movies.length - 1].rating += 0.7;
// }

// {
//     // video 6 Object containing  array
//     let movie = {
//         title: 'Avengers 4: Endgame',
//         releasedYear: 2019,
//         rating: 8.4,
//         characters: ['Iron Man', 'Spider Man', 'Hulk'],
//     }
//     console.log(movie.title);
//     console.log(`Year: ${movie.releasedYear}`);
//     console.log(`Rate: ${movie.rating}`);
//     let charactersLogging = movie.characters.join(' ');
//     console.log(`Casts: ${charactersLogging}`);
// }

{
    let movie1 = {
        title: 'Avengers 4: Endgame',
        releasedYear: 2019,
        rating: 8.4,
        characters: ['Iron Man', 'Spider Man', 'Hulk'],
    }
    let movie2 = {
        title: 'John Wick',
        releasedYear: 2014,
        rating: 7.4,
        characters: ['John Wick', 'John Wicks car', 'John Wick enemy'],
    }
    let movie3 = {
        title: 'Mission: Impossible',
        releasedYear: 2018,
        rating: 7.7,
        characters: ['Protagonist', 'Atagonist', 'citizen'],
    }
    let movies = [movie1, movie2, movie3];
    for(let Item of movies){
        console.log('-------------------------');
        console.log(Item.title);
        console.log(`Year: ${Item.releasedYear}`);
        console.log(`Rate: ${Item.rating}`);
        let charactersLogging = Item.characters.join(' ');
        console.log(`Casts: ${charactersLogging}`);
    }
}