/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno
	let precioDos
	let precioTres
    let resultado

	precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);


	resultado = precioUno + precioDos + precioTres;

	alert(`La suma de los 3 precios es ${resultado}.`);
}
function Promedio () 
{
    let precioUno
	let precioDos
	let precioTres
    let promedio

	precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    
	promedio = (precioUno + precioDos + precioTres) / 3;

	alert(`El promedio de los 3 numeros es ${promedio}.`);
}
function PrecioFinal () 
{
    let precioUno;
	let precioDos;
	let precioTres;
    let precioFinal;
    let suma;
    let ivaDelTotal
    const IVA = 21;


	precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);;
    
    suma = precioUno + precioDos + precioTres;
    ivaDelTotal = suma * IVA / 100;
	precioFinal = suma + ivaDelTotal;


	alert(`El precio final es ${precioFinal}.`);
}