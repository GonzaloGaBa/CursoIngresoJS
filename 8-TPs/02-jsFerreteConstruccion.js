/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
Gonzalo Barrientos- Div-X*/

function Rectangulo () 
{
    let ancho;
    let largo;
    let alambre;
    let perimetro;

    ancho = parseFloat(document.getElementById("txtIdAncho").value)
    largo = parseFloat(document.getElementById("txtIdLargo").value)

    alambre = (ancho + largo) * 2

    alambre = perimetro * 3

    alert(`Para los 3 hilos de alambre se van a precisar ${alambre}m.`)

}
function Circulo () 
{
    let radio;
    let alambre;
    
    radio = parseFloat(document.getElementById("txtIdRadio").value);

    alambre = Math.PI * radio * 2 * 3;

    alert(`Para los 3 hilos de alambre se van a precisar ${alambre.toFixed(2)}m.`)
}
function Materiales () 
{
	let ancho;
    let largo;
    let cal;
    let cemento;
    let area;
    
    ancho = parseFloat(document.getElementById("txtIdAncho").value)
    largo = parseFloat(document.getElementById("txtIdLargo").value)

    area = ancho * largo;
    cemento = area * 2; 
    cal = area * 3;

    alert(`En un contrapiso de ${area.toFixed(2)}m se va a necesitar ${cemento.toFixed(2)} bolsas de cemento y ${cal.toFixed(2)} bolsas de cal.`)

}