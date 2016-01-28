// Using a for loop &  if else statements:
for (var i = 1; i <= 100; i++ ) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  else if (i % 5 === 0){
    console.log("Buzz");
  }
  else
    console.log(i);

}

// A functional approach

var fizz = "fizz";
var buzz = "buzz";
function divisibleBy(num) {
  return (i % num === 0);
}
  for (var i = 1; i <= 100; i ++) {
    switch(true) {
        case(divisibleBy(3 && 5)):
          console.log(fizz + buzz);
        break;
        case(divisibleBy(3)):
          console.log(fizz);
        break;
        case(divisibleBy(5)):
          console.log(buzz);
        break;
        default:
          console.log(i);
        break;
    }
}
