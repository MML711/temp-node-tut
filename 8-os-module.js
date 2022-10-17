const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// display the system uptime in seconds
console.log(`The system has been running for ${os.uptime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOS);