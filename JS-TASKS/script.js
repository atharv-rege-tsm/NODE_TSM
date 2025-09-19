// Task 1
console.log("Hello World");

// Task 2
function addNumbers() {
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);
    let sum = num1 + num2;
    document.querySelector("#result").innerText = "Sum: " + sum;
}
function multiplyNumbers() {
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);
    let product = num1 * num2;
    document.querySelector("#result").innerText = "Product: " + product;
}
function divideNumbers() {
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);
    let quotient = num1 / num2;
    document.querySelector("#result").innerText = "Quotient: " + quotient;
}
function subtractNumbers() {
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);
    let difference = num1 - num2;
    document.querySelector("#result").innerText = "Difference: " + difference;
}


// Task 3

document.querySelector("#btn-random")
    .addEventListener("click", () => {
        let red = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        document.querySelector("#box").style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
    })




// Factorial Program

function fact(num) {
    return num == 1 ? 1 : num * fact(num - 1);
}



// Custom Sort

function customSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let numbers = [42, 10, 5, 87, 1];

console.log(customSort(numbers));


// api 
async function fetchhh() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const res = await data.json();
    console.log(res.title)
}
fetchhh()