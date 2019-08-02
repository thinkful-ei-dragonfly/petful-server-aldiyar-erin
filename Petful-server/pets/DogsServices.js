/* eslint-disable strict */
const Queue = require('../QueueFiles/Queue');

let dogs = new Queue();

let dogsArray = [{
  ImageURL: 'http://place-puppy.com/200x202',
  imageDescription: 'Doggo',
  name: 'Shyster the Dog',
  sex: 'Male',
  age: 2,
  breed: 'Puppy',
  story: 'Here is a story of Shyster the Dog....'
},
{
  ImageURL: 'http://place-puppy.com/200x204',
  imageDescription: 'Perfect puppy',
  name: 'Yawny',
  sex: 'Female',
  age: 1,
  breed: 'Retreiver',
  story: 'Here is a story of Yawny....'
},
{
  ImageURL: 'http://place-puppy.com/200x206',
  imageDescription: 'Black Fury',
  name: 'Toothless',
  sex: 'Male',
  age: 3,
  breed: 'Retreiver',
  story: 'Here is a story of Toothless....'
},
{
  ImageURL: 'http://place-puppy.com/200x210',
  imageDescription: 'Has big ears',
  name: 'Expensivy',
  sex: 'Female',
  age: 2,
  breed: 'Bulldog',
  story: 'Here is a story of Expensivy....'
}
];

dogsArray.forEach(dog => {
  dogs.enqueue(dog);
});

const DogsServices = {
  getLast() {
    return dogs.dequeue();
  }
}

module.exports = DogsServices;