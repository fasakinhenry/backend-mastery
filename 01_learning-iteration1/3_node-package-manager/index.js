const lodash = require('lodash');

const names = ['henry', 'emma', 'amanda', 'ololade'];

const capitalizedNames = lodash.map(names, lodash.capitalize);

console.log(capitalizedNames);
