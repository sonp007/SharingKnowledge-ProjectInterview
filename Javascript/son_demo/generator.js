// function* generatorFunc() {

//     console.log("1. code before first yield");
//     yield 100;

//    console.log("2. code before the second yield");
//     yield 200;

//     console.log("3. code after the second yield");
// }

// const generator = generatorFunc();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// ------------------------------------------
// generator function
// function* generatorFunc() {

//     // returns 'hello' at first next()
//     let x = yield 'hello';
    
//     // returns passed argument on the second next()
//     console.log(x);
//     console.log('some code');

//     // returns 5 on second next()
//     yield 5;
    
// }

// const generator = generatorFunc();

// console.log(generator.next());
// console.log(generator.next(6));
// console.log(generator.next());

// ------------------------------------------------

// creating iterable object
// generator function
function* generatorFunc() {
  
    yield 1;
    yield 2;
    yield 3;
}

const obj = generatorFunc();

// iteration through generator
for (let value of obj) {
    console.log(value);
}
