const app = document.getElementById("app");

function buildCounter() {
    let count = 0;

    function build() {
        const container = document.createElement("div");
        container.className = 'counter-container';
        const display = document.createElement('div');
        display.className = 'counter-display';
        display.innerText = count;
        const controls = document.createElement('div');

        const incButton = document.createElement('button');
        incButton.innerText = '++';
        incButton.onclick = () => {
            display.innerText = ++count;
        } 
        const decButton = document.createElement('button');
        decButton.innerText = '--';
        decButton.onclick = () => {
            display.innerText = --count;

        }
        controls.append(decButton, incButton);
        controls.className = 'counter-controls';
        container.append(display, controls);
        return container;
    }
    return build;
}

const counterBuilder1 = buildCounter();
const counter1 = counterBuilder1();

const counterBuilder2 = buildCounter();
const counter2 = counterBuilder2();

const counterBuilder3 = buildCounter();
const counter3 = counterBuilder3();

app.append(counter1, counter2, counter3);


















// Closure example
// function main() {
//     let count = 0;//declarata o variabila care e initializata cu 0

//     function counter(){ // declarata o functie care este initializata si incrementeaza count cu 1
//         return ++count
//     }
//     return counter;
// }

// const f = main();
// console.log(f());// 1 este rezultatul
// console.log(f());// 2 este rezultatul
// console.log(f());// 3 este rezultatul

// const f1 = main();
// console.log(f1());// 1 este rezultatul
// console.log(f1());// 2 este rezultatul
// console.log(f1());// 3 este rezultatul
// console.log(f1());// 4 este rezultatul

// console.log(f());// 4 este rezultatul
// console.log(f());// 5 este rezultatul