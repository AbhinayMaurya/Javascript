function ismultiple (number) {
    if(number % 5 == 0){
        return true;
    }
    else{
        return false;
    }
}
let input;
let number;
do{
    input = prompt("Enter a number.");
    if(input === null){
        console.log("You canceled input. Please enter a number.");
    }
    else{
        number = parseInt(input);
        
        if(isNaN(number)){
            console.log("Enter a valid number.")
        }
        else{
            const result = ismultiple(number);
            console.log(`${number} is ${result ? '' : 'not '}a multiple of 5.`);
        }
        
    }
    
} while( input === null || isNaN(number));
