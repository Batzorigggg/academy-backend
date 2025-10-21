export const Dice = () => {        
        let a = Math.floor(Math.random() * 6 ) + 1;
        let b = Math.floor(Math.random() * 6 ) + 1;
        if ( a + b == 7 || a + b == 11 )
        {
            console.log("Shoo 1:", a, "Shoo 2:", b, "Niilber->", a + b ,"\nTa hojloo!");
        }
        else console.log("Shoo 1:", a, "Shoo 2:", b, "Niilber->", a + b ,"\nTa hojigdloo");
    }