function GradeCalculation(){
switch (true) {
    case (score <= 100 && score >= 90):
        console.log("Grade A Students");
        break;
        case (score <= 89 && score >= 80):
        console.log("Grade B Students");
        break;
        case (score <= 79 && score >= 70):
        console.log("Grade C Students");
        break;
        case(score >= 34):
        console.log("Fail");
        break;
    default:
        break;
}

}

let score=78;
GradeCalculation();
