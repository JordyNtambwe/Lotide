const findKeyByValue = function(object, value) {
 
for(const key in object) {
   if(object[key] === value) {
     return key
   }
  }
}

// Or

// const objectKeys = Object.keys(object)

// for(const key of objectKeys) {
//   if(object[key] === value) {
//     return key
//   }
//  }
// }

module.exports = findKeyByValue