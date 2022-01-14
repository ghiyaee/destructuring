////////////////// Array 
// pop  push  shift unshift slice splice reverse join 
///slice new array but original Array no changed
const myarr = [1, 2, 3, 4, 5];
console.log(myarr.slice(2)); ///out new arry [3,4,5]
console.log(myarr.slice(2, 5)); /// out new array if undefined value befor value show [3,4,5]
console.log((myarr.slice(myarr.length - 2))); /// out new array az end start;
console.log(myarr.slice(-2)); ////////////////////^^^^^^^^^^^^^^^^^^^^^^^^^^^^;
console.log(myarr.slice()); /// out new array copy;
console.log([...myarr]); ///^^^^^^^^out new array but unpack Array whit sperad ;

////splice new Array but original Array changed for DELETD A INDEX Array

//  console.log(myarr.splice(2));/// out new Array [3,4,5] and oigi Array [1,2]
// console.log(myarr.pop());
// console.log(myarr.splice(1,3)); /// out new Array index one place conter index second
console.log(myarr);

//// REVERSE   in method change original Array
const myarr1 = [10, 9, 8, 7, 6]
console.log(myarr1.reverse()); ///[6,7,8,9,10]


///CONTACT 
const newarry = [...myarr, ...myarr1]
console.log(newarry); ////Array [1,2,3,4,5,6,7,8,9,10] unpack...
console.log(myarr.concat(myarr1)); // new Array[1,2,3,4,5,6,7,8,910]


/// join

console.log(myarr.join(',')); // new  [1,2,3,4,5,6] join=>  1,2,3,4,5,6;

for (let i in newarry) {console.log(i)}  /// in for loop index
for (let i of newarry) { console.log(i); } //// in for loop values
newarry.forEach(fE => console.log(fE)) /// IN FOR LOOP VALUES
const chm = newarry.map(fe => console.log(fe)) 
console.log(chm);
const forE = newarry.filter(filter => filter % 2 == 0)
console.log(newarry, ...forE);
const sam = newarry.reduce((total, value) => total + value, 100);
console.log(sam);
console.log(newarry.indexOf(3)); /// if not value  or 0 or '' opuput ouput -1,

const fc = (fc) => fc > 9;
console.log(newarry.push(2));
console.log(newarry);
const fl = newarry.findIndex((fc) => fc >1); /// in need a function if find firts value return index value
console.log(fl);