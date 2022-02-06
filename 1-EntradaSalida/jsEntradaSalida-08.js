/*
Mansilla Matias DIV I
E/S 08  */

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

function SacarResto(){
	var input1, input2, resultado;

	input1 = document.getElementById('txtIdNumeroDividendo').value;
	input2 = document.getElementById('txtIdNumeroDivisor').value;

	input1 = parseInt(input1);
	input2 = parseInt(input2);
	resultado = input1%input2;
	alert("El resto es: "+resultado);
}

// txtIdNumeroDividendo
// txtIdNumeroDivisor