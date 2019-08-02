/* eslint-disable strict */
const Queue = require('../QueueFiles/Queue');


let cats = new Queue();


let catsArray = [{
  imageURL: 'https://placekitten.com/200/300',
  imageDescription: 'Young cat snow',
  name: 'Cat Snow of House Stark',
  sex: 'Male',
  age: 1,
  breed: 'Domestic short haired',
  story: 'Here is a story of Cat Snow....'
},
{
  imageURL: 'https://placekitten.com/200/301',
  imageDescription: 'Curious cat',
  name: 'Katron Lannister',
  sex: 'Male',
  age: 1,
  breed: 'Domestic short haired',
  story: 'Here is a story of Katron....'
},
{
  imageURL: 'https://placekitten.com/200/302',
  imageDescription: 'This cat judges you evey day',
  name: 'Judge Dredd',
  sex: 'Male',
  age: 2,
  breed: 'Multicolored cat',
  story: 'Here is a story of Judge Dredd....'
},
{
  imageURL: 'https://placekitten.com/300/304',
  imageDescription: 'Sleepy head',
  name: 'Sleepster the Trickster',
  sex: 'Female',
  age: 3,
  breed: 'Domestic short haired',
  story: 'Here is a story of Sleepster the Trickster....'
}
];



catsArray.forEach(cat => {
  cats.enqueue(cat);
});

function display(queue) {
  let array = [];
  while (queue.first !== null) {
    array.push(queue.first.value);
    queue.first = queue.first.next;
  }
  return array;
}

const CatsServices = {
  adopt() {
    cats.dequeue();
  },

  displayAll() {
    return display(cats);
  }
};

module.exports = CatsServices;