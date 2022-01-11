const appelStore = {
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

function sum(a,v,r) {
    return console.log(a+v+r);
}
const nu = ['m','o','o'];
sum(...nu);



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

const newTax = (rate) => {
       return function (valua)  {
        return valua + valua * rate;
    }
}
const newVal1 = newTax(.7);
console.log( newVal1(100));
