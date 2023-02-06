//Gonzalo Barrientos- Div-X
function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if ( edad >= 18 )
	{
		alert("El usuario es mayor de edad");
	} 
	else 
	{
		if ( edad <= 13 )
		{
			alert("El usuario es niño");
		} else 
		{
			alert("El usuario es un adolescente");
		}
	}
	

}//FIN DE LA FUNCIÓN