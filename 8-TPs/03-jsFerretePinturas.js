/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
Gonzlao Barrientos- Div X*/
function FahrenheitCentigrados () 
{
	let centígrados;
    let fahrenheit;

    fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    centígrados = (fahrenheit - 32) / 1.8;

    alert(`${fahrenheit.toFixed(2)} grados celsius son ${centígrados.toFixed(2)} grados Fahrenheit`);
}

function CentigradosFahrenheit () 
{
	let centígrados;
    let fahrenheit;

    centígrados = parseFloat(document.getElementById("txtIdTemperatura").value);

    fahrenheit = (centígrados * 1.8) + 32;

    alert(`${centígrados.toFixed(2)} grados celsius son ${fahrenheit.toFixed(2)} grados Fahrenheit`);
}
