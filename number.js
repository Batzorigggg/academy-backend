export const TooTaah = () => {
    let b = Math.floor(Math.random() * 10) + 1;
    let i = 1;
    while ( i < 4 )
    {
        let a = window.prompt("1-10 iin hoorond too oruul");
        if ( a === b ) { console.log("Zuv taalaa"); i = 5; }
        else if ( a > b ) console.log("Oruulsan too ih bn");
        else console.log("Oruulsan too baga bn");
        i++;
    }
    if( i === 4 )  console.log("Ta hojigdloo");
}