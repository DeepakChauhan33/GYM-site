

function calculateBMI() {
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const height = parseFloat(heightInput.value) / 100;
  const weight = parseFloat(weightInput.value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    document.getElementById('result').innerText = "Please enter valid height and weight.";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  document.getElementById('result').innerText = `Your BMI is ${bmi} (${category})`;

  heightInput.value = "";
  weightInput.value = "";
}



