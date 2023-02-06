//Gonzalo Barrientos- Div X

function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if ( edad <= 13 || edad >= 18 )
	{
		alert("El usuario no es adolcente");
	}

}//FIN DE LA FUNCIÓN