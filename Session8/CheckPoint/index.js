// task 1
{
	let listTag = document.getElementById("task1");
	let btn = listTag.getElementsByTagName("button");
	btn[0].addEventListener('click', () => {
		let counterValue = Number(document.getElementById('counter_show').innerHTML);
		document.getElementById('counter_show').innerHTML = --counterValue;
	});
	btn[1].addEventListener('click', () => {
		let counterValue = Number(document.getElementById('counter_show').innerHTML);
		document.getElementById('counter_show').innerHTML = ++counterValue;
	});
}
// task 2
{
	let listTag = document.getElementById("task2");
	let btn = listTag.getElementsByTagName("button");
	let cooldownTimer;
	countDown = (time) => {
		listTag.getElementsByTagName('p')[0].innerHTML = time;
		if (time <= 0) {
			clearInterval(cooldownTimer);
			listTag.getElementsByTagName('p')[0].innerHTML = "Time's up!";
		}
	}
	btn[0].addEventListener('click', () => {
		let setTime = Number(listTag.getElementsByTagName('input')[0].value);
		cooldownTimer = setInterval(() => {
			countDown(setTime);
			setTime--;
		}, 1000);
		btn[1].disabled = false;
		btn[0].disabled = true;
	});
	btn[1].addEventListener('click', () => {
		clearInterval(cooldownTimer);
		btn[0].disabled = false;
		btn[1].disabled = true;
	});
}
// task 3
{
	let listElements = document.getElementsByClassName("task3");
	document.getElementById('reload_btn').addEventListener('click', () => {
		let quoteContent = quotes[Math.floor(Math.random() * quotes.length)]["quoteText"];
		let quoteAuthor = quotes[Math.floor(Math.random() * quotes.length)]["quoteAuthor"];
		document.getElementById('quote_content').innerHTML = quoteContent;
		document.getElementById('quote_author').innerHTML = quoteAuthor;
	});
}
// task4
{
	let tbody = document.getElementById('ts_body');
	let listTr = tbody.getElementsByTagName("tr");
	let isUpdating = false;
	let elementIdx;
	let newProjectInputs = document.getElementsByClassName('newpj');
	// function that add update and delete listener
	addModifyFunction = (index) => {
		let newElement = listTr[index].lastChild;
		newElement.addEventListener('click', (e) => {
			// project's index
			elementIdx = e.target.parentNode.parentNode.rowIndex - 1;
			if (e.target.innerHTML == 'X') {
				// delete element in database
				timeSheetData.splice(elementIdx, 1);
				// delete element in html interface
				e.target.parentNode.parentNode.remove();
				clearInput();
			}
			else if (e.target.innerHTML == 'U') {
				isUpdating = true;
				newProjectInputs[0].value = timeSheetData[elementIdx].Project;
				newProjectInputs[1].value = timeSheetData[elementIdx].Task;
				newProjectInputs[2].value = timeSheetData[elementIdx]['Time Spent'];
				document.getElementById('newpj_add').innerHTML = 'Update';
			}
		});
	}
	// function that add new project to database and html
	addNewProject = (pjName, pjTask, pjTime) => {
		// add newpj to database
		let newPj = {};
		newPj.Project = pjName;
		newPj.Task = pjTask;
		newPj['Time Spent'] = pjTime;
		timeSheetData.push(newPj);
		// ad newpj to html interface
		tbody.insertAdjacentHTML('beforeend', `<tr><td>${pjName}</td><td>${pjTask}</td><td>${pjTime}</td><td><button>X</button><button>U</button></td></tr>`)
		addModifyFunction(listTr.length - 1);
	}
	// function that clear input
	clearInput = () => {
		document.getElementById('newpj_add').innerHTML = 'Add'
		newProjectInputs[0].value = null;
		newProjectInputs[1].value = null;
		newProjectInputs[2].value = null;
		isUpdating = false;
	}
	// insert data to html
	for (let idx in timeSheetData) {
		tbody.insertAdjacentHTML('beforeend', `<tr><td>${timeSheetData[idx].Project}</td><td>${timeSheetData[idx].Task}</td><td>${timeSheetData[idx]["Time Spent"]}</td><td><button>X</button><button>U</button></td></tr>`);
		addModifyFunction(idx);
	}
	
	// add button 
	document.getElementById('newpj_add').addEventListener('click', () => {
		// get input
		let newPjName = newProjectInputs[0].value;
			let newPjTask = newProjectInputs[1].value;
			let newPjTime = newProjectInputs[2].value;
		if (isUpdate == false) {
			addNewProject(newPjName, newPjTask, newPjTime);
			// reset input on html interface
			clearInput();
			// consolog
			console.log(`${newPjName} ${newPjTask} ${newPjTime} added.`);
		} else {
			// update html interface
			let listTd = listTr[elementIdx].getElementsByTagName('td');
			listTd[0].innerHTML = newPjName;
			listTd[1].innerHTML = newPjTask;
			listTd[2].innerHTML = newPjTime;
			// update database
			timeSheetData[elementIdx].Project = newPjName;
			timeSheetData[elementIdx].Task = newPjTask;
			timeSheetData[elementIdx]['Time Spent'] = newPjTime;
			// clear
			clearInput();
		}
	});
	// clear button
	document.getElementById('newpj_clear').addEventListener('click', () => {
		clearInput();
	});
}
// task 5
{
	
}