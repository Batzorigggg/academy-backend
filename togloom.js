let counter = document.getElementById("niittoo");
let countershoo = document.getElementById("shootoo");
let counterug = document.getElementById("ugtaahtoo");
let countertoo = document.getElementById("tootoo");
let counterhaich = document.getElementById("haichtoo");

let counttoo = 1;
let counthaich = 1;
let countug = 1;
let countniit = 1;
let countshoo = 1;



document.getElementById("Shoo").addEventListener("click", function(){
    const garchig = document.getElementById("Garchig");
    garchig.innerText = "Shoo hayh togloom";

    let containerElement = document.getElementById("container"); 
    containerElement.innerHTML = `<button id="Shoobtn">Shoo hayh</button>`;

    document.getElementById("Shoobtn").addEventListener("click", function(){
        countershoo.innerHTML = `${countshoo++}`;
        counter.innerHTML = `${countniit++}`;
        let container2Element = document.getElementById("container2");
        let a = Math.floor(Math.random() * 6 ) + 1;
        let b = Math.floor(Math.random() * 6 ) + 1;
        if ( a + b == 7 || a + b == 11 )
        {
            container2Element.innerHTML = `<p>Shoo: ${a}+${b}=${a + b}. Ta hojloo</p>`
        }
        else 
            {
             container2Element.innerHTML = `<p>Shoo: ${a}+${b}=${a + b}. Ta hojigdloo</p>`;
            }
    });
});

document.getElementById("Ugtaah").addEventListener("click", function(){
    const garchig = document.getElementById("Garchig");
    garchig.innerText = "Ug taah togloom";

    // let containerElement = document.getElementById("container"); 
    // containerElement.innerHTML = `<button id="Ugbtn">Shoo hayh</button>`;

    document.getElementById("Shoobtn").addEventListener("click", function(){

    });
});

document.getElementById("TooTaah").addEventListener("click", function(){
    const garchig = document.getElementById("Garchig");
    garchig.innerText = "Too taah togloom";

    let containerElement = document.getElementById("container"); 
    containerElement.innerHTML = `<p><input id="input"></input><button id="btn">Taah</button></p>`;

    const b = Math.floor(Math.random() * 10) + 1;
    let i = 0;
    let numbers = [];
    let asd = 4;
    let isFinished = false;
    while ( i < 3 )
    {
        document.getElementById("btn").addEventListener("click", function(){
        
        let container2Element = document.getElementById("container2");
       
    

        let a = input.value;
        numbers[i] = a;
        if ( a === b ) {   container2Element.innerHTML = `<p>Yg taalaa</p>`, i = 4; }
        else if ( a > b ) container2Element.innerHTML = `<p>Oruulsan too ih bn. Uldsen:${asd--}</p>`;
        else console.log("Oruulsan too baga bn");
        i++;
    })}
    if( i === 3 )  {  console.log("Ta hojigdloo"); }
    if (isFinished = true) {
        countertoo.innerHTML = `${counttoo++}`;
        counter.innerHTML = `${countniit++}`;
    }
});