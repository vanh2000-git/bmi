function check(){
    let height = +document.getElementById("height").value;
    let weight = +document.getElementById("weight").value;
    let bmi = weight / ((height/100) ^ 2);
    let result;
    if (bmi < 18) {
        result="Underweight";
    } else if (bmi < 25.0) {
        result="normal";
    } else if (bmi < 30.0) {
        result="Overweight";
    }else
        result="Obese";
document.getElementById("result").innerHTML = "Your bmi is: "+bmi+ " You are: "+result;
}