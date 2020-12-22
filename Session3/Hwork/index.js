// {
//     // Task 1
//     let a = 6, b = 5;
//     console.log(a, b); // 6 5
//     // Ex1: swapping method 1 using temporary variable
//     let temp = a;
//     a = b; 
//     b = temp;
//     console.log(a, b); // 5 6
//     // Ex2: swapping not using temporary variable
//     [a, b] = [b, a];
//     console.log(a, b); // 6 5
// }

// {
//     // Task 2 - 3
//     let sallute = 'Hello beauty there';
//     let a = sallute.split(" ");
//     console.log(a);
//     console.log(...a);
// }

{
    // Task 4
    let products = ['Jeans', 'T-shirt', 'Socks'];
    let newItem, itemIndex;
    while (true) {
        // C - Create | R - Read | U - Update 
        let adminCommand = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U, D, Q)? \nC. Create new product \nR. List current product \nU. Update product \nD. Delete product \nQ. Quit');
        adminCommand = adminCommand.toUpperCase();
        if (adminCommand == 'C') {
            newItem = prompt('Enter the name of new item:');
            products.push(newItem);
            alert('Done');
        } else if (adminCommand == 'R') {
            // console.log('The current items are:');
            // for (let i = 0; i < products.length; i++) {
            //     console.log(`${i}. ${products[i]}`);
            // }
            let tempList = []; 
            let tempItem; // using temporary varible to modify then push to tempList array.
            for(let i = 0; i < products.length; i++) {
                tempItem = `${i+1}.  ${products[i]}`;
                tempList.push(tempItem);
            }
            tempList = tempList.join('\n');// convert tempList array to string
            alert(`The current items are:\n${tempList}`);
        } else if (adminCommand == 'U') {
            itemIndex = Number(prompt('Enter the position you want to update:'));
            itemIndex--;
            products[itemIndex] = prompt('Enter the new name of the item:');
        } else if (adminCommand == 'D') {
            itemIndex = Number(prompt('Enter the position you want to delete:'));
            products.splice(itemIndex - 1, 1);
        } else if (adminCommand == 'Q') {
            break;
        } else {
            alert('Invalid command, please enter again!');
        }
    }
}

// {   
//     // Task 5
//     let totalSum = 0;
//     let tempArr = [];
//     let seqNumbers = prompt("Enter a sequence of Number, separated by commas(,)");
//     tempArr = seqNumbers.split(',');
//     for(let i = 0; i < tempArr.length; i++) {
//         totalSum += Number(tempArr[i]);
//     }
//     alert(`The sum of them is ${totalSum}`);
// }

// {
//     // Task 6
//     {   
//         let minIndex;
//         let tempArr = [];
//         let seqNumbers = prompt("Enter a sequence of Number, separated by commas(,)");
//         tempArr = seqNumbers.split(',');
//         minIndex = 0;
//         for(let i = 1; i < tempArr.length; i++) {
//             if(tempArr[i] < tempArr[minIndex]) {
//                 minIndex = i;
//             }
//         }
//         alert(`The smallest number is ${tempArr[minIndex]}`);
//     }
// }

// {
//     // Task 7
//     const arr = [3, 4, 6, -9, 10, -88, 2];
//     let toFindNum = prompt('Enter a number:');
//     let isFound = false;
//     for(let i = 0; i < arr.length; i++) {
//         if(toFindNum == arr[i]) {
//             alert(`${toFindNum} is FOUND in my array at index ${i}`);
//             isFound = true;
//             break;
//         } 
//     }
//     if(!isFound) {
//         alert(`${toFindNum} is NOT found in my array`);
//     }
// }

// {    
//      Task 8
//     let flockSizes = [12, 30, 123, 24, 78, 89, 58];
//     console.log('This is my sheep sizes');
//     console.log(...flockSizes);

//     let biggestSize = Math.max(...flockSizes); 
//     console.log(`\nNow my biggest sheep has size ${biggestSize}, let's shave it`);

//     let sheepIndex = flockSizes.indexOf(biggestSize);
//     flockSizes[sheepIndex] = 8; // return to default size after shearing: 8
//     console.log('\nAfter shearing, here is my flock');
//     console.log(...flockSizes);

//     let wantedMonths = 4;
//     for(let i = 0; i < wantedMonths; i++) {
//     console.log(`\nMONTH ${i+1}`);
//     console.log('One month has passed, my sheeps have grown, here are their sizes');
//     for(let i = 0; i < flockSizes.length; i++) {
//         flockSizes[i] = Number(flockSizes[i]) + 50;
//         }
//     console.log(...flockSizes);
//     }

//     let totalSize = 0, currentPrice = 2; // in $
//     for(let i = 0; i < flockSizes.length; i++) {
//         totalSize += flockSizes[i];
//     }
//     console.log(`\nMy flock has size in total: ${totalSize}`);
//     console.log(`I would get ${totalSize} * ${currentPrice}$ = ${totalSize*currentPrice}$`);
// }

// {
//     Task 10
//     let seqNames = prompt('Enter a sequence of names:');
//     let Arr = seqNames.split(',');
//     let tempArr = [];
//     // method 1
//     // for (let i = 0; i < Arr.length; i++) {
//     //     let tempVar = `<${Arr[i]}>`;
//     //     tempArr.push(tempVar);
//     // }
//     // alert(`${Arr} => ${tempArr}`);

//     // method 2 using map
//     let map1 = Arr.map(x => `<${x}>`);
//     alert(`${Arr} => ${map1}`);
// }

// {
//     // Task 11
//     let seqNumbers = prompt('Enter a sequence of names:');
//     let Arr = seqNumbers.split(',');
//     // // method 1 
//     // let tempArr = [];
//     // for(let i = 0; i < seqNumbers.length; i++) {
//     //     let thisNumber = Number(Arr[i])
//     //     if(thisNumber & 1) {
//     //         tempArr.push(thisNumber);
//     //     }
//     // }
//     // alert(tempArr);
//     // method 2 using filter function
//     let result = Arr.filter(x => Number(x) % 2 != 0);
//     alert(result);
// }
