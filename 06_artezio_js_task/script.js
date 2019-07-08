//alert("It works!");

// Задание 1

for (var i = 10; i <=20; i++) {
	console.log(i);
}

// 1.1 Квадраты чисел от 10 до 20

for (var i = 10; i <= 20; i++) {
	console.log(i * i);
}

// 1.2 Сумма всех чисел от 10 до 20

var sumOfNumbers = 0;

for (var i = 10; i <= 20; i++) {
	sumOfNumbers += i;
}

console.log(sumOfNumbers);

/*
parseInt возвращает NaN для пустой строки или строки из пробелов,
что весьма удобно.

function buttonClick1() {
	var x1 = parseInt(document.getElementById('x1').value);
	var x2 = parseInt(document.getElementById('x2').value);
	
	if (Number.isNaN(x1) || Number.isNaN(x2)){
		alert("В поля x1 и x2 должны быть введены числовые значения.");
	} else {
	var resultDiv = document.getElementById('result');
	resultDiv.innerHTML = "";
	resultDiv.append("x1 + x2 = " + (x1 + x2));
	}
}
*/

/*
Но в задании поставлена задача сделать проверку на пустой ввод.
Ввел еще две отдельные проверки на пустую строку и пробелы.
*/

function buttonClick() {
	var x1 = document.getElementById('x1').value;
	var x2 = document.getElementById('x2').value;
	var parsedX1 = parseInt(x1, 10);
	var parsedX2 = parseInt(x2, 10);
	
	if (x1 == "" || x2 == "") { // или (x1.length == 0 || x1.length == 0)
		alert("Поля x1 и x2 должны быть заполнены");
	} else if (x1.trim() == "" || x2.trim() == "") {
		alert("Поля x1 и x2 не должны быть заполнены пробелами");
	} else if (Number.isNaN(parsedX1) || Number.isNaN(parsedX2)){
		alert("В поля x1 и x2 должны быть введены числовые значения.");
	} else if (parsedX1 > parsedX2) {
			alert("Значение x1 должно быть меньше значения x2");
	} else {
		
		var resultDiv = document.getElementById('result');
		resultDiv.innerHTML = "";

		if (document.getElementById("sum").checked) {
			var sum = 0;
			for (var i = parsedX1; i <= parsedX2; i++) {
				sum += i;
			}
			resultDiv.append("x1 + x2 = " + sum);

		} else if (document.getElementById("mul").checked) {
			var mul = 1;
			for (var i = parsedX1; i <= parsedX2; i++) {
				mul *= i;
			}
			resultDiv.append("x1 * x2 = " + mul);
		} else if (document.getElementById("simple").checked) {
			var arr = [];
			for (var i = parsedX1; i <= parsedX2; i++) {
				var counter = 0;
				for (var j = 2; j <= i; j++) {
					if (i % j > 0) {
						continue;
					} else {
						counter += 1;
					}
				}
				if (counter == 1) arr.push(i);
			}
			resultDiv.append(arr);

		} else {
			alert("Выберите алгоритм");
		}
	}
}

function clearValues() {
	document.getElementById('x1').value = "";
	document.getElementById('x2').value = "";
}