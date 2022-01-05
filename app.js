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



const num = [2, 4, 6];

function sami(a, q, w) {
    return a + q + w ;
}
console.log(sami(...num)); ///output 12


function sumt() {
    let tsum = 0;
    for (let i = 0; i < 7; i++) {
        if (i % 2 == 0) {
            tsum += i;
        }
    }
    return tsum;
}
console.log(sumt());////output 12


function sam() {
    const res = num.reduce((total, value) => total + value);    
        return res
}
console.log( sam())//// output 12


const nami = [];
function namii(...nami) {
     return nami.reduce((total,value) => total + value)
 }
console.log(namii(1, 2, 3, 4, 2)); //// output 12
 
