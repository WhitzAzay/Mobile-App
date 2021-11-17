const products=[
    {
        id:1,
        name: 'aldsfhakdjf',
        // image:require('../assets/'),
        description:"alsdjfhlkasdfijasdlfkjsdlfkjsadf;lksjf;asfdsfakjsdfkas;d",
        prise:0,
        color:{red: "red", blue: "blue", green: "green", orange:"orange"},


    },
    {
        id:2,
        name: 'adsfkjds;la',
        // image:require('../assets/'),
        description:"adfja;lkdfja;lkdfja;sldkfja;dlfkjal;dfkjas;ldkfsa",
        prise:0,
        color:{red: "red", blue: "blue", green: "green", orange:"orange"},


    },
    {
        id:3,
        name: 'asdlfja;sldf',
        // image:require('../assets/'),
        description:"as;dfkjasd;flkjasfklajf;lakfja;dklfja;sdlfkjasdlfkajs;f",
        prise:0,
        color:{red: "red", blue: "blue", green: "green", orange:"orange"},


    },
    {
        id:4,
        name: 'asd;lfkj',
        // image:require('../assets/'),
        description:"aa;dslkfja;dlfkja;dlfkja;dslkfja;sldkfja;ldkfjasdfl;k",
        prise:0,
        color:{red: "red", blue: "blue", green: "green", orange:"orange"},


    },

]

export const item =()=> products
export const itemID =(id)=> {
    return products.find((product)=>(product.id ==id))
}