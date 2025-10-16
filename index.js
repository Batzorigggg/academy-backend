let b;
let c = 0;
    let h = 0;
    let t = 0;
//function haichchuluu()

let input = '1';
    while( input != 0 )
{
    input = window.prompt("haich chuluu daavuu-s negiig oruul");

    const items = ["haich", "chuluu", "daavuu"];
    const random = Math.floor(Math.random() * items.length);
    let a = items[random];

        switch(a)
    {
        case 'haich':
            if ( input == 'chuluu' ) { console.log("Hereglegch:",input,"\nComputer:",a,"\nChi hojloo"); h++; break; }
            else if ( input == 'haich' ) { console.log("Hereglegch:",input,"\nComputer:",a,"\nTentslee"); t++; break; }
            else if ( input == 'daavuu' ) { console.log("Hereglegch:",input,"\nComputer:",a,"\nChi hojigdloo"); c++; break; }
        case 'daavuu':
            if ( input == 'chuluu' ) { console.log("Hereglegch:",input,"\nComputer:",a,"\nChi hojigdloo"); c++; break; }
            else if ( input == 'haich' ) { console.log("Hereglegch:",input,"\nComputer:",a,"\nChi hojloo"); h++; break; }
            else if ( input == 'daavuu' ) { console.log("Hereglegch:",input,"\nComputer:",a,"\nTentslee"); t++;  break; }
        case 'chuluu':
            if ( input == 'chuluu' ) { console.log("Hereglegch:",input,"\nComputer:",a,"\nTentslee"); t++; break; }
            else if ( input == 'haich' ) { console.log("Hereglegch:",input,"\nComputer:",a,"\nChi hojigdloo"); c++; break; }
            else if ( input == 'daavuu' ) { console.log("Hereglegch:",input,"\nComputer:",a,"\nChi hojloo"); h++; break; }
    }
    }
    console.log("Hereglegch hojson too:",h,"\nComputer hojson too:",c,"\nTentssen too:",t);
