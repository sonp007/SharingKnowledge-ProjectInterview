//----------------------------------------------------------
// Normal currying
// function sum(a){
//   return function(b){
//     return function(c){
//       return a+b+c;
//     }
//   }
// }

// let initSum = sum(10);
// let rs1 = initSum(4)(5);
// let rs2 = initSum(4)(20);
// console.log(rs1,rs2);

// ----------------------------
//Advanced in currying.
const curry =(fn) =>{
  return curried = (...args) => {
      if (fn.length !== args.length){
          return curried.bind(null, ...args)
      }
  return fn(...args);
  };
}
const totalNum=(x,y,z) => {
  return x+y+z;
} 
const curriedTotal = curry(totalNum);
console.log(curriedTotal(10) (20) (30));

9
// ----------------------------
// Memoization
// function sum (a){
//   let cached = [];
//   return function (b){
//     return function (c){
//       let rs = a+b+c;
//       cached.push(rs);
//       console.log(cached);
//       return rs;
//     }
//   }
// }

// let baseSum = sum(2);
// let r1 = baseSum(4)(11);
// let r2 = baseSum(4)(20);
// let r3 = baseSum(4)(1);
// console.log(r1,r2)