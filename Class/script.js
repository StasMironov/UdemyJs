// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello' + this.name);
//     }
// } 

// User.prototype.exit = function(name){
//     console.log("Пользователь " + this.name + " ушёл");
// }

// let ivan = new User("Ivan", 24),
//     alex = new User("Alex", 20);

// console.log(ivan);
// console.log(alex);
// ivan.exit();

// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log(`Hello! ${this.name}`);
//     }
//     exit() {
//         console.log(`Пользователь ${this.name} ушёл`);
//     }
// }

// let ivan = new User("Ivan", 24);
// ivan.hello();

// class Rectangle {
//     constructor(height, width = 20) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const square = new Rectangle(10);
// console.log(square.calcArea());


import Man from './classMan.js';
import Car from './classCar.js';

let img = 'https://cdn0.iconfinder.com/data/icons/cars-22/512/Ford-128.png',
    man = new Man(170, 65, 24, 'man', 'Stas', 1234, 'black' ),
    car = new Car('ford', 'test', 1500, 'C4', 'black', img );
// console.log(man);

car.render('.features-list > li');


