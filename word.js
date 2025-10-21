export const word = () => {
    let isWin;
    const a = "horse";
    let words = [];
    console.log("h***e");

    for ( let i = 0; i < 3; i++)
    {
        let b = window.prompt("Taah ug:");
        words[i] = b;
    if ( a === b ) { isWin = true; console.log("Zuv taalaa"); break;}
    else { console.log("buruu baina"); isWin = false;}
    }

  return {
    isWin,
    name: "word",
    metadata: {
      word: words
    }
  };
};