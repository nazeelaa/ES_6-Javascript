// function Cat(name) {
//     this.name = name;
//   }

//   var misty = new Cat('Misty');

//   console.log(misty.name);



  class Cat{
    constructor(name) {
        this.name = name;
    }
}
         
let misty = new Cat('Misty');
// Outputs 'Misty'
console.log(misty.name); 
/////////////////

class animal{
    constructor(type)
    {
        this.type=type
    }
}
let horse=new animal('horse');
console.log(horse.type);