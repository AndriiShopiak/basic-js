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
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let arrayOfKeys = key.toUpperCase().split("").map((el) => {
      return el.charCodeAt(0) - "A".charCodeAt(0);
    });
    let messageArr = message.toUpperCase().split("");
    let indexOfKey = 0;
    let res = [];
    let index = 0;

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
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let arrayOfKeys = key.toUpperCase().split("").map((el) => {
      return el.charCodeAt(0) - "A".charCodeAt(0);
    });
    let messageArr = message.toUpperCase().split("");
    let indexOfKey = 0;
    let res = [];
    let index = 0;

    while (index <= messageArr.length -1) {
      if (messageArr[index].toUpperCase() !== messageArr[index].toLowerCase()) {
        res.push(String.fromCharCode("A".charCodeAt(0) + (messageArr[index].charCodeAt(0) - "A".charCodeAt(0) - arrayOfKeys[indexOfKey % arrayOfKeys.length] + 26) % 26));
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
}

module.exports = {
  VigenereCipheringMachine
};
