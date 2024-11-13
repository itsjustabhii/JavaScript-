const first = [ 1,2,3]
const second = [4,5,6]

//Old way of joining
// const combined = first.concat(second)

//Spread operator
const combined = [...first, 'a', ...second]
console.log(combined)