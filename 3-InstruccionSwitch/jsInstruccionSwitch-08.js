//Gonzalo Barrientos Div X
function mostrar()
{
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;
	
	switch (destino)
	{
		case "Ushuaia":
		case "Bariloche":
			mensaje = "Hace Frio";
			break;
		case "Cataratas":
		case "Mar del plata":
			mensaje = "Hace Calor";
			break;
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN