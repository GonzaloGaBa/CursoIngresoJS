/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"
Gonzalo Barrientos-Div X*/ 
function sumar()
{	
	let numeroUno
	let numeroDos
	let resultado

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
    
	resultado = numeroUno + numeroDos;

	alert(`La suma de los dos numero es ${resultado}.`);
	
}

function restar()
{
	let numeroUno
	let numeroDos

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno - numeroDos;

	alert(`La resta de los dos numero es ${resultado}.`);
}

function multiplicar()
{ 
	let numeroUno
	let numeroDos

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno * numeroDos;

	alert(`La Mutiplicacion de los dos numero es ${resultado}.`);
}

function dividir()
{
	let numeroUno
	let numeroDos

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno / numeroDos;

	alert(`La Division de los dos numero es ${resultado}.`);
}

