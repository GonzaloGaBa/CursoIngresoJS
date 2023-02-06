/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
Gonzalo Barrientos-Div X*/
function mostrarAumento()
{	
	let sueldo;
	let aumentoSueldo;
	let resultado;
	const AUMENTO = 0.1

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	aumentoSueldo = sueldo * AUMENTO;
	resultado = sueldo + aumentoSueldo;

	document.getElementById("txtIdResultado").value = resultado.toFixed(2);
}
