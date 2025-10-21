     export const rockpaper = () => {

    const input = window.prompt("haich chuluu daavuu-s negiig oruul");

    const items = ["haich", "chuluu", "daavuu"];
    const random = Math.floor(Math.random() * items.length);
    let a = items[random];
        let isWin;
        switch(a)
    {
        case 'haich':
            if ( input == 'chuluu' ) { isWin = true; console.log("Hereglegch:",input,"\nComputer:",a,"\nChi hojloo"); break; }
            else if ( input == 'haich' ) { console.log("Hereglegch:",input,"\nComputer:",a,"\nTentslee"); break; }
            else if ( input == 'daavuu' ) { isWin = false; console.log("Hereglegch:",input,"\nComputer:",a,"\nChi hojigdloo"); break; }
        case 'daavuu':
            if ( input == 'chuluu' ) { isWin = false; console.log("Hereglegch:",input,"\nComputer:",a,"\nChi hojigdloo");  break; }
            else if ( input == 'haich' ) { isWin = true; console.log("Hereglegch:",input,"\nComputer:",a,"\nChi hojloo");  break; }
            else if ( input == 'daavuu' ) { console.log("Hereglegch:",input,"\nComputer:",a,"\nTentslee");  break; }
        case 'chuluu':
            if ( input == 'chuluu' ) { console.log("Hereglegch:",input,"\nComputer:",a,"\nTentslee"); break; }
            else if ( input == 'haich' ) { isWin = false; console.log("Hereglegch:",input,"\nComputer:",a,"\nChi hojigdloo"); break; }
            else if ( input == 'daavuu' ) { isWin = true; console.log("Hereglegch:",input,"\nComputer:",a,"\nChi hojloo"); break; }
    }
    return {
    isWin ,
    name: "rockpaper",
    metadata: {
      uservalue: input,
      computervalue: a
    }
  };
}