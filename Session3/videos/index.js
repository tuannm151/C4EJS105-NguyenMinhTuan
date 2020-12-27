// // init array containing favorite movies
// let movies = ['The umbrella academy', 'Warrior Nun', 'Money heist'];
// console.log(movies);
// // create
// let newMovie = prompt('Enter new movies name:');
// newMovie.push();
// // read
// let thisMovie = prompt(`There are ${movies.length} in the library, please enter movie index:`);
// console.log(movies[thisMovie]);
// // delete
// let i = Number(prompt('Enter index of the movie which will be deleted'));
// movies.splice(i,1);
// i = Number(prompt('Enter index of movies which will be deleted starts:));
// let n = Number(prompt('How many movies will you delete'));
// movies.splice(i,n);

// // read all 
// console.log(menu);
// for(let i = 0 ; i < movies.length/2; i++) {
//     console.log(menu[i]);
// }
// for(let i = 0 ; i < movies.length; i++) {
//     console.log(`${1}. ${menu[i]}`);
// }
// // update all
// for(let i = 0 ; i < movies.length; i++) {
//     menu[i] = menu[i].toLowerCase();
// }
// ------------------------------------------------
// {
//     let userName, maxLength = 15;
//     while (true) {
//         userName = prompt('Register an username');
//         if (userName.length < ) {
//             alert('Good username');
//             break;
//         } else {
//             alert('Your username is too long!');
//         }
//     }
// }
// ------------------------------------------------
// {
//     while (true) {
//         let userChoice = prompt('How many legs does a spider have? \n 1. None \n 2. 4 legs \n 3. 8 legs \n 4. 12 legs');
//         if (userChoice == 1 || userChoice == 2 || userChoice == 4) {
//             alert('Good luck next time');
//         } else {
//             alert('Bravo, you are correct');
//             break;
//         }
//     }
// }
// ------------------------------------------------
{   
    let seqNumbers = prompt('Enter sequence of Number, separated by space');
    let tempArr = seqNumbers.split(' ');
    let arr = tempArr.map(x => Number(x));
    // simple bubble sort algorithm
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    // arr.sort((a,b) => a - b); quicksort algorithm in library
    alert(arr);
    // filter the array into 2 smaller arrays contain odd or even numbers.
    let oddArr = arr.filter(x => Number(x) % 2 != 0);
    let evenArr = arr.filter(x => Number(x) % 2 == 0);
    // remove duplicate numbers in odd arrays not using temporary array
    let length = oddArr.length;
    for(let i = 1; i < length; ) {
        if(oddArr[i] == oddArr[i - 1]) {
            oddArr.splice(i,1);
            length--;
        }
        else {
            i++;
        }
    }
    // remove all duplicate numbers in even arrays using a temporary array
    let tempEvenArr = [];
    tempEvenArr.push(evenArr[0]);
    for(let i = 1; i < evenArr.length; i++) {
        if(evenArr[i] != evenArr[i - 1]) {
            tempEvenArr.push(evenArr[i]);
        }
    }
    alert(oddArr);
    alert(tempEvenArr)
}




