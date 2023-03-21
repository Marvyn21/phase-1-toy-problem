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

const speed = parseFloat(prompt("Enter the speed of the car: "));

const result = speedDetector(speed);
alert(result);