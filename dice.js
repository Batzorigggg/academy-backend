export const dice = () => {        
        let a = Math.floor(Math.random() * 6 ) + 1;
        let b = Math.floor(Math.random() * 6 ) + 1;
        let isWin;
        if ( a + b == 7 || a + b == 11 )
        {
            isWin = true;
            console.log("Shoo 1:", a, "Shoo 2:", b, "Niilber->", a + b ,"\nTa hojloo!");
        }
        else 
            {
                isWin = false;
            console.log("Shoo 1:", a, "Shoo 2:", b, "Niilber->", a + b ,"\nTa hojigdloo");
            }
         return {
         isWin ,
         name: "dice",
         metadata: {
          shoo1: a,
          shoo2: b
    }
  };
    }