 import tie1 from "./images/tie1.jpg"
 import shoe1 from "./images/shoe1.jpg"
 import keychain1 from "./images/keychain1.jpg"
 import pensnstickers2 from "./images/pensnstickers2.jpg"
 import stickerlabel1 from "./images/stickerlabel1.jpg"
 import booklabel from "./images/booklabel.jpg"
 import combo2 from "./images/combo2.jpg"
 import ribbon1 from "./images/ribbon1.jpg" 

export const allProducts = [
    {
        id: 1,
        img: tie1,
        title: "Iron on labels",
        quantity: [50, 100, 150, 200],
        price: [80, 140, 185, 235],
        // font: [font1, font2],
        bg: "#65e17a", 
    },
    {
        id: 2,
        img: tie1,
        title: "Sew on labels",
        quantity: [50, 100],
        price: [160, 210],
        // font: [font1, font2],
        bg: "#8cdf58", 
    },
    {
        id: 3,
        img: shoe1,
        title: "Shoe labels",
        quantity: [10, 20],
        price: [30, 45],
        // font: [font1, font2],
        bg: "#ca72da", 
    },
    {
        id: 4,
        img: keychain1,
        title: "Keychain",
        quantity: [1, 2],
        price: [20, 30],
        // font: [font1, font2],
        bg: "#65e17a", 
    },
    {
        id: 5,
        img: pensnstickers2,
        title: "Wrap around labels",
        quantity: [50, 100],
        price: [55, 85],
        // font: [font1, font2],
        bg: "#8cdf58", 
    },
    {
        id: 6,
        img: stickerlabel1,
        title: "Sticker labels",
        Size: [[30, 10],[45, 15]],
        quantity: [50, 100, 150],
        price: [[35, 50, 70],[40, 60, 80]],
        // font: [font1, font2],
        bg: "#ca72da", 
    },
   
    {
        id: 7,
        img: booklabel,
        title: "Book labels",
        quantity: [50, 100, 150, 200],
        price: [35, 50, 70, 90],
        // font: [font1, font2],
        bg: "#65e17a", 
    },
    {
        id: 8,
        img: combo2,
        title: "Combo labels",
        items:["Stationery", "Clothing"],
        price: [180, 220],
        // font: [font1, font2],
        description:[],
        bg: "#8cdf58", 
    },
    {
        id: 9,
        img: ribbon1,
        title: "Ribbons",
        quantity: [10, 20, 30],
        price: [30, 55, 75],
        // font: [font1, font2],
        bg: "#ca72da", 
    },
]

export const userChoice = [
    {
        id: 1,
        cartItems: [],
        cartNumber: 0,
        wishlist: []
    }
]