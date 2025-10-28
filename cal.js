class Calculator {
    add(a, b) {
            return (a + b);
        
    }
    min(a, b) {
            return (a - b);
        }    
    mul(a, b){
            return (a * b);
        }
    div(a, b) {

            return (a / b);
    }
     
}
const cal = new Calculator();
console.log(cal.add(2,4));
