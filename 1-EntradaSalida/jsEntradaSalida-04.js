/*
Mansilla Matias DIV I
E/S 04  */

/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar(){
	
	var nombreIngresado;

	nombreIngresado = prompt('Ingrese el nombre de su mascota');

	document.getElementById('txtIdNombre').value = nombreIngresado;
	/* utilizo el metodo getElementById en forma inversa al ejerc 03
	 pido el valor por prompt y lo vuelco en la pagina, por eso el id va con comillas, el txtIdNombre no lo uso como variable
	 estoy indicando en cual id quiero colocar el input del usuario */

	// en el 03 se pedia un input al usuario y se almacenaba en una var

}

