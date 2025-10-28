const firstModule = require('./first-module');

console.log('Addition of 10 and 20: ', firstModule.add(10, 20)); // 30

try {
    console.log("Trying to divide by zero");
    let result = firstModule.divide(10, 0);
    console.log('Division of 10 by 0: ', result);
} catch (err) {
    console.error("Caught an error:", err.message);
}

// // Module wrapper function demonstration
// {
//     function(exports, require, module, __filename, __dirname) {
//         // Your module code would go here
//     }
// }
