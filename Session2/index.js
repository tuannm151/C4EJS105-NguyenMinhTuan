// Task 3 
console.log('a:')
for (let i = 0; i < 7; i++)
    console.log(i);

console.log('b:')
let n = prompt('n = ?');
for (let i = 0; i < n; i++)
    console.log(i);

console.log('c:')
n = prompt('n = ?');
for (let i = 3; i < n; i++)
    console.log(i);

console.log('d:')
n = prompt('n = ?');
let c = prompt('c = ?');
c = Number(c);
for (let i = c; i < n; i++)
    console.log(i);

console.log('e:')
n = prompt('n = ?');
c = prompt('c = ?');
c = Number(c);
for (let i = c; i < n; i += 3)
    console.log(i);

console.log('f:')
n = prompt('n = ?');
c = prompt('c = ?');
let s = prompt('s = ?');
c = Number(c);
s = Number(s);
for (let i = c; i < n; i += s)
    console.log(i);

// Task 4
n = prompt('Enter n:');
let factorial = 1;
for (let i = 2; i <= n; i++) {
    factorial *= i;
}
alert(`The factorial result is ${factorial}`);

// Task 5
let userAge = prompt('What is your age?');
if (userAge < 14) alert('Your age is not enough to view this content');
else alert('Enjoy!');

// Task 6
let x = prompt('Check if x is in lower half or upper half from 0 - 9:');
if (x == 9 / 2) alert(`${x} is in the middle`);
else if (x > 9 / 2) alert(`${x} is in the upper half`);
else alert(`${x} is in the lower half`);

// Task 7
n = prompt('Enter n:');
x = prompt('Check if x is in lower half or upper half of n:');
if (x == n / 2) alert(`${x} is in the middle`);
else if (x > n / 2) alert(`${x} is in the upper half of ${n}`);
else alert(`${x} is in the lower half of ${n}`);

// Task 8
x = prompt('Enter x:');
if (x & 1) alert(`${x} is odd`);
else alert(`${x} is even`);

// Task 9
console.log('a:----------');
for (let i = 0; i < 6; i++)
    if (i < 6 / 2) console.log('L');
    else console.log('H');

console.log('b:----------');
n = prompt('Enter n:');
for (let i = 0; i < n; i++)
    if (n & 1) {
        if (i <= n / 2) console.log('L');
        else console.log('H');
    } else {
        if (i < n / 2) console.log('L');
        else console.log('H');
    }

console.log('c:----------');
for (let i = 0; i < 8; i++)
    if (i & 1) console.log(1);
    else console.log(0);

console.log('d:----------');
n = prompt('Enter n:');
for (let i = 0; i < n; i++)
    if (i & 1) console.log(1);
    else console.log(0);

// Task 10
let mass = prompt('What is your weight in kg?');
let height = prompt('What is your height in cm?');
height /= 100;
let bmi = mass / (height * height);
bmi = bmi.toFixed(2);
alert(`Your bmi is ${bmi}`);
if (bmi < 16) alert('You are severely underweight');
else if (bmi < 18.5) alert('You are underweight');
else if (bmi < 25) alert('You are normal');
else if (bmi < 30) alert('You are overweight');
else alert('You are obese');