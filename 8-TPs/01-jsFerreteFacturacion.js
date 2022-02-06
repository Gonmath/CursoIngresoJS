/*
Mansilla Matias DIV I
TPs/01-FerreteFacturacion */


/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () {
	// declaro y obtengo inputs del usuario simultaneamente, para ahorrar lineas y recursos en memoria
	var precioUno = txtIdPrecioUno.value;
	var precioDos = txtIdPrecioDos.value;
	var precioTres = txtIdPrecioTres.value;
	var mensaje;
	var suma;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	suma = precioUno+precioDos+precioTres;
	mensaje = 'El importe neto de los productos es: $';

	alert(mensaje+suma);

}

function Promedio () { 

	var precioUno = txtIdPrecioUno.value;
	var precioDos = txtIdPrecioDos.value;
	var precioTres = txtIdPrecioTres.value;
	var mensaje;
	var promedio;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	promedio = (precioUno+precioDos+precioTres)/3;
	mensaje = 'El precio promedio de los productos es: $';

	alert(mensaje+promedio);
	
}

function PrecioFinal () {

	var precioUno = txtIdPrecioUno.value;
	var precioDos = txtIdPrecioDos.value;
	var precioTres = txtIdPrecioTres.value;
	var mensaje;
	var total;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	total = (precioUno+precioDos+precioTres)*1.21;
	mensaje = 'El importe final (IVA incluído) de los productos es: $';

	alert(mensaje+total);
	
} 