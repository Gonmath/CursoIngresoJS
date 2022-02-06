/*
Mansilla Matias DIV I
E/S 10  */

/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

function mostrarAumento(){

	var input, resultado;

	input = txtIdImporte.value;
	input = parseInt(input);
	resultado = input *0.75;
	txtIdResultado.value = resultado;
	// use la forma resumida para practicar, sin usar documents.getElem....
}

//txtIdImporte
//txtIdResultado