/*
Mansilla Matias DIV I
E/S 07  */

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar(){	
	var input1, input2, resultado;

	input1 = document.getElementById('txtIdNumeroUno').value;
	input2 = document.getElementById('txtIdNumeroDos').value;

	input1 = parseInt(input1);
	input2 = parseInt(input2);
	resultado = input1+input2;
	alert("El resultado de suma es: "+resultado);	
}

function restar(){
	var input1, input2, resultado;

	input1 = document.getElementById('txtIdNumeroUno').value;
	input2 = document.getElementById('txtIdNumeroDos').value;

	input1 = parseInt(input1);
	input2 = parseInt(input2);
	resultado = input1-input2;
	alert("El resultado de la resta es: "+resultado);
}

function multiplicar(){
	var input1, input2, resultado;

	input1 = document.getElementById('txtIdNumeroUno').value;
	input2 = document.getElementById('txtIdNumeroDos').value;

	input1 = parseInt(input1);
	input2 = parseInt(input2);
	resultado = input1*input2;
	alert("El resultado de la multiplicacion es: "+resultado);
}

function dividir(){
	var input1, input2, resultado;

	input1 = document.getElementById('txtIdNumeroUno').value;
	input2 = document.getElementById('txtIdNumeroDos').value;

	input1 = parseInt(input1);
	input2 = parseInt(input2);
	resultado = input1/input2;
	alert("El resultado de la division es: "+resultado);
}

//txtIdNumeroUno
//txtIdNumeroDos
