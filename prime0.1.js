function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}

let userInput;
let number;

do {
    userInput = prompt("Enter a number:");

    // Check if the user canceled the prompt
    if (userInput === null) {
        console.log("User canceled the input. Please enter a number.");
    } else {
        // Try to convert the input to an integer
        number = parseInt(userInput);

        if (isNaN(number)) {
            console.log("Please enter a valid number.");
        } else {
            const result = isPrime(number);
            console.log(`${number} is ${result ? 'prime' : 'not prime'}.`);
        }
    }
} while (userInput === null || isNaN(number));
