/*
Mansilla Matias DIV I
E/S 09  */

/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento(){
	var input, resultado;

	input = document.getElementById('txtIdSueldo').value;
	input = parseInt(input);
	resultado = input *1.10;
	document.getElementById('txtIdResultado').value = resultado;

}

//txtIdSueldo
//txtIdResultado