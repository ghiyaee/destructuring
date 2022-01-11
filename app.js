const appelStore =
    {
    model_Mobile: {
        iPhone13: {
            ProMax: {
                model: 'ProMax',
                storge: ['512 GB', '1024 GB'],
                color: ['silver', 'blue', 'white'],
                price: ['$2000', '$2500']
            },
            Pro: {
                model: 'Pro',
                storge: ['512 GB', '1024 GB'],
                color: ['silver', 'lightblue', 'white'],
                price: ['$1000', '$1300']
            },
            Mini: {
                model: 'Mini',
                storge: ['512 GB', '1024 GB'],
                color: ['black', 'blue', 'pink'],
                price: ['$700', '$900']
            }
        }
    },
    model_Watch: {},
    time_job: {
        sat: {
            open:11,close:24
        }
    },
    showModels({
        storge,
        model,
        color,
        price,
    }) {
        console.log(`this is a appel model ${model} ${storge}  ${price} ${color} `)
    }
   ,
    midens(obj) {
       console.log(obj);
    }
    ,
    appelyear(y1,y2,y3) {
        console.log(`this is one ${y1} and two ${y2} and three ${y3}`);
    }
}
////// DeStructuring
const {
    ProMax,
    Pro,
    Mini
} = appelStore.model_Mobile.iPhone13;
appelStore.showModels(ProMax)
appelStore.showModels(Pro)
appelStore.showModels(Mini)

const { time_job } = appelStore;
const {time_job :{sat:{open:opn,close:cls}} } = appelStore;
console.log(opn, cls);
// appelStore.midens({
//     countery: 'USA',
     
// })


////////////// ...spread Operator



const mr = [1, 2];
const mu = [...mr, 3, 4];
console.log(mu);
const yt = [...mu, 5, 6, 7,...mr,...mu];
console.log(yt);
const rr = [...ProMax.color,'USA']
console.log(rr);
const er = [...ProMax.color, ...Pro.color]
er[5]= "b";
console.log(er);
console.log(Pro.color);
const gh = 'manoochehr';
const rea = [...gh];
console.log(...rea);
rea[0] = 'G';
console.log(rea);
console.log(...gh);

function sum(e,...other) {
    // return console.log(nu);
    return console.log(e,...other);
}
const e = ['m','e','u','w','p',12,15,500];
sum(...e);



const number = [2, 4, 6];

function sum1(a, q, w) {
    return a + q + w ;
}
console.log(sum1(...number)); ///output 12


function sum2() {
    let sum= 0;
    for (let i = 0; i < 7; i++) {
        if (i % 2 == 0) {
            sum+= i;
        }
    }
    return sum;
}
console.log(sum2());////output 12


function sum3() {
 return number.reduce((total, value) => total + value);
}
console.log( sum3())//// output 12


function sum4(...number) {
     return number.reduce((total,value) => total + value)
 }
console.log(sum4(1, 2, 3, 4, 2)); //// output 12
 


function mul(...m) {
    return  m.reduce((total,value) => total*value,1)
}
console.log(mul(2, 1, 1, 1));

// const interYears = [prompt(`inter one`), prompt(`inter two`), prompt(`inter three`)];
// 1800
 
// appelStore.appelyear(...interYears);
// appelStore.appelyear(interYears[0], interYears[1], interYears[2])

const newappel = { mobiles: 'USA', appelStore, labtab: "mac" } ;
console.log(newappel);
const {iPhone13 } = newappel.appelStore.model_Mobile;
console.log(iPhone13.Pro.model = 'MAC');
console.log(appelStore);

const copynewappel = { ...newappel };
copynewappel.mobiles = 'ERUO';
console.log(copynewappel);
console.log(newappel);


const restaurant = {
    name: "brother's of Rahmani except jafar",
    address: `${Math.floor(Math.random() * 100 + 1)} Shah yad Ave`,
    city: "Tehran",
    state: "Persia",
    zipcode: "99999",
}
function showe({name,address,city}){
    console.log(`${ name}->${address} -> ${city}`);
}

showe(restaurant)

// const  {name,address,city,state,zipcode} = restaurant;
// const full = `${name} ${address}  ${city} ${state} ${zipcode}`;

// console.log(full);


const restaurant1 = [
    "brother's of Rahmani except jafar",
     `${Math.floor(Math.random() * 100 + 1)} Shah yad Ave`,
     "Tehran",
     "Persia",
     "99999",
]
const [as,,,a]=restaurant1
console.log(as,a);
// const cat = {
//     name: "cat",
//     color: "grey",
//     breed: "persian cat",
//     meow() {
//         console.log(`${this.color} ${this.breed} cats are amazing`)
//     },
//   self: this,
//     thisIs: `this is ${this}`,
// }
// console.log(cat.thisIs);

// const data = {
//   temp1: "001",
//   temp2: "002",
//   firstName: "arad",
//   lastName: "hasanpour",
// };

// const { temp1, temp2, ...restOfObject } = data;

// // const newArr = [...restOfItems];
// const newObj = { ...restOfObject };
// const item1 = {...newArr}
// const item2 = [{ ...newArr }]

// console.log('newArr :',newArr );
// console.log(' newObj:',newObj );
// console.log(' item1:',item1 );
// console.log(' item2:',item2 );
// debugger
let printNumTwo;
for (let i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function () {
            return i;
        };
    }
}
console.log(printNumTwo());

const stats = {
    max: 1000000,
    standard_deviation: 4.34,
    median: 34.54,
    maz: 6000000,
    min: 30,
    bie: 7
};


const half = ({
    max,
    min,
    bie
    ,maz
} = stats) =>((max * min) + maz ) * bie/100;

console.log(half());


const arr = [1, 2, 3,...[4, 5, 6, 7]];
console.log(arr);
const [ap, ...other] = arr;
console.log(ap, ...other);

const peri = {
    ar:[1, 2, 3,2],
    newarr:[4,5,6,7]
}


const funk = ({ ar, newarr } = peri) => {
    let sum=0;
    const nr = [...ar, ...newarr];
    for (let i of nr) {
        sum += i
    }
    console.log(sum);
}
funk()
 

const person = {
    name: "manoo",
    num:53
}
const person1 = {
    name: "farta",
    age:20
}

person.num = 20;
person1.num =53
console.log(person);
console.log(person1);

const personL = new Object();
personL.fName = "manoo";
console.log(person);
const personLL = {
    fName:"manoo"
}
//////////////////////////bind////////////////////////////////
const anbar1 = {
    ssd: [],
    gig:"GIG",
    add(val,valM='country') {
     return `${this.ssd.push({SSD:val+this.gig+'-'+valM})}`;
    }
}

const anbar2 = {
    ssd: [],
    gig: "GIG",
}
<<<<<<< HEAD
const anbar3 = {
    ssd: [],
    gig: "GIG",
}
=======

>>>>>>> e1416c83efae8a32e7eccc28be3cdbae11e4eddd
const adding = anbar1.add;

anbar1.TT=0 ;
anbar1.conter = function (){
    this.TT++;
    console.log(this);
 
};

anbar1.add(512,'UAS');
adding.call(anbar2, 256,'KOERA')
const addAnbar= adding.bind(anbar2, 120,'JOPAN');
addAnbar()
const addAnbars= adding.bind(anbar2);
<<<<<<< HEAD
addAnbars(60, 'IRAN')
const addAanbar3 = adding.bind(anbar3)
addAanbar3(1000,'HONKONG')
adding.call(anbar3,60,'TURKY')
console.log(anbar1);
console.log(anbar2);
console.log(anbar3);
document.querySelector('.added').addEventListener('click', anbar1.conter.bind(anbar1))



///withOut bind/////
const tax = (rate, value) => {   
    return rate * value + value;
}
console.log(tax(.7, 100));

///with bind///////
const newTex = tax.bind(null, 0.7);
console.log( newTex(100));
=======
addAnbars(60,'IRAN')
console.log(anbar1);
console.log(anbar2);
document.querySelector('.added').addEventListener('click', anbar1.conter.bind(anbar1))

const tax = (rate, value) => {
    
   console.log( rate*value+value)
}
tax(.7, 100);

const newT = tax.bind(null, 0.7);
newT(100);
>>>>>>> e1416c83efae8a32e7eccc28be3cdbae11e4eddd

const newTax = (rate) => {
       return function (valua)  {
        return valua + valua * rate;
    }
}
const newVal1 = newTax(.7);
console.log( newVal1(100));
<<<<<<< HEAD


const fname = (fname) => {
    return function (lsname) {
        return `${fname}-${lsname}`;
    }
}

const full = fname('manoochehr');
const fullname = full('ghiyaee');
console.log(fullname);
=======
>>>>>>> e1416c83efae8a32e7eccc28be3cdbae11e4eddd
