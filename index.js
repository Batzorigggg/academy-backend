   
    //const result = [];
    //result.push(gameResult);
    //console.log(result);
    import { TooTaah } from "./number.js";
    import { RockPaper } from "./rockpaper.js";
    import { Dice } from "./dice.js";
  const StartGame = () => {
  const games = {
  word: () => {
    console.log("Word chuluu daawuu togloh gj bn");
  },
  dice: Dice()
  number: () => {
    TooTaah()
  },
 
  rockpaper: () => {
    RockPaper()
  }
};

const game = window.prompt("Ymar togloom togloh we");

games[game]();
}

let asd = 1;

while( asd != 3 )
{
StartGame();

console.log("\n1.Dahin togloh\n2.Uur togloom songoh\n3.Garah");

const input = window.prompt("Songoltiin dugaar:");

const choice = {
    1: () => {
        //games();
    },
    2: () => {
        StartGame();
    },
    3: () => {
        asd = 3;
        console.log("result");
    }
}
choice[input]();
}
 const resultArray = [];
resultArray.push(gameResult);