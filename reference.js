// Class
// class Person{
//   constructor(firstName, lastName, dob) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.dob = new Date(dob);
//   }
//   getBirthYear(){
//     return this.dob.getFullYear();
//     }
//   getFullName(){
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// Constructior function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
  // this.getBirthYear = function(){
  //   return this.dob.getFullYear();
  // }
  // this.getFullName = function(){
  //   return `${firstName} ${lastName}`;
  // }
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
//   }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
//   }

// Instantiate object
// const person1 = new Person('Man', 'Poon', '06-09-1985')
// const person2 = new Person('Venus', 'Tsang', '06-08-1989')

// console.log(`This is ${person1.getBirthYear()} and ${person1.getFullName()}`)
// console.log(person1)


// function

// const addNums = (num1 = 1, num2 = 2) => num1 + num2;

// console.log(addNums(10,5))


// function addNums (num1 = 1, num2 = 2){
//   return num1 + num2;
// }

// console.log(addNums(8,12))



// conditional

// const color = "gery"

// switch(color){
//   case 'black':
//     console.log('color is black');
//     break;
//   case 'gery':
//     console.log('color is gery');
//     break;
//   default:
//     console.log('color is not your choice')
//     break;
// }

// const y = 20

// const color = y > 30 ? "black" : "red";
// console.log(color)


// const x = 15

// if (x === 10){
//   console.log('x is 10');
// } else if (x > 10) {
//   console.log('x is greater than 10')
// } else {
//   console.log('x is less than 10')
// }


// const memo = [
//   {
//     id: 1,
//     text: 'Go to lunch at 12pm',
//     isCompleted: true
//   },
//   {
//     id: 2,
//     text: 'meeting at 3pm',
//     isCompleted: true
//   },
//   {
//     id: 3,
//     text: 'play tennis tonight',
//     isCompleted: false
//   },
// ]

// const memoJSON = JSON.stringify(memo);
// console.log(memoJSON)

// const memoCompleted = memo.filter(function(m){
//   return m.isCompleted === true;
// }).map(function(m){
//   return m.text
// })

// console.log(memoCompleted)

// const memoText = memo.map(function(m){
//   return m.text;
// })

// memo.forEach(function(m){
//   console.log(m.text)
// })

// for(m of memo){
//   console.log(m)
// }

// for(let i = 0; i < memo.length; i++) {
//   console.log(memo[i])
// }

// let i = 0
// while (i <= 10){
//   console.log(`This is ${i}`);
//   i++;
// }





// const person = {
//   firstName: 'Peter',
//   lastName: 'Chan',
//   food: ['chocolate', 'coke', 'rice'],
//   address: {
//     street: '30 st John road',
//     city: 'London'
//   }
// }

// const {address: {city}} = person

// console.log(person.firstName, person.address)

// console.log(city)



// const name = 'Man Poon';
// const phone = 123456;

// const items = ['pen', 'orange', 999, false]

// items[4] = 'pencil'

// items.push('game')

// items.unshift(123)

// console.log(items.indexOf('pen'));
