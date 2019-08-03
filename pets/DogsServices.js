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
  story: 'Here is a story of Shyster the Dog....',
  adopter: null,
},
{
  imageURL: 'http://place-puppy.com/200x204',
  imageDescription: 'Perfect puppy',
  name: 'Yawny',
  sex: 'Female',
  age: 1,
  breed: 'Retreiver',
  story: 'Here is a story of Yawny....',
  adopter: null,
},
{
  imageURL: 'http://place-puppy.com/200x206',
  imageDescription: 'Black Fury',
  name: 'Toothless',
  sex: 'Male',
  age: 3,
  breed: 'Retreiver',
  story: 'Here is a story of Toothless....',
  adopter: null,
},
{
  imageURL: 'http://place-puppy.com/200x210',
  imageDescription: 'Has big ears',
  name: 'Expensivy',
  sex: 'Female',
  age: 2,
  breed: 'Bulldog',
  story: 'Here is a story of Expensivy....',
  adopter: null,
}
];

const random = Math.floor(Math.random() * dogsArray.length);

dogsArray.forEach((dog, index) => {
  if(index === random){
    dog.adopter = null;
    dogs.enqueue(dog);
  } else {
    const adopter = adopters.dequeue();
    dog.adopter = adopter;
    dogs.enqueue(dog);
    adopters.enqueue(adopter);
  }
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
    let dq = dogs.dequeue();
    if(dq.adopter === null){
      dogs.enqueue(dq);
    } else{
      let adopterName = adopters.dequeue();
      dq.adopter = adopterName;
      dogs.enqueue(dq);
      adopters.enqueue(adopterName);
    }
  },

  readQue() {
    const arr = [];
    if(!dogs.first) {
      return [];
    }
    let curr = dogs.first;
    while(curr.prev!==null) {
      arr.push(curr.value);
      curr = curr.prev;
    }
    arr.push(curr.value);
    return arr;
  },

  displayAll() {
    return display(dogs);
  }
};

module.exports = DogsServices;