/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
Gonzalo Barrientos-Div X*/
function mostrarAumento()
{
	let sueldo;
	let descuento;
	let resultado;
	const AUMENTO = 0.25;

	sueldo = parseInt(document.getElementById("txtIdImporte").value);

	descuento = sueldo * AUMENTO;
	resultado = sueldo - descuento;

	document.getElementById("txtIdResultado").value = resultado.toFixed(2);
}
