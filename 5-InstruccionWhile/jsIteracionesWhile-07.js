/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numero;
	contador = 0;
	acumulador = 0;
	respuesta = 's';
	
	while (respuesta == "s") 
	{
		numero= parseInt(prompt("Ingrese un numero"));
		acumulador += numero;
		contador++;
		respuesta = prompt("¿Desea continuar? \n 's':Continuar. \n 'f':Terminar.");
	}
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador;

}//FIN DE LA FUNCIÓN