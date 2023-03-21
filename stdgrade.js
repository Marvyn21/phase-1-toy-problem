// student grade generator
function inputMarks (){
    const grades = parseFloat(prompt("Enter grade: "));

    if (grades > 79){
        return "A";
    } else if (grades >= 60 && grades <= 79){
        return "B";
    } else if(grades >= 49 && grades <= 59){
        return "C";
    } else if (grades >= 40 && grades <= 49){
        return "D";
    } else{
        return "E";
    }
}

const yourGrade = inputMarks();
alert (`Your grade is ${yourGrade}`)