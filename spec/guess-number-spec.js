const GuessNumber = require('../guess-number');
const readlineSync = require('readline-sync');

describe("GuessNumber", ()=> {
  describe("generateRandomNum", ()=> {
    it("should return 4 different number", ()=> {
      let theGuessNumber = new GuessNumber();

      let randomNumArr = [0.1, 0.2, 0.3, 0.4];
      let index = 0;

      spyOn(Math, 'random').and.callFake(()=> {
        return randomNumArr[index++];
      });

      expect(theGuessNumber.generateRandomNum()).toBe('1234');
    });

    it("should return 4 different number when Math.random return same digital", ()=> {
      let theGuessNumber = new GuessNumber();

      let randomNumArr = [0.1, 0.2, 0.4, 0.4, 0.5];
      let index = 0;

      spyOn(Math, 'random').and.callFake(()=> {
        return randomNumArr[index++];
      });

      expect(theGuessNumber.generateRandomNum()).toBe('1245');
    });
  });

  describe("start", ()=> {
    it('shoule print what the user input', ()=> {
      spyOn(readlineSync, "question").and.returnValues("9999");
      spyOn(console, 'log');

      let theGuessNumber = new GuessNumber();
      theGuessNumber.start();

      expect(console.log).toHaveBeenCalledWith('9999');
    })
  });
});