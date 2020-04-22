console.log('Hey Ursus Generator Functions');

// const globalNumber = 0;

function standardFunction() {
  // const kittyKat = 'I have value';
  let globalNumber = 0;
  globalNumber++;
  console.log('something');
  return globalNumber; // end of the function's life
  // anything after this doesn't run
}

console.log(standardFunction());
console.log(standardFunction());

// GENERATOR FUNCTION

function* genFunc() {
  // doing things between steps
  console.log('Step 1');
  yield true;
  // doing things between steps
  console.log('Step 2');
  yield 100;
  // doing things between steps
  console.log('Step 3');
  yield 'Hello!';
  // doing things between steps
  console.log('Step 4');
  yield [1,2,3,4];
  // doing things between steps
  console.log('Step 5');
  yield { master: 'blaster' };
  // potentially more things to do after yield
  // Actually DONE here
}

const genFuncTest = genFunc();

console.log(genFuncTest.next());
console.log(genFuncTest.next());
console.log(genFuncTest.next());
console.log(genFuncTest.next());
console.log(genFuncTest.next());
console.log(genFuncTest.next());


function* switcher() {
  while(true) {
    yield 'on';
    yield 'off';
  }
}

const toggle = switcher();

console.log(toggle.next().value);
console.log(toggle.next().value);
console.log(toggle.next().value);
console.log(toggle.next().value);


function* countDownGenerator() {
  let a = 10;
  while(a > 0) {
    yield `Launching in ${a}`;
    a -= 1;
  }
  yield `Take off!`;
}

const countDown = countDownGenerator();

console.log(countDown.next().value);
console.log(countDown.next().value);
console.log(countDown.next().value);
console.log(countDown.next().value);
console.log(countDown.next().value);
console.log(countDown.next().value);
console.log(countDown.next().value);
console.log(countDown.next().value);
console.log(countDown.next().value);
console.log(countDown.next().value);
console.log(countDown.next().value);






