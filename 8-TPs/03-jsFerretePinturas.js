/*
Mansilla Matias DIV I
TPs/03-FerretePinturas */


/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

function FahrenheitCentigrados () { //A- de Fahrenheit a Centígrados
	//Nota: Para convertir de ºF a ºC use la fórmula: ºC = (ºF-32) ÷ 1.8
	var input = txtIdTemperatura.value;
	input = parseInt(input);

	var formula = (input - 32)/1.8;
	var mensaje = 'El resultado de la conversion es: '+formula+' Centígrados';

	alert(mensaje);
	//control de formula: 32 fahr = 0 Celsius
}


function CentigradosFahrenheit () { //B- de Centígrados a Fahrenheit
	//Nota: Para convertir de ºC a ºF use la fórmula: ºF = ºC x 1.8 + 32
	var input = txtIdTemperatura.value;
	input = parseInt(input);

	var formula = (input * 1.8)+32;
	var mensaje = 'El resultado de la conversion es: '+formula+' Fahrenheit';

	alert(mensaje);
	//control de formula: 0 Celsius = 32 fahr
}

//txtIdTemperatura