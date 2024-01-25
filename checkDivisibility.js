let divi;
let divisor;
let input;
let Input;
function isDivisible(input,Input){
    if( divi == 0 && divisor == 0){
        console.log("0/0 is indeterminate form.")
    }
    if(divisor==0){
        console.log("Division by 0 is not possible.")
    }
    if(divi % divisor==0){
        return true;
    }else{
        return false;
    }
}
do{
    divi=prompt("Enter your number.");
    divisor=prompt("Enter number by which you want to check divisibility.");
    if(divi===null || divisor ===null){
        console.log("You have cancelled the input.");
    }else{
        if(divisor==="0"){
            console.log("You have entered invalid input 0 in second number. Please input valid number.");
        }else{
            input=parseInt(divi);
            Input=parseInt(divisor);
            if(isNaN(input) ||  isNaN(Input)){
                console.log("Please enter valid number.")
            }else{
                const result = isDivisible(input,Input);
                
                console.log(`${input} is ${result ? 'divisible' : 'not divisible'} by ${Input}.`);
            }
        }
    }
}while(divi === null || divisor === null || divisor==="0" || divi === "" || divisor === "" || isNaN(divi) || isNaN(divisor));