
export const calculate=(weightKg, heightCm)=>{
    // Convert height from centimeters to meters
    var heightM = heightCm / 100;

    // Calculate BMI
    var bmi = weightKg / (heightM * heightM);

    return(bmi.toFixed(2));
}

export const verdict=(bmi)=>{
    console.log(typeof(bmi));
    if (bmi < 18.5) {
        return "You are Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "You are Normal weight";
    } else {
        return "You are Overweight";
    }
}