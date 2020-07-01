
//
// Object destructuring
//

// const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 90
//     }
// };

// const {name: firstName = 'Anonymous',age} = person;
// console.log(`${firstName} is ${age}`);


// const {city, temp:temperature} = person.location;

// if (city && temperature){
// console.log(`its ${temperature} in ${city}.`);

// }


// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'self-published'} = book.publisher;

// console.log(publisherName);   

//
// Array destructuring
//

const address = ['1299 S Juniper Street','Philadelphia','Pennsylvania','1947'];

const [, , state = 'New York'] = address;


console.log(`You are in ${city} ${state}`);