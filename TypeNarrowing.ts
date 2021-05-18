// TYPE GUARDS : 
//the in operator comes into play. The in operator checks if a property exists on an object itself or anywhere within its prototype chain.

type Tennis = {
    serve: () => void;
  }
   
  type Soccer = {
    kick: () => void;
  }
   
  function play(sport: Tennis | Soccer) {
    if ('serve' in sport) {
      return sport.serve();
    }
   
    if ('kick' in sport) {
      return sport.kick();
    }
  }

// Narrowing with else 
// TypeScript can recognize the else block of an if/else statement as being the opposite type guard check of the if statement’s type guard check

function formatPadding(padding: string | number) {
    if (typeof padding === 'string') {
      return padding.toLowerCase();
    } else { // assumes this is a number
      return `${padding}px`; 
    }
  }

// Narrowing After a Type Guard
type Tea = {
    steep: () => string;
  }
   
  type Coffee = {
    pourOver: () => string;
  } 
   
  function brew(beverage: Coffee | Tea) {
    if ('steep' in beverage) {
      return beverage.steep();
    }  
    return beverage.pourOver();
  }