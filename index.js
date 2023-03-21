//jais code
function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  return function hello() {
    console.log("hello");
  };
}
//uhhhhh
function returnsAnAnonymousFunction() {
  return () => {
    console.log("I am Lost");
  };
}
