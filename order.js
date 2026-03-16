#!/usr/bin/env node

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Benvenuto nella Pizzeria Bella Italia!');
console.log('Menu:');
console.log('1. Margherita - €8');
console.log('2. Pepperoni - €10');
console.log('3. Quattro Stagioni - €12');

rl.question('Scegli una pizza (1-3): ', (choice) => {
  let pizza;
  let price;
  switch (choice) {
    case '1':
      pizza = 'Margherita';
      price = 8;
      break;
    case '2':
      pizza = 'Pepperoni';
      price = 10;
      break;
    case '3':
      pizza = 'Quattro Stagioni';
      price = 12;
      break;
    default:
      console.log('Scelta non valida.');
      rl.close();
      return;
  }
  console.log(`Hai ordinato: ${pizza} per €${price}`);
  console.log('Grazie per l\'ordine!');
  rl.close();
});