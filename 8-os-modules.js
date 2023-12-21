const os = require('os')


// Info about the current user
const user = os.userInfo()
console.log(user);

// method returns the system of time in sec
console.log(`The system update is ${os.uptime()} seconds`)

const currentOs = {
    name:     os.type(),
    release:  os.release(),
    totalMem: os.totalmem(),
    freeMem:  os.freemem(),
}

console.log(currentOs);  