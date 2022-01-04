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
    time_job: {},
    showModels({
        storge,
        model,
        color,
        price
    }) {
        console.log(`this is a appel model ${model} ${storge}  ${price} ${color} `)
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