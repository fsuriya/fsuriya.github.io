const os = require('os');

console.log(os.platform());
console.log(os.arch());
// console.log(os.cpus());
console.log(os.freemem()+'/'+os.totalmem());
console.log(os.homedir());
console.log(os.uptime()+'s');