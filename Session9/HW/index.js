// task 1 
// {
//     let promise = new Promise(function(resolved, reject){
//         setTimeout(() => resolved('Promise is the best'),5000);
//         // setTimeout(() => reject(new Error ('oops')),1000);
//     });
//     async function promiseTest() {
//         console.log('pending');
//         let result = await promise;
//         console.log(result);
//     }
//     promiseTest();
//     promise.then(
//         result => {console.log(result)},
//         error => {console.log(error)}
//     )
// }
//// task 2
// {
//     async function fetchApi() {
//         console.log('fetching');
//         const fetchPromise = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
//         console.log('fetched')
//         return await fetchPromise.json();
//     }
//     fetchApi().then(
//         result => console.log(result),
//     )       
// }
// task 4 
// {
//     getRandomNum = () => {
//         return Math.random()*10;
//     }
//     const x = getRandomNum();
//     if (x < 0) {
//         console.log('Failed, x is smaller than 0');
//     } else if (x > 10) {
//         console.log('Failed, x is bigger than 10');
//     } else {
//         console.log('Passed!');
//     }
// }
// task5 
// {
//     let a = 4, b = 16;
//     getRandomNum = (a,b) => {
//         return Math.random()*(b - a) + a;
//     }
//     const x = getRandomNum(a,b);
//     if (x < 4) {
//         console.log(`Failed, x is smaller than 4`);
//     } else if (x > 16) {
//         console.log(`Failed, x is bigger than 16`);
//     } else {
//         console.log('Passed!');
//     }
// }
// task 6
// {
//     function getDistance(x1, y1, x2, y2) {
//          return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
//     }
//     const d = getDistance(3, 10, 0, 6);
//     if (d != 5) {
//     console.log('Failed: the calculation is wrong');
//     } else {
//     console.log('Passed, bravo');
//     }
// }
// task 7 
// {
//     async function fetchApi() {
//        let fetchData = await fetch('http://quotes.rest/qod.json');
//        return await fetchData.json();
//     }
//     fetchApi().then (
//         data => {
//             document.getElementById('quote_content').innerHTML = data['contents']['quotes'][0]['quote'];
//             document.getElementById('quote_author').innerHTML = data['contents']['quotes'][0]['author'];
//         },
//     )
     
// }
// task 8
{
    
}