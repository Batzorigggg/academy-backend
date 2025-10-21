   
    import { number } from "./number.js";
    import { rockpaper } from "./rockpaper.js";
    import { dice } from "./dice.js";
    import { word } from "./word.js";
 
const games = {
  rockpaper: rockpaper,
  word: word,
  dice: dice,
  number: number
};

const resultArray = [];

let currentGame ;
console.log(currentGame);

const startGame = () => {
  let gameResult = {};

  if( currentGame ){
    gameResult = games[currentGame]();
  }
  else {
    currentGame = window.prompt("Ymar togloom togloh ve?");
    gameResult = games[currentGame]();
  }

  resultArray.push(gameResult);

  const choice = Number(window.prompt("\n1.Dahin togloh\n2.Uur togloom songoh\n3.Garah"));
  if( choice === 1 ) { return startGame(); }
  else if( choice === 2) { currentGame =""; return startGame(); }
  else if( choice ===  3) { return resultArray; }
}

startGame();
console.log(resultArray);
//const game = window.prompt("Ymar togloom togloh we");

//games[game]();

//let asd = 1;

//while( asd != 3 )
//{
//StartGame();

//console.log("\n1.Dahin togloh\n2.Uur togloom songoh\n3.Garah");

//const input = window.prompt("Songoltiin dugaar:");

//const choice = {
  //  1: () => {
        //games();
   // },
    //2: () => {
      //  StartGame();
    //},
    //3: () => {
      //  asd = 3;
       // console.log("result");
   // }
//}
//choice[input]();
//}

//resultArray.push(gameResult);