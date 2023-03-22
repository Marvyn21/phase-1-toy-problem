// This function takes in a speed parameter and returns a string indicating the number of demerit points
// or "Ok" if the driver is not speeding.
function speedDetector(speed){
    const speedLimit = 70;
    const demeritPoints = 5;

    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const demerit = Math.floor((speed - speedLimit) / demeritPoints);

        if (demerit >= 12) {
            return "License suspended";
        } else {
            return `Points: ${demerit}`;
        }
    }
}

// Prompt the user to input the car's speed and convert it to a floating point number.
const speed = parseFloat(prompt("Enter the speed of the car: "));


// Call the speedDetector function with the user's input and store the result in a variable.
const result = speedDetector(speed);
alert(result);