export const number = () => {
    const b = Math.floor(Math.random() * 10) + 1;
    let i = 0;
    let isWin;
    let numbers = [];

    while ( i < 3 )
    {
        let a = Number(window.prompt("1-10 iin hoorond too oruul"));
        numbers[i] = a;
        if ( a === b ) { isWin = true;  console.log("Zuv taalaa"); i = 4; }
        else if ( a > b ) console.log("Oruulsan too ih bn");
        else console.log("Oruulsan too baga bn");
        i++;
    }
    if( i === 3 )  { isWin = false; console.log("Ta hojigdloo"); }

    return {
         isWin ,
         game: "number",
         metadata: {
         UgugdsunToo: b,
         numbers: numbers
    }
    }
}