/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let acumuladorPositivos=0;
	let acumuladorNegativos=0;
	let cantidadCeros=0;
	let cantidadPares=0;
	respuesta="si";
	
	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		if (numeroIngresado > 0) {
			sumaPositivos += numeroIngresado;
			acumuladorPositivos++;
		} 
		else if (numeroIngresado < 0)
		{
			sumaNegativos += numeroIngresado;
			acumuladorNegativos++
		}
		else if (numeroIngresado % 2 === 0)
		{
			cantidadPares++
		}
		else 
		{
			cantidadCeros++
		}

		respuesta=prompt("¿Desea continuar? \n 'si' /'no'");
	}//fin del while

	document.write("1) La suma de positivos es : "+sumaPositivos);
	document.write("<br>");
	document.write("2) La suma de negativos es : "+sumaNegativos);
	document.write("<br>");
	document.write("3) Hay " + acumuladorPositivos + " de numeros positivos.");
	document.write("<br>");
	document.write("4) Hay " + acumuladorNegativos + " de numeros negativos.");
	document.write("<br>");
	document.write("5) Hay un total de " + cantidadCeros + " ceros.");
	document.write("<br>");
	document.write("6) Hay un total de " + cantidadPares + " numeros pares.");
}//FIN DE LA FUNCIÓN