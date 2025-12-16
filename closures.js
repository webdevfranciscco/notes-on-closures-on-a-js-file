/**
 * EXAMPLES OF CLOSURES SHOWING THAT, ALTHOUGH A CLOSURE IS NOT FORMALLY CREATED WHEN
 * USING OTHER ENTITIES, LIKE AN OBJECT AND AN ARRAY, THE CONTEXT SCOPES ARE STILL
 * RETAINED.
 */

/**
   Create a closure by returning a function
 */

console.log("A CLOSURE CREATED BY RETURNING A FUNCTION");

const aGlobalVariable = "FUNCTION: variable in the global scope";
function outerFunction1(outerVariable1) {
  const outerVariable2 = "FUNCTION: variable inside of the outer function";
  return function innerFunction(innerVariable1) {
    const innerVariable2 = "FUNCTION: variable inside of the inner function";
    console.log(outerVariable1);
    console.log(outerVariable2);
    console.log(aGlobalVariable);
    console.log(innerVariable1);
    console.log(innerVariable2);
  };
}

const newFunction1 = outerFunction1(
  "FUNCTION: argument passed during construction of an instantiated function"
);
newFunction1(
  "FUNCTION: argument passed during the call of instantiated function"
);
console.dir(newFunction1); // go to the console, expand the function, then the scopes, and then the closure and the global scope, once in there, find: aGlobalVariable
console.log("");

/**
 * Create an "informal closure" (my words) by returning an object
 */

console.log("AN INFORMAL CREATED CLOSURE BY RETURNING AN OBJECT");

function outerFunction2(outerVariable1) {
  const outerVariable2 = "OBJECT: variable inside of the outer function";
  return {
    property1: outerVariable1,
    property2: outerVariable2,
  };
}

const newObject = outerFunction2(
  "OBJECT: argument passed during construction of an instantiated function"
);
console.log(newObject.property1);
console.log(newObject.property2);
console.dir(newObject); // a closure is not formally created, yet the parent scopes are still available
console.log("");

/**
 * Create an "informal closure" (my words) by returning an array
 */

console.log("AN INFORMAL CLOSURE CREATED BY RETURNING AN ARRAY");

function outerFunction3(outerVariable1) {
  const outerVariable2 = "ARRAY: variable inside of the outer function";
  return [outerVariable1, outerVariable2];
}

const newArray = outerFunction3(
  "ARRAY: argument passed during construction of an instantiated function"
);
console.log(newArray[0]);
console.log(newArray[1]);
console.dir(newArray); // a closure is not formally created, yet the parent scopes are still available
console.log("");

/**
 * Create a closure nested inside another closure
 */

console.log("A CLOSURE NESTED INSIDE ANOTHER CLOSURE");

const global = 0;
const level1 = function (outer1) {
  console.log("inside level1");
  const inner1 = 1;
  return function level2(outer2) {
    console.log("inside level2");
    const inner2 = 2;
    return function level3(outer3) {
      console.log("inside level3");
      const inner3 = 3;
      console.log(`global = ${global}`);
      console.log(`inner1 = ${inner1}, outer1 = ${outer1}`);
      console.log(`inner2 = ${inner2}, outer2 = ${outer2}`);
      console.log(`inner3 = ${inner3}, outer3 = ${outer3}`);
    };
  };
};

const level0 = level1("aa")("bb")("cc");

console.log("");
