function calculateBMI() {
	// Don't edit the code
	let age = document.getElementById("age").value;
	let weight = document.getElementById("weight").value;
	let height = document.getElementById("height").value;
	let male = document.getElementById("m").checked;
	let female = document.getElementById("f").checked;
	console.table({ age, weight, height, male, female });

	// You are going to write the code here before the curly braces 👇🏻

	const bmi = weight / (height / 100) ** 2;

	let bmiStatus;

	if (age <= 24) {
		if (bmi < 18.5) {
			bmiStatus = "Underweight";
		} else if (bmi <= 24.9) {
			bmiStatus = "HealthyWeight";
		} else if (bmi <= 29.9) {
			bmiStatus = "Overweight";
		} else {
			bmiStatus = "Obesity";
		}
	} else if (age <= 34) {
		if (bmi < 20.5) {
			bmiStatus = "Underweight";
		} else if (bmi <= 25.9) {
			bmiStatus = "HealthyWeight";
		} else if (bmi <= 31.9) {
			bmiStatus = "Overweight";
		} else {
			bmiStatus = "Obesity";
		}
	} else if (age <= 44) {
		if (bmi < 21.5) {
			bmiStatus = "Underweight";
		} else if (bmi <= 26.9) {
			bmiStatus = "HealthyWeight";
		} else if (bmi <= 32.9) {
			bmiStatus = "Overweight";
		} else {
			bmiStatus = "Obesity";
		}
	} else if (age <= 54) {
		if (bmi < 22.5) {
			bmiStatus = "Underweight";
		} else if (bmi <= 27.9) {
			bmiStatus = "HealthyWeight";
		} else if (bmi <= 33.9) {
			bmiStatus = "Overweight";
		} else {
			bmiStatus = "Obesity";
		}
	} else if (age <= 64) {
		if (bmi < 23.5) {
			bmiStatus = "Underweight";
		} else if (bmi <= 28.9) {
			bmiStatus = "HealthyWeight";
		} else if (bmi <= 34.9) {
			bmiStatus = "Overweight";
		} else {
			bmiStatus = "Obesity";
		}
	} else if (age >= 65) {
		if (bmi < 24.5) {
			bmiStatus = "Underweight";
		} else if (bmi <= 29.9) {
			bmiStatus = "HealthyWeight";
		} else if (bmi <= 35.9) {
			bmiStatus = "Overweight";
		} else {
			bmiStatus = "Obesity";
		}
	} else {
		bmiStatus = "You need to put your age to view the status!";
	}

	const gender = male ? "Male" : "Female";

	const newBmi = bmi.toFixed(2);
	alert(`
  BMI = ${newBmi}
  Your Status = ${bmiStatus}
  Gender = ${gender}
  `);
}
