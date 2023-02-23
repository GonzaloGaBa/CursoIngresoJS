/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)
Gonzalo Barrientos Div X*/
function mostrar()
{
	let pasword;
	pasword = prompt("ingrese el número clave.");
	while (pasword != "utn750") {
		alert("Pasword incorretco \n Ayuda: Es 'utn750'");
		pasword = prompt("ingrese el número clave.");
	}
}//FIN DE LA FUNCIÓN
