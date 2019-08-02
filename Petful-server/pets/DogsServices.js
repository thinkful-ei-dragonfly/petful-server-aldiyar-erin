/* eslint-disable strict */
const Queue = require('../QueueFiles/Queue');
const adopters = require('./Adopters');

let dogs = new Queue();

let dogsArray = [{
  imageURL: 'http://place-puppy.com/200x202',
  imageDescription: 'Doggo',
  name: 'Shyster the Dog',
  sex: 'Male',
  age: 2,
  breed: 'Puppy',
  story: 'Here is a story of Shyster the Dog....'
},
{
  imageURL: 'http://place-puppy.com/200x204',
  imageDescription: 'Perfect puppy',
  name: 'Yawny',
  sex: 'Female',
  age: 1,
  breed: 'Retreiver',
  story: 'Here is a story of Yawny....'
},
{
  imageURL: 'http://place-puppy.com/200x206',
  imageDescription: 'Black Fury',
  name: 'Toothless',
  sex: 'Male',
  age: 3,
  breed: 'Retreiver',
  story: 'Here is a story of Toothless....'
},
{
  imageURL: 'http://place-puppy.com/200x210',
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

function display(queue) {
  let array = [];
  while (queue.first !== null) {
    array.push(queue.first.value);
    queue.first = queue.first.next;
  }
  return array;
}

const DogsServices = {
  adopt() {
    const dq = dogs.dequeue();
    const adopterName = adopters.dequeue();
    dq.adopter = adopterName;
    dogs.enqueue(dq);
    adopters.enqueue(adopterName);
  },

  displayAll() {
    return display(dogs);
  }
}

module.exports = DogsServices;