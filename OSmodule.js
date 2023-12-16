
// OS module 

const os = require('os');

//  info about current user

const user = os.userInfo()
console.log(user)

//  methode returns the sys uptime in seconds

console.log(`the sys Uptime is${os.uptime()}`)

// const user = os.uptime()
console.log("............................")

const current ={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
    name:os.machine(),
}
console.log(current)
