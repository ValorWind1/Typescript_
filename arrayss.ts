let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];
// dealing with checking without using type array check with typescript
function checkCustomersArrays () {
    for (let i = 0 ; i < customersArray.length ;i++){
        if (typeof customersArray[i] === "number"){
            console.log("Numbers :",customersArray[i])
        }
    }
}
checkCustomersArrays();
function stringPush (val) {
    if ( typeof val === "string"){
        customersArray.push(val)
        }
    }
stringPush (3)


// Array types 
let names: string[] = ['Danny', 'Samantha'];
let arr: string[][] = [['str1', 'str2'], ['more', 'strings']];
let names: string[] = [];
// or

let names: Array<string> = ['Danny', 'Samantha'];

//Tuples Tuple types specify both the lengths and the orders of compatible tuples, and will cause an error if either of these conditions are not met

let numbersTuple: [number, number, number] = [1,2,3,4]; // Type Error! numbersTuple should only have three elements.
let mixedTuple: [number, string, boolean] = ['hi', 3, true] // Type Error! The first elements should be a number, the second a string, and the third a boolean. 

let favoriteCoordinates : [number,number,string,number,number,string]= [40, 43.2, 'N', 73, 59.8, 'W'];


// Array Type inderence  
    // tuples cant increase size (its a set size)
let tupleOfExamAnswers: [boolean, boolean, boolean] = [true, false, false];
tupleOfExamAnswers[3] = true; // Type error! The tuple only has 3 elements.

    // however by calling it with another variable you can add more
let tup: [number, number, number] = [1,2,3];
let concatResult = tup.concat([4,5,6]); // concatResult has the value [1,2,3,4,5,6].


//putting types to REST Parameters
function smush(firstString, ...otherStrings: string[]){
    /*rest of function*/
  }

    // EX 
     function addPower(p : number, ...numsToAdd: number[]) : number{
        let answer = 0; 
        for(let i = 0; i < numsToAdd.length; i++){
         answer += numsToAdd[i] ** p;
        }
     return answer;
    }
  
    addPower(2, 3, 4)


// putting types to SPREAD Parameters
function performDanceMove(moveName:string, moveReps:number, hasFlair:boolean):void{
    console.log(`I do the ${moveName} ${moveReps} times !`);
    if(hasFlair){
      console.log('I do it with flair!');
    }
  }
  
  let danceMoves : [string,number,boolean][] = [
    ['chicken beak', 4, false],
    ['wing flap', 4, false],
    ['tail feather shake', 4, false],
    ['clap', 4, false],
    ['chicken beak', 4, true],
    ['wing flap', 4, true],
    ['tail feather shake', 4, true],
    ['clap', 4, true],
  ];
  
  for ( let i = 0 ; i < danceMoves.length ; i ++){
    performDanceMove(...danceMoves[i])
  }


  