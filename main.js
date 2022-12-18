const memo = [
  {
    id: 1,
    text: 'Go to lunch at 12pm',
    isCompleted: true
  },
  {
    id: 2,
    text: 'meeting at 3pm',
    isCompleted: true
  },
  {
    id: 3,
    text: 'play tennis tonight',
    isCompleted: false
  },
]

// const memoJSON = JSON.stringify(memo);
// console.log(memoJSON)

const memoCompleted = memo.filter(function(m){
  return m.isCompleted === true;
}).map(function(m){
  return m.text
})

console.log(memoCompleted)

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
