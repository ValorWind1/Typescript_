console.log("Hello")

let a  : string;
// a = 5; wont work becase of type
a = "asddasd";
console.log(a)

//functions types parameters 
function count (x : number){
    for(let i = 0 ; i < x ; i ++){
        console.log(x)
    }
}
count(3)

//optional parameters using ? 
function greet(name?: string) {
    console.log(`Hello, ${name|| 'Anonymous'}!`);
  }
greet();
// OR use default parameters instead like this
function proclaim(status= "not ready...", repeat= 1) {
    for (let i = 0; i < repeat; i += 1) {
      console.log(`I'm ${status }`);
    }
  }
proclaim();

//EXPLICITLY MAKING THE RETURN TYPE STRING 
// function createGreeting(name?: string): string {
//     if (name) {
//         return `Hello, ${name}!`;
//       }
     
//       return undefined;
//   //Typescript Error: Type 'undefined' is not assignable to type 'string'. BECAUSE ABOVE AFTER PARAMETERS : STRING     
// };


// Void return types 
// even when we are not returning anything is good idea to use type void
function logGreeting(name:string): void{
    console.log(`Hello, ${name}!`)
  }
logGreeting("nani")


