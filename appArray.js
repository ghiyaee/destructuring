////////////////// Array 
// pop  push  shift unshift slice splice reverse join 
///slice new array but original Array no changed
const myarr = [1, 2, 3, 4, 5];
// console.log(myarr.slice(2)); ///out new arry [3,4,5]
// console.log(myarr.slice(2, 5)); /// out new array if undefined value befor value show [3,4,5]
// console.log((myarr.slice(myarr.length - 2))); /// out new array az end start;
// console.log(myarr.slice(-2)); ////////////////////^^^^^^^^^^^^^^^^^^^^^^^^^^^^;
// console.log(myarr.slice()); /// out new array copy;
// console.log([...myarr]); ///^^^^^^^^out new array but unpack Array whit sperad ;

////splice new Array but original Array changed for DELETD A INDEX Array

//  console.log(myarr.splice(2));/// out new Array [3,4,5] and oigi Array [1,2]
// console.log(myarr.pop());
// console.log(myarr.splice(1,3)); /// out new Array index one place conter index second
// console.log(myarr);

//// REVERSE   in method change original Array
// const myarr1 = [10, 9, 8, 7, 6]
// console.log(myarr1.reverse()); ///[6,7,8,9,10]


///CONTACT
// const newarry = [...myarr, ...myarr1]
// console.log(newarry); ////Array [1,2,3,4,5,6,7,8,9,10] unpack...
// console.log(myarr.concat(myarr1)); // new Array[1,2,3,4,5,6,7,8,910]


////////// join

// console.log(myarr.join(',')); // new  [1,2,3,4,5,6] join=>  1,2,3,4,5,6;

// for (let i in newarry) {console.log(i)}  /// in for loop index
// for (let i of newarry) { console.log(i); } //// in for loop values
// newarry.forEach(fE => console.log(fE)) /// IN FOR LOOP VALUES
// const chm = newarry.map(fe => console.log(fe))
// console.log(chm);
// const forE = newarry.filter(filter => filter % 2 == 0)
// console.log(newarry, ...forE);
// const sam = newarry.reduce((total, value) => total + value, 100);
// console.log(sam);
// console.log(newarry.indexOf(3)); /// if not value  or 0 or '' opuput ouput -1,


///////////////////////////findInedx
// const fc = (fc) => fc > 9;
// console.log(newarry.push(2));
// console.log(newarry);
// const fl = newarry.findIndex((fc) => fc >1); /// in need a function if find firts value return index value
// console.log(fl);

 /////// method AT FOR ARRAY AND STRING

//  const myarrr = [1, 2, 3, 4, 5];
// console.log(myarr.at(-3)); ///in method find position indexs and retrun values index
// console.log('manoochehr'.at(2));///if not inter value retrun first value
 
const newa = [200, -550, 300, -650];
// console.log(newa);
 newa.forEach((loop,i,arr) => {
    if (loop > 0) {
        // console.log(`this a index ${i} ${loop}`)
    }
    else {
        // console.log(`this a index ${i} ${Math.abs(loop)}`);
    }
    //  loop > 0 ? console.log(`this a index ${i} ${loop}`) : console.log(`this a index ${i} ${Math.abs(loop)}`)
 })
 const newt = newa.map(loop => loop);
//  console.log(newa);


 ///// MAP NAD SET FOR SAVE A KEYS ,VALUES 
const newM = new Map();// NEW OBJ AZ MAP
newM.set('appel', 100);/// ADD NEW KEY AND VALUE TO MAP
newM.set('samsung', 120); /// ADD NEW KEY AND VALUE TO MAP
newM.set('lg', 50); /// ADD NEW KEY AND VALUE TO MAP
// console.log(newM);
// newM.forEach((value, key) => console.log(`${key}:${value} `))
// for (let [key, value] of newM) { console.log(`${key + ' ' + value} `) }
// console.log(newM.get('lg')); /// READING A KEY


const a = {};
const b = {};
const newobj = new Map([[a, 20], [b, 50]]);
newobj.set('c', 500)
newobj.set('c', 'JS')
newobj.set('z','5')
// console.log(newobj);

////////////// filter   
const numberF = [10, 20, 30, 5, 50, 100,];
const numberO = [
    { name: 'manoochehr', active: true, age: 50 },
    { name: "ali", active: false, age: 36 },
    { name: 'reza', active: false, age: 20 },
    {name:'farnosh',active:true,age:53}
]

// const newfilter = numberO.filter(num => num.active && num.age >50);

// console.log(newfilter);
// console.log(numberO);


/////////MAP
// const helf = numberO.map(num => {
//     if (num.age == 53) {
//         num.age = num.age / 2;
//         // {
//         //  name: num.name,
//         //  active: num.active,
//         //     age: num.age / 2
//         // }
//         return num
//     } else {
//          return {
//              num
//          }
//     }
// });
// console.log(numberO,helf);
// console.log(numberF);


////////reduce

// const total = numberO.reduce((acc, curr) => {
//     if (curr.name === 'manoochehr') {
//         acc += curr.age/2;
//     }
//     return acc;
// }, 5);

// console.log(total);
const n = 'manoochehr';
const number = [20, 10, 5, 55, 65, 1, 75]
numberO.sort((a, b) => a.age-b.age );
// console.log(numberO);

const filter =
    numberO
        .filter(fill => fill.active)
        .map(fill => `${fill.name} this is active ${fill.active} ${fill.age*2}`);

// console.log(filter);
  


///////date & time

const now = new Date();
console.log(now);
console.log(now.getFullYear());////سال
console.log(now.getMonth());//////ماه
console.log(now.getDate()); ////ایندکس روز هفته
console.log(now.getDay()); ////روز
console.log(now.getHours()); ////ساعت
console.log(now.getMinutes()); ////دقیقه
console.log(now.getSeconds()); ////ثانیه
console.log(now.getTime()); ////ساعت شروع از سال 1970 تا به روز
console.log(now.toDateString()); ////سال ماه اندیکس هفته روز
console.log(now.toTimeString()); ////ساعت جهانی
console.log(now.toLocaleString()); ////ساعت محلی


