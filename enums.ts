
//1
// ENUMS : enums. We use enums when we’d like to enumerate all the possible values that a variable could have

enum Direction {
    North = 8,
    South = 2,
    East = 6,
    West = 4
  }

enum Pet {
    Hamster ,
    Rat,
    Chinchilla,
    Tarantula
  }
  
  let petOnSaleTS :Pet= Pet.Chinchilla

  let ordersArray = [
    ['rat', 2], 
    ['chinchilla', 1], 
    ['hamster', 2], 
    ['chinchilla', 50]
  ];

const ordersArrayTS : [Pet, number][] = [
    [Pet.Rat, 2],
    [Pet.Chinchilla, 1],
    [Pet.Hamster, 2],
    [Pet.Chinchilla, 50]
  ]

  // String Enums
  enum DirectionString { North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' }
