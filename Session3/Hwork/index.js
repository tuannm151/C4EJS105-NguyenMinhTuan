{
    // Task 1
    let a = 6, b = 5;
    console.log(a, b); // 6 5
    // Ex1: swapping method 1 using temporary variable
    let temp = a;
    a = b; 
    b = temp;
    console.log(a, b); // 5 6
    // Ex2: swapping not using temporary variable
    [a, b] = [b, a];
    console.log(a, b); // 6 5
}

{
    // Task 2 - 3
    let sallute = 'Hello beauty there';
    let a = sallute.split(" ");
    console.log(a);
    console.log(...a);
}
while (true) {
    // Task 4
    let itemName, newItem, itemIndex;
    let products = ['Jeans', 'T-shirt', 'Socks'];
    // C - Create | R - Read | U - Update 
    let adminCommand = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U, D, Q)? \n C. Create new product \n R. List current product \n U. Update product \nD. Delete product \nQ. Quit');
    if (adminCommand == 'C') {
        newItem = prompt('Enter the name of new item:');
        products.push(newItem);
        alert('Done');
    } else if (adminCommand == 'R') {
        // console.log('The current items are:');
        // for (let i = 0; i < products.length; i++) {
        //     console.log(`${i}. ${products[i]}`);
        // }
        let tempList = products;

        for(let i = 0; i < tempList.length; i++) {
            let tempName = `${i+1}.  ${tempList[i]}`;
            tempList[i] = tempName;
        }
        tempList = tempList.join('\n');
        alert(`The current items are:\n---------------------------\n${tempList}\n---------------------------`);
    } else if (adminCommand == 'U') {
        itemIndex = Number(prompt('Enter the position you want to update:'));
        itemIndex--;
        products[itemIndex] = prompt('Enter the new name of the item:');
    } else if (adminCommand == 'D') {
        itemIndex = Number(prompt('Enter the position you want to delete:'));
        products.splice(itemIndex, 1);
    } else if (adminCommand == 'Q') {
        break;
    } else {
        alert('Invalid command, please enter again!');
    }
}