/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
Gonzalo Barrientos-Div X*/
function mostrar()
{
	
	let  nombreIngresado;

	 
	nombreIngresado = prompt("Ingrese su nombre de Usuario");

	document.getElementById("txtIdNombre").value = nombreIngresado;
}
