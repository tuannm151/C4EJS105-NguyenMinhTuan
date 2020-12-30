// 1.1 
// {
//     let randomNum = Math.random();
//     alert(randomNum.toFixed(2));
// }

// 1.2
// {
//     let arr = [2,5,6,9,10];
//     let randomIndex = Math.floor(Math.random()*arr.length);
//     alert(arr[randomIndex]);
// }

// // 1.3
// {
//     let quizzes = [
//         {
//             question: "Where is Mount Everest?",
//             choices: ['Kenya', 'The Alps', 'India', 'The border between Nepal and China'],
//             answerIdx: 3,
//         },
//         {
//             question: "Which of these countries is the smallest?",
//             choices: ['Russia', 'China', 'Ukraine', 'Canada'],
//             answerIdx: 2,
//         },
//         {
//             question: "What is the name of this js file's author?",
//             choices: ['Tuan', 'Viet', 'Thang', "I don't know."],
//             answerIdx: 0,
//         },
//     ];
//     // 1.4
//     // {
//     //     let randomQuizzIdx = Math.floor(Math.random()*quizzes.length);
//     //     let quizzDetail = quizzes[randomQuizzIdx].question;
//     //     for(let item in quizzes[randomQuizzIdx].choices) {
//     //         quizzDetail += `\n${Number(item)+1}. ${quizzes[randomQuizzIdx].choices[item]}`
//     //     }
//     //     let userAns = Number(prompt(quizzDetail)) - 1;
//     //     if(userAns == quizzes[randomQuizzIdx].answerIdx) {
//     //         alert('Correct!'); 
//     //     } else {
//     //         alert('Wrong!');
//     //     }
//     // }
//     // 1.6 
//     // {
//     //     let length = quizzes.length;
//     //     for(let i = 0; i < length; i++) {
            
//     //             let randomQuizzIdx = Math.floor(Math.random()*quizzes.length);
//     //             let quizzDetail = quizzes[randomQuizzIdx].question;
//     //             for(let item in quizzes[randomQuizzIdx].choices) {
//     //                 quizzDetail += `\n${Number(item)+1}. ${quizzes[randomQuizzIdx].choices[item]}`
//     //             }
//     //             let userAns = Number(prompt(quizzDetail)) - 1;
//     //             if(userAns == quizzes[randomQuizzIdx].answerIdx) {
//     //                 alert('Correct!'); 
//     //             } else {
//     //                 alert('Wrong!');
//     //             }
//     //             quizzes.splice(randomQuizzIdx, 1);
                 
//     //     }
//     //     alert('We are out of question');
//     // }
//     // 1.7 
//     {
//         {
//             let userPoint = 0;
//             let length = quizzes.length;
//             for(let i = 0; i < length; i++) {
                
//                     let randomQuizzIdx = Math.floor(Math.random()*quizzes.length);
//                     let quizzDetail = quizzes[randomQuizzIdx].question;
//                     for(let item in quizzes[randomQuizzIdx].choices) {
//                         quizzDetail += `\n${Number(item)+1}. ${quizzes[randomQuizzIdx].choices[item]}`
//                     }
//                     let userAns = Number(prompt(quizzDetail)) - 1;
//                     if(userAns == quizzes[randomQuizzIdx].answerIdx) {
//                         alert('Correct!');
//                         userPoint++; 
//                     } else {
//                         alert('Wrong!');
//                     }
//                     quizzes.splice(randomQuizzIdx, 1);      
//             }
// ert(`W            ale are out of question \n You answered correctly ${userPoint} out of ${length} questions`);
//         }
//     }
// }

// {
//     // 2.1
//     let words = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
//     let occurences = {};
//     for(let i = 0; i < words.length; i++) {
//         let thisWord = words[i];
//         if(occurences[thisWord]) {
//             occurences[thisWord]++;
//         } else {
//             occurences[thisWord] = 1;
//         }
//     }
//     for(let item in occurences) {
//         console.log(`${item}: ${occurences[item]}`);
//     }
// }

{
    // 2.2
    const inventory = [
        {
            name: 'HP Envy 13aq',
            price: 21000,
            brand: 'HP',
            quantity: 5,
        },
        {
            name: 'Dell XPS 9370',
            price: 30000,
            brand: 'Dell',
            quantity: 1,
        },
        {
            name: 'Dell Inspiron 3567',
            price: 9300,
            brand: 'Dell',
            quantity: 12,
        },
        {
            name: 'Dell Latitude E5450',
            price: 8600,
            brand: 'Dell',
            quantity: 2,
        },
        {
            name: 'Asus Zenbook',
            brand: 'Asus',
            price: 20000,
            quantity: 4,
        },
        {
            name: 'HP Pavilion',
            brand: 'HP',
            price: 14000,
            quantity: 7,
        },]
        let iventoryByBrand = {

        };
        for(let item of inventory) {
            if(iventoryByBrand[item.brand]) {
                iventoryByBrand[item.brand].push(item);
            } else {
                iventoryByBrand[item.brand] = [];
                iventoryByBrand[item.brand].push(item);
            }
        }
        console.log(iventoryByBrand);
        
        // count generation of each brand
        let listGeneOfBrand = prompt("Enter the name of the brand:");
        let totalValue = 0;
        let listGeneAlert = `There are ${iventoryByBrand[listGeneOfBrand].length} generators of ${listGeneOfBrand} in inventory`;
        for(let item of iventoryByBrand[listGeneOfBrand]) {
            listGeneAlert += `\n ${item.name}`;
            totalValue += item.price;
        }
        totalValue *= 1000;
        totalValue = totalValue.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        listGeneAlert += `\n\n The total value is: ${totalValue}`;
        alert(listGeneAlert);
}