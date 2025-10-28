let counter = document.getElementById("niittoo");
let countershoo = document.getElementById("shootoo");
let counterug = document.getElementById("ugtaahtoo");
let countertoo = document.getElementById("tootoo");
let counterhaich = document.getElementById("haichtoo");

let counttoo = 1; let tooWin = 0;
let counthaich = 1; let haichWin = 0;
let countug = 1; let ugWin = 0;
let countniit = 1; let niitWin = 0;
let countshoo = 1; let shooWin = 0;



document.getElementById("Shoo").addEventListener("click", function(){
    document.getElementById("container2").innerHTML = "";
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

document.getElementById("TooTaah").addEventListener("click", function(){
    document.getElementById("container2").innerHTML = "";
    const garchig = document.getElementById("Garchig");
    garchig.innerText = "Too taah togloom";

    let containerElement = document.getElementById("container"); 
    containerElement.innerHTML = `<p><input id="input"></input><button id="btn">Taah</button></p>`;

    const b = Math.floor(Math.random() * 10) + 1;
    let i = 0;
    let attempts = 3;
    let isFinished = false;

    const container2Element = document.getElementById("container2");
    const input = document.getElementById("input");
    const btn = document.getElementById("btn");

    btn.addEventListener("click", function(){
        if (isFinished) return;

        let a = Number(input.value);

        if (a === b) {
            container2Element.innerHTML = `<p>Yg taalaa! (${b})</p>`;
            isFinished = true;
        } else if (a > b) {
            attempts--;
            container2Element.innerHTML = `<p>Oruulsan too ih bn. Uldsen: ${attempts}</p>`;
        } else {
            attempts--;
            container2Element.innerHTML = `<p>Oruulsan too baga bn. Uldsen: ${attempts}</p>`;
        }

        i++;

        if (attempts === 0 && !isFinished) {
            container2Element.innerHTML = `<p>Ta hojigdloo! Zuv hariu: ${b}</p>`;
            isFinished = true;
        }

        if (isFinished) {
            countertoo.innerHTML = `${counttoo++}`;
            counter.innerHTML = `${countniit++}`;
        }
    });
});

document.getElementById("Haich").addEventListener("click", function(){
    document.getElementById("container2").innerHTML = "";
    const garchig = document.getElementById("Garchig");
    garchig.innerText = "Haich chuluu daavuu togloom";

    document.getElementById("container").innerHTML = `<p><button id = "chuluu">Chuluu</button><button id = "daavuu">Daavuu</button><button id = "haich">Haich</button></p>`;

     const rps = () => {
        const items = ["haich", "chuluu", "daavuu"];
        const random = Math.floor(Math.random() * items.length);
        return items[random];
    };

    const container2 = document.getElementById("container2");

    function play(userChoice) {
        const comp = rps();

        let result = "";
        if (userChoice === comp) {
            result = `Tentslee! (Computer = ${comp})`;
        } else if (
            (userChoice === "haich" && comp === "daavuu") ||
            (userChoice === "chuluu" && comp === "haich") ||
            (userChoice === "daavuu" && comp === "chuluu")
        ) {
            result = `Ta hojloo! (Computer = ${comp})`;
        } else {
            result = `Ta hojigdloo! (Computer = ${comp})`;
        }

        container2.innerHTML = `<p>${result}</p>`;

        counterhaich.innerHTML = `${counthaich++}`;
        counter.innerHTML = `${countniit++}`;
    }

    document.getElementById("haich").addEventListener("click", () => play("haich"));
    document.getElementById("chuluu").addEventListener("click", () => play("chuluu"));
    document.getElementById("daavuu").addEventListener("click", () => play("daavuu"));
});

document.getElementById("Ugtaah").addEventListener("click", function() {
    document.getElementById("container2").innerHTML = "";
    const garchig = document.getElementById("Garchig");
    garchig.innerText = "Ug taah togloom";

    const words = ["horse", "apple", "table", "river", "phone", "cloud", "plant", "mouse"];
    const a = words[Math.floor(Math.random() * words.length)];

    let attempts = 3;
    let isWin = false;

    const word = (word) => {
        if (word.length <= 2) return "*".repeat(word.length);
        return word[0] + "*".repeat(word.length - 2) + word[word.length - 1];
    };

    const container = document.getElementById("container");
    container.innerHTML = `
        <p>Та дараах үгийг таагаарай: <p>${word(a)}</p></p>
        <p><input id="wordInput" placeholder="Та үгээ бичнэ үү"></input>
        <button id="wordBtn">Таах</button></p>
    `;

    const container2 = document.getElementById("container2");
    const wordInput = document.getElementById("wordInput");
    const wordBtn = document.getElementById("wordBtn");

    wordBtn.addEventListener("click", function() {
        if (isWin || attempts === 0) return;

        let guess = wordInput.value.trim().toLowerCase();
        if (guess === "") {
            container2.innerHTML = `<p>Та ямар нэг үг оруулна уу!</p>`;
            return;
        }

        if (guess === a) {
            container2.innerHTML = `<p> Зөв таалаа! Үг нь <strong>${a}</strong>.</p>`;
            isWin = true;
        } else {
            attempts--;
            if (attempts > 0) {
                container2.innerHTML = `<p>Буруу байна. Үлдсэн оролдлого: ${attempts}</p>`;
            } else {
                container2.innerHTML = `<p>Та хожигдлоо! Зөв хариулт: <p>${a}</p></p>`;
            }
        }

        if (isWin || attempts === 0) {
            counterug.innerHTML = `${countug++}`;
            counter.innerHTML = `${countniit++}`;
            wordBtn.disabled = true;
        }
    });
});






