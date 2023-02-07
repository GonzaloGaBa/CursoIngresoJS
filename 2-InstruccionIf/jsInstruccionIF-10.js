//Gonzalo Barrientos - Div X

function mostrar() {
  //Genero el número RANDOM entre 1 y 10
  let numeroAleatorio;

  numeroAleatorio = Math.floor(Math.random() * 11);

  if(numeroAleatorio >= 9) 
  {
    alert(`Su nota es un ${numeroAleatorio} \n "EXCELENTE"`);
  } 
  else 
  {
    if(numeroAleatorio >= 4) 
	{
      alert(`Su nota es un ${numeroAleatorio} \n "APROBO"`);
    } 
	else 
	{
      alert(`Su nota es un ${numeroAleatorio} \n"Vamos, la proxima se puede"`);
    }
  }
} //FIN DE LA FUNCIÓN
