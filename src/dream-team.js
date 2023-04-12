const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [];
  if (Array.isArray(members)) {
    members.forEach(element => {
      if (typeof element == 'string') {
        let word = element.split('');
        let spaceArr = [];
        word.forEach(elem => {
          if (elem !== ' ') {
            spaceArr.push(elem);
          }
        })
        arr.push(spaceArr[0].toUpperCase());
      }
    })
  } else {
    return false;
  }
  return arr.sort().join('');
}

createDreamTeam(['amelia',
'ruby',
'lily',
'grace',
'millie',
'daisy',
'freya',
'erin',
'megan',
'jasmine',
'brooke']);

module.exports = {
  createDreamTeam
};
