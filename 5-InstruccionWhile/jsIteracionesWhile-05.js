/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo
	sexo = prompt("Ingrse sexo: \n f: Femenino \n m: Masculino.");
	while (sexo != 'f' && sexo != 'm') 
	{
		alert("Respuesta Incorrecta")
		sexo = prompt("Ingrse sexo: \n f: Femenino \n m: Masculino.");
	}
		if (sexo == 'f') 
		{
			document.getElementById("txtIdSexo").value = "Femenino";
		} 
		else 
		{
			document.getElementById("txtIdSexo").value = "Masculino";
		}
}//FIN DE LA FUNCIÓN