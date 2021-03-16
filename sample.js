const dashPhoneNumber = require('./lib/dash-phonenumber').default

console.log(dashPhoneNumber('01033280917')) // Result: 010-3328-0917
console.log(dashPhoneNumber('01033280917', { separator: '. ' })) // Result: 010. 3328. 0917
