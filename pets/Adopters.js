/* eslint-disable strict */
const Queue = require('../QueueFiles/Queue');

const arrayAdopters = [
  { name: 'ME' },
  { name: 'John Snow' },
  { name: 'Sansa Stark' },
  { name: 'Juggernaut' },
  { name: 'John Doe' },
  { name: 'Sam Laurence' },
  { name: 'Iggy Pop' },
  { name: 'Rose Gold' },
  { name: 'Qwerty Staff' },
  { name: 'Lonely Star' },
  { name: 'Fara Bei' },
  { name: 'Lera Zin' },
];

let adopters = new Queue();

arrayAdopters.forEach(adopter => {
  adopters.enqueue(adopter);
});

module.exports = adopters;

