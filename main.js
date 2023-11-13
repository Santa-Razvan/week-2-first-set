//1
function reverse(arr) {
    const str = arr.split("").reverse().join('');
    console.log(str);
}

let str = 'hello test';
reverse(str);


//2
console.log("folosim metoda slice ne intoarce o copie a array-ului");

//3
function squareElement(arr) {
    return arr.filter((item) => item % 2 === 1).map((num) => num * num);
}

console.log(squareElement([1, 2, 3, 4, 5, 6, 7]));

//4
function createPrint(num) {
    return function () {
        console.log(num);
    };
}

for (let i = 1; i <= 1000; i++) {
    const printFunction = createPrint(i);
    printFunction();
}

//5
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const responseJSON = await response.json();
            return responseJSON;
        } else {
            throw new Error("Error at fetching!");
        }
    } catch (error) {
        throw new Error("Error!");
    }
}