// Follow along with the examples here
function sayHello(){
    console.log("Hello!");
    
}
sayHello();

function sayHelloToGuadalupe(){
    console.log("Hello, Guadalupe!");
    
}
sayHelloToGuadalupe()

function sayHelloToLiz(){
    console.log("Hello, Liz!");
    
}
sayHelloToLiz()

function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }
  sayHelloToSamip()

  function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything");

  function say(Goodbye, Julio){
    console.log(`${Goodbye}, ${Julio}`);
    
  }
  say("Goodbye", "Julio")
  say("Julio", "Goodbye")

  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }

  function add(x, y) {
    return x + y;
  }
  console.log(add(1,2));
  
  function say(greeting, firstName){
    return `${greeting},${firstName}!`
  }
  console.log(say("Hello", "Liz"));

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }
  console.log(say("Howdy", "partner"));