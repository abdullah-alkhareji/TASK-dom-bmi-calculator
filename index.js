function calculateBMI() {
	// Don't edit the code
	let age = document.getElementById("age").value;
	let weight = document.getElementById("weight").value;
	let height = document.getElementById("height").value;
	let male = document.getElementById("m").checked;
	let female = document.getElementById("f").checked;
	console.table({ age, weight, height, male, female });

	// You are going to write the code here before the curly braces 👇🏻
	// let height2 = height / 100;
	// let height3 = height2 ** 2;
	const bmi = weight / (height / 100) ** 2;

	let bmiStatus;

	if (bmi < 18.5) {
		bmiStatus = "Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		bmiStatus = "HealthyWeight";
	} else if (bmi >= 25 && bmi <= 29.9) {
		bmiStatus = "Overweight";
	} else {
		bmiStatus = "Obesity";
	}

	alert(`
  BMI = ${bmi}
  Your Status = ${bmiStatus}
  `);

	// if (bmi >= 19 && bmi <= 24 && age >= 19 && age <= 24) {
	// 	alert("You are Normal Weight");
	// } else if (bmi >= 20 && bmi <= 25 && age >= 25 && age <= 34) {
	// 	alert("You are Normal Weight");
	// } else if (bmi >= 21 && bmi <= 26 && age >= 35 && age <= 44) {
	// 	alert("You are Normal Weight");
	// } else if (bmi >= 22 && bmi <= 27 && age >= 45 && age <= 54) {
	// 	alert("You are Normal Weight");
	// } else if (bmi >= 23 && bmi <= 28 && age >= 55 && age <= 64) {
	// 	alert("You are Normal Weight");
	// } else {
	// 	alert("You are NOOOOT !!!! Normal Weight");
	// }
}
