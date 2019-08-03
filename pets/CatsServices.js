/* eslint-disable strict */
const Queue = require('../QueueFiles/Queue');
const adopters = require('./Adopters');


let cats = new Queue();


let catsArray = [{
  imageURL: 'https://placekitten.com/200/300',
  imageDescription: 'Young cat snow',
  name: 'Cat Snow of House Stark',
  sex: 'Male',
  age: 1,
  breed: 'Domestic short haired',
  story: 'Here is a story of Cat Snow....',
  adopter: null,
},
{
  imageURL: 'https://placekitten.com/200/301',
  imageDescription: 'Curious cat',
  name: 'Katron Lannister',
  sex: 'Male',
  age: 1,
  breed: 'Domestic short haired',
  story: 'Here is a story of Katron....',
  adopter: null,
},
{
  imageURL: 'https://placekitten.com/200/302',
  imageDescription: 'This cat judges you evey day',
  name: 'Judge Dredd',
  sex: 'Male',
  age: 2,
  breed: 'Multicolored cat',
  story: 'Here is a story of Judge Dredd....',
  adopter: null,
},
{
  imageURL: 'https://placekitten.com/300/304',
  imageDescription: 'Sleepy head',
  name: 'Sleepster the Trickster',
  sex: 'Female',
  age: 3,
  breed: 'Domestic short haired',
  story: 'Here is a story of Sleepster the Trickster....',
  adopter: null,
}
];

const random = Math.floor(Math.random() * catsArray.length);

catsArray.forEach((cat, index) => {
  if(index === random){
    cat.adopter = null;
    cats.enqueue(cat);
  } else {
    const adopter = adopters.dequeue();
    cat.adopter = adopter;
    cats.enqueue(cat);
    adopters.enqueue(adopter);
  }
});

function display(queue) {
  let array = [];
  while (queue.first !== null) {
    array.push(queue.first.value);
    queue.first = queue.first.next;
  }
  console.log(array);
  return array;
}

const CatsServices = {
  adopt() {
    let dq = cats.dequeue();
    if(dq.adopter === null){
      cats.enqueue(dq);
    } else{
      let adopterName = adopters.dequeue();
      dq.adopter = adopterName;
      cats.enqueue(dq);
      adopters.enqueue(adopterName);
    }
  },

  readQue() {
    const arr = [];
    if(!cats.first) {
      return [];
    }
    let curr = cats.first;
    while(curr.prev!==null) {
      arr.push(curr.value);
      curr = curr.prev;
    }
    arr.push(curr.value);
    return arr;
  },
  

  displayAll() {
    return display(cats);
  }
};

module.exports = CatsServices;