/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numero;
	let respuesta;
	let numeroMaximo;
	let numeroMinimo;
	//iniciar variables
	numero = parseInt(prompt("Ingrese un numero"));
	respuesta = "si";
	numeroMaximo = numero;
	numeroMinimo = numero;
	while (respuesta == "si") 
	{
		numero = parseInt(prompt("Ingrese un numero"));
		if (numero > numeroMaximo) 
		{
			numeroMaximo = numero;	
		} else if(numero < numeroMinimo)
		{
			numeroMinimo = numero;
		}
		respuesta = prompt("¿Desea continuar? \n 'si' o 'no'.");	
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN