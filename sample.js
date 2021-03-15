const dashPhoneNumber = require('./dash-phonenumber')

console.log(dashPhoneNumber('01033280917', { space: true })) // Result: 010 - 3328 - 0917
console.log(dashPhoneNumber('01033280917', { space: false })) // Result: 010-3328-0917
console.log(dashPhoneNumber('01033280917', { space: false, shape: 'dot' })) // Result: 010.3328.0917
console.log(dashPhoneNumber('01033280917', { space: true, shape: 'dot' })) // Result: 010. 3328. 0917
