// // 1.1: if we use the command "let ... in ...." 
// // x will receives property from the object given, as same as it gives us index of an array.
// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white'
// };
// // 1.2:
// for (let x in product) {
//     console.log(`${x}: ${product[x]}`);
// }

// {
//     // 2
//     const task = {
//         subject: 'Implement login feature',
//         createdBy: 'Hoang Ngoc Duc',
//         assignTo: 'Nguyen Phuong Nam',
//         dueDate: '2019-10-08T18:00:24+0000',
//         expectedHours: 0.5,
//         };
//     let {subject, dueDate, assignTo} = task;
//     console.log(subject);
//     console.log(dueDate);
//     console.log(assignTo);
// }

// {
//     // 3
//     console.log(jobSearch);
//     // 3.1. The outermost layer is an Object
//     // 3.2. The hits property is an array
//     // 3.3. job's title is
//     // console.log('ALL TITLE OF JOB IS:')
//     // for(let item of jobSearch.hits) {
//     //     console.log(item.alias);
//     // }
//     // ---------------------------------------
//     console.log('method 2 using destructuring');
//     for (let item of jobSearch.hits) {
//         console.log('---------------------------------------');
//         let { alias: jobTitle } = item;
//         jobTitle = (jobTitle.split('-').join(' ')).toUpperCase();
//         console.log(`Title of job: ${jobTitle}`);
//         let { locations, jobSalary, skills, jobRequirement } = item;
//         console.log(`Location: ${locations}`);
//         console.log(`Salary: ${jobSalary}`);
//         console.log(`Skills: ${skills}`);
//         console.log(`Requirements: ${jobRequirement}`);
//         let allBenefits = 'Benefits: ';
//         for(let content of item.benefits) {
//             allBenefits += '\n - ' + content.benefitValue;
//         }
//         console.log(allBenefits);
//     }
// }

// {
//     let dictionary = {
//         debug: 'The process of figuring out why your program has a certain error and how to fix it',
//         done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//         defect: 'The formal word for \'error\'',
//         pm: 'The short version of Project Manager, the person in charge of the final result of a project',
//         'ui/ux': 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
//     }
//     // 4.1 ------------------------
//     alert('Hi there, this is dev dictionary');
//     let keyword = prompt('Enter a keyword');
//     if(dictionary[keyword] == null || dictionary[keyword] == undefined) {
//         let userExplanation = prompt('We could not find your word, leave your explanaion');
//         dictionary[keyword] = userExplanation;
//         alert(keyword + '\n' + dictionary[keyword]);
//     } else {
//         alert(keyword + '\n' + dictionary[keyword]);
//     }
// }

// {
//     let products = [
//         {
//             name: 'Xiaomi portable charger 20000mah',
//             brand: 'Xiaomi',
//             price: 428,
//             color: 'White',
//             category: 'Charger',
//         },
//         {
//             name: 'VSmart Active 1',
//             brand: 'Vsmart',
//             price: 5487,
//             color: 'Black',
//             category: 'Phone',
//         },
//         {
//             name: 'Iphone X',
//             brand: 'Apple',
//             price: 21490,
//             color: 'Gray',
//             category: 'Phone',
//         },
//         {
//             name: 'Samsung Galaxy A9',
//             brand: 'Samsung',
//             price: 8490,
//             color: 'Blue',
//             category: 'Phone',
//         }
//     ];
//     // for(let item of products) {
//     //     console.log('-------------------------');
//     //     console.log(`Name: ${item.name}`);
//     //     console.log(`Price: ${item.price}`);
//     // }
//     // console.log('-----------------------------');
//     // let productPos = prompt('Enter product position:');
//     // {
//     //     let {name, brand, price, color, category} = products[productPos - 1];
//     //     console.log(`Name: ${name}`);
//     //     console.log(`Brand: ${brand}`);
//     //     console.log(`Price: ${price}`);
//     //     console.log(`Color: ${color}`);
//     //     console.log(`Category: ${category}`);
//     // }
//     // console.log('----------------------------------');
//     // {
//     //     let categoryName = prompt('Enter your category:');
//     //     let userCategory = products.filter(item => item.category == categoryName);
//     //     for(let item of userCategory) {
//     //     console.log('-------------------------');
//     //     console.log(`Name: ${item.name}`);
//     //     console.log(`Price: ${item.price}`);
//     //     }
//     // }
//     // console.log('-------------------------');
//     products[0]['Providers'] = ['Phukienzero', 'Dientuccc'];
//     products[1]['Providers'] = ['Tgdd', 'Ddghn', 'VhStore'];
//     products[2]['Providers'] = ['Tgdd'];
//     products[3]['Providers'] = ['Tgdd'];
//     // {
//     //     for(let item in products) {
//     //         let {name, price} = products[item];
//     //         let listProviders = products[item].Providers.join(' ');
//     //         console.log(`#${Number(item)+1}. ${name} \n Price: ${price} \n Providers: ${listProviders}`);       
//     //     }
//     // }
//     // 5.5
//     {
//         let toFindProvider = prompt('Enter the name of provider:');
//         for (let item of products) {
//             if (item.Providers.indexOf(toFindProvider) != -1) {
//                 console.log('---------------------------------');
//                 let { name, brand, price, color, category, Providers} = item;
//                 console.log(`Name: ${name}`);
//                 console.log(`Brand: ${brand}`);
//                 console.log(`Price: ${price}`);
//                 console.log(`Color: ${color}`);
//                 console.log(`Category: ${category}`);
//                 console.log(`Providers: ${Providers}`);
//             }     
//         }
//     } 
// }

// {
//     let tasks = [
//         {
//             course: 'HTML',
//             complete: false,
//         },
//         {
//             course: 'CSS',
//             complete: false,
//         },
//         {
//             course: 'Basics of JavaScript',
//             complete: false,
//         },
//         {
//             course: 'Node Package Manager (nmp)',
//             complete: false,
//         },
//         {
//             course: 'Git',
//             complete: false,
//         }
//     ];
//     while(true) {
//         console.clear();
//         console.log('Hi there, this is your learning tasks to front-end developer career:');
//         for(let index in tasks) {
//             let {course: name, complete: status} = tasks[index];
//             let isComplete = ' ';
//             if(status == true) {
//                 isComplete = 'x'; 
//             }
//             console.log(`${Number(index)+1}. [${isComplete}] ${name} \n`);
//         }
//         // command menu
//         let userCommand = prompt('Enter your command(New, Delete, Update, Complete)');
//         userCommand = userCommand.toUpperCase();
//         let isQuit = false;
//         switch(userCommand) {
//             case 'NEW': {
//                 let newCourse = prompt('Enter new task');
//                 let newTask = {
//                     course: newCourse,
//                     complete: false,
//                 }
//                 tasks.push(newTask);
//                 break;
//             }
//             case 'UPDATE': {
//                 let coursePos = Number(prompt('Enter task position you want to update:'));
//                 let newTitle = prompt('Enter new title:');
//                 if(coursePos > tasks.length || coursePos < 1) {
//                     alert('Task not exists');
//                 } else {
//                     tasks[coursePos - 1].course = newTitle;  
//                 }
//                 break;
//             }
//             case 'DELETE': {
//                 let coursePos = Number(prompt('Enter task position you want to delete:'));
//                 tasks.splice(coursePos - 1,1);
//                 break;
//             }
//             case 'COMPLETE': {
//                 let coursePos = Number(prompt('Enter task position you have completed:'));
//                 tasks[coursePos - 1].complete = true;
//                 break;
//             }
//             default:
//                 isQuit = true;
//                 break;
//         }
//         if(isQuit) {
//             break;
//         }
//     }
// }

// {
//     console.log('Job hits:');
//     // get all the job hits
//     console.log(jobData.hits);
//     console.log('-------------------------');
//     //get the first job hits
//     console.log(jobData.hits[0]);
//     console.log('-------------------------');
//     // get jobTitle of the first job
//     console.log('First job title:');
//     console.log(jobData.hits[0].jobTitle);
//     console.log('-------------------------');
//     // get benefits of the first job hit
//     console.log(jobData.hits[0].benefits);
//     console.log('-------------------------');
//     // log out jobTitle and benefitValue of all job hits
//     for(let item of jobData.hits) {
//         let {jobTitle} = item;
//         console.log(jobTitle);
//         let allBenefits = 'Benefits: ';
//         for(let content of item.benefits) {
//             allBenefits += '\n - ' + content.benefitValue;
//         }
//         console.log(allBenefits);
//         console.log('-------------------------');
//     }
//     // log out jobTitle, locations, skills, jobSalary of all job hits
//     for(let item of jobData.hits) {
//         // log jobTitle, salary, locations
//         let {jobTitle, jobSalary, locations} = item;
//         console.log(`Title: ${jobTitle}`);
//         console.log(`Salary: ${jobSalary}`);
//         console.log(`Location: \n - ${locations}`);
//         // log benefits
//         let allBenefits = 'Benefits:';
//         for(let content of item.benefits) {
//             allBenefits += '\n - ' + content.benefitValue;
//         }
//         console.log(allBenefits);
//         // log skill
//         let allSkills = 'Skills:'
//         for(let content of item.skills) {
//             allSkills += '\n - ' + content;
//         }
//         console.log(allSkills);
//         console.log('-------------------------');
//     }

// }

{
    const oldData = {
        firedRice: {
        Price: 30,
        vnName: 'Com rang dua bo',
        },
        noddle: {
        price: 20,
        vnName: 'My tom chanh',
        },
        pho: {
        price: 35,
        vnName: 'Pho bo tai chin',
        },
    };
    console.log(oldData);
    let toDelete = "noddle";
    let {[toDelete]: deletedObj, ...newData} = oldData;
    console.log(newData);
}