const chalk = require('chalk');
const sum = require('@pokedex/sum');
const total = sum(5, 5);
console.log(chalk.green(total));