function calculateBMI() {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = (weight / (height * height) * 10000)

    document.getElementById('heading').innerHTML = 'Your BMI is :'
    document.getElementById('bmi-output').innerHTML = bmi

    if (bmi <= 18) {
        document.getElementById('message').innerHTML = 'You are underweight'
    } else if (bmi >= 18.5 && bmi <= 25){
        document.getElementById('message').innerHTML = 'You are a healthy weight'
    } else {
        document.getElementById('message').innerHTML = 'You are overweight'
    }

}






// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => calculate(e.target.dataset.value));
// });