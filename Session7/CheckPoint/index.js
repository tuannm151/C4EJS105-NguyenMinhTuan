// task 1
{
	// 1. D 2.a 3.c 4.b
}
// Task 2: setTimeout and setInterval
{
	// setTimeout(() => {
	// 	console.log('Good morning');
	// }, 2000);
	// setInterval(() => {
	// 	console.log('Good morning');
	// }, 2000);
	// setInterval will loop itself after the time given.
}
// Task 3. let and var
{
	// let is block-scoped it wont exists outside braces like function
	// var is global and function-scoped, it wont exists outside function.
}
// Task 4
{
	let list = document.getElementsByTagName('UL')[0];
	let sList = list.getElementsByTagName('li');
	firstItem = () => document.getElementById('holder4').innerHTML = sList[0].innerHTML;
	listItem = () => {
		let showItems = '';
		for (let i = 0; i < sList.length; i++) {
			showItems += `${sList[i].innerHTML} <br>`;
		}
		document.getElementById('holder4').innerHTML = showItems;
	}
}
//Task 5
{
	let list5 = document.getElementById('task5');
	let sList5 = list5.getElementsByTagName('div')[0];
	let ssList5 = sList5.getElementsByTagName('div');
	firstItem5 = () => document.getElementById('holder5').innerHTML = ssList5[0].innerHTML;
	listItem5 = () => {
		let showItems = '';
		for (let i = 0; i < ssList5.length; i++) {
			showItems += `${ssList5[i].innerHTML} <br>`;
		}
		document.getElementById('holder5').innerHTML = showItems;
	}
}
// Task 6 // using "element's name after read".remove()

// Task 7 
{
	// e.target will return whole html element
	let btn = document.getElementById('click');
	btn.addEventListener('click', event => {
		console.log(event.target);
	});
	// e.key will return content, input.
	let keydown = document.getElementById('key');
	keydown.addEventListener('keydown', event2 => {
		console.log(event2.key);
	})
}
// Task 8 
{
	showMyName = () => alert("I'm 19\nI'am going to be a developer.");
}
// Task 9 - 10
{
	let userName, userWish;
	takeInput = () => {
		userName = prompt("What's your name:");
		userWish = prompt("What are you planning for this year");
	}
	showYourName = () => {
		if (userName == undefined || userWish == undefined) {
			alert('Please enter all information');
		} else {
			alert(`You are ${userName}`);
			alert(`This is your plan: ${userWish}`);
		}
	}
}
// Task 11
{
	let userName;
	let button = document.getElementById('getInput');
	button.addEventListener('click', getUserName = () => {
		console.log('Upper it!!! just clicked');
		// take user name from input tag
		userName = document.getElementById('inputUserName').value;
		console.log(`User's name: ${userName}`);
		// convert user name to upper case
		userName = userName.toUpperCase();
		console.log(`User's name uppercase: ${userName}`);
		// update html 
		document.getElementById('userNameUppered').innerHTML = userName;
	});
}
// Task 12
{

	let items = ['Backpack', 'Miband watch', 'Ring'];
	let itemList = document.getElementById('item_list_ul');
	// function to list exist items in database to html
	addItemToHtml = (itemName) => {
		itemList.insertAdjacentHTML("beforeend", `<li><span>${itemName}</span><button>Remove</button></li>`);
	}
	// add current database's items (in items array)
	for (let item of items) {
		addItemToHtml(item);
	}
	// read all database's item element showed on html
	let listTag = itemList.getElementsByTagName('li'); 
	// function that update all html collection
	updateAllList = () => {
		itemList = document.getElementById('item_list_ul');
		listTag = itemList.getElementsByTagName('li'); 
	}
	// function that delete item in database and html UI
	deleteElement = (element) => {
		// delete item in database
		items.splice(items.indexOf(element.firstChild.innerHTML),1);
		// delete item in html interface
		element.remove();
		updateAllList();
		// console.log
		console.log(`Item "${element.firstChild.innerHTML}" removed`);
		console.log(items);
	}
	// add event listener for all exist database's item
	for(let item of listTag) {
		item.lastChild.addEventListener('click', () => {
			deleteElement(item);
		});
	}
	// new item - function that add item to database and show on html interface
	addItem = () => {
		let newItem = document.getElementById('item_input').value;
		// check if user have not entered anything
		if(newItem == '' || newItem == null) {
			alert('Please enter new item name!');
			return;
		}
		// push item to database and show it on UI then update all html collection
		items.push(newItem);
		addItemToHtml(newItem);
		updateAllList();
		// console.log 
		console.log(`Item ${newItem} added`);
		console.log(items);
		// add event listener for new added item
		let newElement = listTag[listTag.length - 1];
		newElement.lastChild.addEventListener('click', () => {
			deleteElement(newElement);
		});
	}
	// adding using add button
	let btn = document.getElementById('add_btn');
	btn.addEventListener('click', () => {
		addItem();
		// reset input after added new item
		document.getElementById('item_input').value = null;
	});
}	
