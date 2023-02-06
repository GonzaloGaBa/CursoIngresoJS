/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 
Gonzalo Barrientos- Div X	*/
function mostrar()
{	
	//Debemos lograr tomar nombre y edad por ID.value mostrarlos concatenados

	let nombreIngresado;
	let edadIngresada;


	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;

	alert("Usted se llama " + nombreIngresado + " Y su edad es " + edadIngresada + " años.");
}

