//Ejercicio 1

let numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados() {
    let numberElevados = n => n ** n;
    let resultado = numbers.map(numberElevados);
    return resultado;
}

elevados();
console.log(elevados());

//ejercicio 2
let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
let result2 = foodList.map((food) => {
    if (food === 'Pizza') {
        return 'Como soy de Italia, amo comer Pizza';
    } else if (food === 'Ramen') {
        return 'Como soy de Japón, amo comer Ramen';
    } else if (food === 'Paella') {
        return 'Como soy de Valencia, amo comer Paella';
    } else if (food === 'Entrecot') {
        return 'Aunque no como carne, el Entrecot es sabroso';
    }

});
console.log(result2);

//ejercicio 3
const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];

const result3 = staff.map(persona => {
    return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`;
});

console.log(result3);

//ejercicio 4
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result4 = numbers2.filter((number) => {
    return number % 2 !== 0;
});
console.log(result4);

//ejercicio 5
const foodList2 = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }];

let result5 = foodList2.filter(food => food.isVeggie);
console.log(result5);

//ejercicio 6
let inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a Cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];

let result6 = inventory
    .filter(item => item.price > 300)
    .map(item => item.name);
console.log(result6);

//ejercicio 7
let numeros3 = [39, 2, 4, 25, 62];
let result7 = numeros3.reduce((acc, numero) => acc * numero, 1);
console.log(result7)

//ejercicio 8
let sentenceElements = [
    'Me',
    'llamo',
    'Naza',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

let result8 = sentenceElements.reduce((acc, palabra) => acc + " " + palabra);
console.log(result8);

//ejercicio 9
const books = [
    {
        name: ' JS for dummies',
        author: 'Emily A. Vander Veer',
        price: 20,
        category: 'code'
    },
    {
        name: 'Don Quijote de la Mancha',
        author: 'Cervantes',
        price: 14,
        category: 'novel'
    },
    {
        name: 'Juego de tronos',
        author: 'George R. Martin',
        price: 32,
        category: 'Fantasy'
    },
    {
        name: 'javascript the good parts',
        author: 'Douglas Crockford',
        price: 40,
        category: 'code'
    }
];
let result9 = books.filter(book => book.category === "code")
    .reduce((total, book) => total + book.price, 0);
console.log(result9);









