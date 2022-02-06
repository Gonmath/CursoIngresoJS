/*
Mansilla Matias DIV I
E/S 06  */

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar(){

	var input1, input2;

	input1 = document.getElementById('txtIdNumeroUno').value;
	input2 = document.getElementById('txtIdNumeroDos').value;

	input1 = parseInt(input1)
	input2 = parseInt(input2)

	alert("El resultado es: "+(input1+input2));

}

//txtIdNumeroUno
//txtIdNumeroDos