// Unions allow us to define multiple allowed type members by separating each type member with a vertical line character |
function printNumsAndStrings(statement : string | number) {
    console.log(`ℹ️ LOG:: ${statement}`);
  }
  
  printNumsAndStrings('hello!');
  printNumsAndStrings(3) 



// Type Narrowing with the help of TYPEOF 
  function formatValue(value: string | number) {
    // Write your code here
    if (typeof value === "string"){
      console.log(value.toLowerCase())
    }
    if (typeof value === "number") {
      console.log(value.toFixed(2))
    }
  
  }
  
  formatValue('Hiya');
  formatValue(42);


  //Inferred Union Return Types
  type User = {
    id: number;
    username: string;
  };
   function createUser() {
    const randomChance = Math.random() >= 0.5;  
    if (randomChance) {
      return { id: 1, username: 'nikko' };
    } else {
      return 'Could not create a user.';
    }
  }
  
  const userData: string | User = createUser();


  // Unions and Arrays 
  const timesList: (string | number)[] = [dateNumber, dateString];
  function formatListings(listings : (string | number)[]) {
  }



  // Common Key Value Pairs with UNIONS
  // TypeScript will only allow us to call methods that both types have. that They both share 
  type Like = {
    username: string;
    displayName: string;
  };
  
  type Share = {
    username: string;
    displayName: string;
  };
  
  function getFriendNameFromEvent(event : Like | Share ) {
    return event.displayName || event.username;
      // we can use this because both of them have displayName and username
  }
  


//   Unions with Literal Types

type Status =  'idle' | 'downloading' | 'complete'

function downloadStatus(status : Status) {
    if (status === 'idle') {
    console.log('Download');
  }

  if (status === 'downloading') {
    console.log('Downloading...');
  }

  if (status === 'complete') {
    console.log('Your download is complete!');
  }

}

downloadStatus("idle")