// let person ={
//     name: 'Abhi',
//     age: 28
// }

//Dot notation
// person.age = 27

// console.log(person)

//Objects
//objects are dynamic
// let colors = ['Red', 'white']
// colors[2] = 'Blue'
// console.log(colors)

//Functions
function greet(name){
    console.log(name + " likes momos")
}

greet('Abhi')

// function square(number){
//     return number*number
// }



//Fat arrow
const square = number => number*number
console.log(square(9))

//Array Map & Template Literal
const colors = ['Red', 'White',' Blue']
const items = colors.map(color => `<li>${colors}</li>`)

console.log(items)