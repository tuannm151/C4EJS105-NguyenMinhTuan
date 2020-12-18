// Task 3
for(let i = 0; i < 7; i++)
console.log(i);

let n = prompt("n = ?");
for(let i = 0; i < n; i++)
console.log(i);

n = prompt("n = ?");
for(let i = 3; i < n; i++)
console.log(i);

n = prompt("n = ?");
c = prompt("c = ?");
for(let i = c; i < n; i++)
console.log(i);

n = prompt("n = ?");
c = prompt("c = ?");
for(let i = c; i < n; i+=3)
console.log(i);

n = prompt("n = ?");
c = prompt("c = ?");
s = prompt("s = ?");
for(let i = c; i < n; i+=s)
console.log(i);

// Task 4
n = prompt("Enter n");
let factorial = 1;
for(let i = 2; i <= n; i++) {
    factorial *= i;
}
alert(`the factorial result is ${factorial}`);

// Task 5