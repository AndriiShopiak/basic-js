const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor(value = true) {
    this.value = value;
  }
  encrypt(message, key) {
    let indexOfKey = 0;
    let res = [];
    let index = 0;

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let messageArr = message.toUpperCase().split("");

    let arrayOfKeys = key.toUpperCase().split("").map((el) => {
      return el.charCodeAt(0) - "A".charCodeAt(0);
    });

    while (index <= messageArr.length -1) {
      if (messageArr[index].toUpperCase() !== messageArr[index].toLowerCase()) {
        res.push(String.fromCharCode("A".charCodeAt(0) + (messageArr[index].charCodeAt(0) - "A".charCodeAt(0) + arrayOfKeys[indexOfKey % arrayOfKeys.length]) % 26));
        indexOfKey += 1;
      } else {
        res.push(messageArr[index]);
      }
      index += 1;
    }

    if(this.value) {
      return res.join("");
    }
    return res.reverse().join("");
  }
  decrypt(message, key) {
    let indexOfKey = 0;
    let resArr = [];
    let index = 0;

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let messageArr = message.toUpperCase().split("");

    let arrayOfKeys = key.toUpperCase().split("").map((el) => {
      return el.charCodeAt(0) - "A".charCodeAt(0);
    });

    while (index <= messageArr.length -1) {
      if (messageArr[index].toUpperCase() !== messageArr[index].toLowerCase()) {
        resArr.push(String.fromCharCode("A".charCodeAt(0) + (messageArr[index].charCodeAt(0) - "A".charCodeAt(0) - arrayOfKeys[indexOfKey % arrayOfKeys.length] + 26) % 26));
        indexOfKey += 1;
      } else {
        resArr.push(messageArr[index]);
      }
      index += 1;
    }

    if(this.value) {
      return resArr.join("");
    }
    return resArr.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
