const readlineSync = require('readline-sync');

class GuessNumber {
  start () {
    console.log("游戏开始了");

    let randomNum = this.generateRandomNum();
    let userNum = readlineSync.question("请输入一个4位数:");

    console.log(userNum);
  }
  
  generateRandomNum () {
    let result = '';

    while (result.length < 4) {
      let digital = "" + parseInt(Math.random() * 10);
      if(result.indexOf(digital) === -1) {
        result += digital;
      }
    }

    return result;
  }
}

module.exports = GuessNumber;