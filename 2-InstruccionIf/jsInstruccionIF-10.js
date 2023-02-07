function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numeroAleatorio

	numeroAleatorio = Math.floor(Math.random( ) * 11);

	if (numeroAleatorio == 9 || numeroAleatorio == 10) {
		alert("EXCELENTE")
	}
	else 
	{
		if(numeroAleatorio >= 4 && numeroAleatorio <= 8 ){
			alert("APROBÓ" )	
		} else {
			alert("Vamos, la proxima se puede")
		}
	}
	

}//FIN DE LA FUNCIÓN