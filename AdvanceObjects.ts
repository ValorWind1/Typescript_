//Interfaces and Types
//interface can only be used to type objects while type can be used to type objects, primitives, and more. 
// Write an interface here
interface Run {
    miles : number;
  }
  
  function updateRunGoal(run : Run) {
    console.log(`
  Miles left:       ${50 - run.miles}
  Percent of goal:  ${(run.miles / 50) * 100}% complete
    `)
  }
  
  updateRunGoal({
    miles: 5,
  })

  
// Interfaces and Classes

interface Robot {
    identify: (id: number) => void;
  }
   
  class OneSeries implements Robot {
    identify(id: number) {
      console.log(`beep! I'm ${id.toFixed(2)}.`);
    }
   
    answerQuestion() {
      console.log('42!');
    }
  }


  // nested types 
  interface Directory {
    addFile: (name: string) => void;
    // Define a config type member here
    config: {
      default: {
        encoding: string;
        permissions: string;
      }
    }
  }
  
  class DesktopDirectory implements Directory {
    config = {
      default: {
        encoding: 'utf-8',
        permissions: 'drw-rw-rw-',
      }
    }
  
    addFile(name: string) {
      console.log(`Adding file: ${name}`);
    }
  
    showPreview(name: string) {
      console.log(`Opening preview of file: ${name}`);
    }
  }
  
  const Desktop = new DesktopDirectory();
  
  console.log(Desktop.config);


  //composed types : define multiple types and reference them inside other types.
  interface About {
    general: General;
  }
   
  interface General {
    id: number;
    name: string;
    version: Version;
  }
   
  interface Version {
    versionNumber: number;
  }


  // Extending Interfaces
  interface Developer  extends Human{
    code: () => void;
  }
  
  // Add your interface here
  interface Human{
    name:string,
    hobbies:string[]
  }
  
  const me: Developer = { 
    code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
    name: 'Corrina', 
    hobbies: ['Building rockets']
  }
  
  me.code();


  //Index Signatures



// Write an interface here
// TypeScript, sometimes it’s not possible to know the property names for an object, like when we get back information from an outside data source/API. 
//e may know what the data will look like in general. In that case, it’s useful to write an object type that allows us to include a variable name for the property name
import { getBudgetAsync } from './api';
interface Budget {
  [category: string]: number;
}

async function getBudget() {
  const result: Budget = await getBudgetAsync();
  console.log(result);
}

getBudget();

// Optional Type Members

interface UserNameOptions {
    firstName?: string; // optional
    lastName?: string; // optional
    username: string; // required
  }
  
  function getUserName(options : UserNameOptions) {
    if (options.firstName && options.lastName) {
      return console.log(`${options.firstName} ${options.lastName}`);
    }
  
    return console.log(options.username);
  }
  
  getUserName({
    firstName: 'Mr.',
    lastName: 'Oshiro',
    username: 'hotelowner304'
  })
  
  getUserName({
    firstName: 'Madeline',
    username: 'mountainClimber'
  })