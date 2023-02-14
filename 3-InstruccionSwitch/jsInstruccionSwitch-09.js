function mostrar()
{
	let estacion;
	let destino;
	let baseEstadia;
	let porcentaje;
	let precioFinal;

	baseEstadia = 15000;
	porcentaje = 0;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Cataratas":
					porcentaje = 0.2;
					break;
				case "Cordoba":
					porcentaje = -0.1;
					break;
				case "Mar del plata":
					porcentaje = -0.2;
					break;	
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = -0.2;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 0.1;
					break;
				case "Mar del plata":
					porcentaje = 0.2;
					break;			
			}
			break;	
		case "Otoño":
		case "Primavera":	
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case  "Mar del plata":
					porcentaje = 0.1;
					break;
				case "Cordoba":
					porcentaje = 0.0;
					break;			
			}
			break;
	}
	precioFinal = baseEstadia * porcentaje + baseEstadia;
	mensaje = `El precio total es de $${precioFinal}.`;
	alert(mensaje);
}//FIN DE LA FUNCIÓN