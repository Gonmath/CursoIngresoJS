/*
Mansilla Matias DIV I
TPs/02-FerreteConstruccion */


/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () {
	var largo;
	var ancho;
	var perimetro;
	var alambre;
	var mensaje;

	largo = txtIdLargo.value;
	ancho = txtIdAncho.value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetro = 2*(largo+ancho);
	alambre = perimetro*3;

	mensaje = "Los metros de alambre necesarios son: ";
	alert(mensaje+alambre);

}

function Circulo () {
	var radio;
	var perimetro;
	var alambre
	var mensaje;
	var pi = 3.1416;

	radio = txtIdRadio.value;
	radio = parseInt(radio);

	perimetro = 2*pi*radio;
	alambre = perimetro*3;

	mensaje = "Los metros de alambre necesarios son: ";
	alert(mensaje+alambre);
	
}

/*Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas del terreno rectangular.*/

function Materiales () {
	var largo, ancho;
	var bolsaCem, bolsaCal;
	var area;
	var mensaje;

	largo = txtIdLargo.value;
	ancho = txtIdAncho.value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	area = largo*ancho;
	bolsaCal= area*3+" bolsas de Cal "; 
	bolsaCem= area*2+" bolsas de Cemento ";
	
	mensaje = "Usted necesita comprar: ";
	alert(mensaje+bolsaCal+"y "+bolsaCem);
	
}