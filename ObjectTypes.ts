let aPerson: {name: string, age: number};
// object types can be enums, arrays, and even other object types
let aCompany: {
    companyName: string, 
    boss: {name: string, age: number}, 
    employees: {name: string, age: number}[], 
    employeeOfTheMonth: {name: string, age: number},  
    moneyEarned: number
  };

  // object type in funciton ex
  function sayHappyBirthdayWithObject(personObject : { name : string , age : number , giftWish : string , success : boolean}){
    let output ='';
    output += 'Happy Birthday '
           + personObject.name + '! ';
    output += 'You are now ' 
           + personObject.age + ' years old! ';
    output += 'Your birthday wish was to receive ' 
           + personObject.giftWish 
           + '. And guess what? You will ';
    if (!personObject.success){
      output += 'not ';
    }
    output += 'receive it! \n';
    console.log(output);
  }

// TYPE ALIASES
// Add your type alias below:
type Coord = [number, number, string, number, number, string]
type OperatorFunction = (a: number, b: number)=>number;

let codecademyCoordinates: Coord= [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: Coord = [25, 0 , 'N' , 71, 0, 'W'];
function mathTutor(operationCallback : OperatorFunction) {
}

// instead of doing this 
let codecademyCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: [number, number, string, number, number, string] = [25, 0 , 'N' , 71, 0, 'W'];


//Generic Types
// //type Family<T> = {
//     parents: [T, T], mate: T, children: T[]
// };
type Human = {name: string, job: string};
type Dog = {name: string, tailWagSpeed: number};

type Family<T> = {
  parents: [T, T], mate: T, children: T[]
};




let theFamily:Family<number> = {
  parents: [3, 4], mate: 9, children: [5, 30, 121]
};

let someFamily:Family<boolean> = {
  parents: [true, true], mate: false, 
  children: [false, false, true, true]
};

let aFamily: Family <Human> = {
  parents: [
    {name: 'Mom', job: 'software engineer'},
    {name: 'Dad', job: 'coding engineer'}
  ],
  mate: {name: 'Matesky', job: 'engineering coder'},
  children: [{name: 'Babesky', job: 'none'}]
};

let anotherFamily: Family<Dog> = {
  parents: [
    {name: 'Momo', tailWagSpeed: 3},
    {name: 'Dado', tailWagSpeed: 100}
  ],
  mate: {name: 'Cheems', tailWagSpeed: 7},
  children: [
    {name: 'Puppin', tailWagSpeed: 0.001},
    {name: 'Puppenaut', tailWagSpeed: 0.0001},
    {name: 'Puppenator', tailWagSpeed: 0.01}
  ]
};



// Generic Functions

  function getFilledArray<T>(value: T, n: number): T[] {
    return Array(n).fill(value);
  }
  
  let stringArray: string[];
  let numberArray: number[];
  let personArray: {name: string, age: number}[];
  let coordinateArray: [number, number][];
  
  // Write your code below:
  
  
  stringArray = getFilledArray<string>('hi', 6); 
  numberArray = getFilledArray<number>(9,6);
  personArray = getFilledArray<{name : string , age : number}>({name: 'J. Dean', age: 24},6);
  coordinateArray = getFilledArray<[number,number]>([3,4],6);