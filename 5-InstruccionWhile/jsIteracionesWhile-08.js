/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let numerPositivo;
	let numeroNegativo;
	let respuesta;

	numerPositivo = 0;
	numeroNegativo = 1;
	respuesta = "si";

	while (respuesta == "si") 
	{
		numero = parseInt(prompt("Ingrese un numero: \n Positivo para sumar. \n Negativo para multiplicar."))
		
		if (numero > 0) 
		{
			numerPositivo += numero;	
		} else {
			numeroNegativo *= numero;
		}
		respuesta = prompt("¿Desea continuar? \n 'si' o 'no'.");
	}
	document.getElementById("txtIdSuma").value = numerPositivo;
	document.getElementById("txtIdProducto").value = numeroNegativo;

}//FIN DE LA FUNCIÓN