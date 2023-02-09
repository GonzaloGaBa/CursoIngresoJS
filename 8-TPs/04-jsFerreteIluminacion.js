/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
  let cantLamparas;
  let precioFinal;
  let marca;
  let iibb;
  let porcentaje;
  const VALORXUNIDAD = 35;
  
  porcentaje = 0;

  cantLamparas = parseInt(document.getElementById("txtIdCantidad").value);
  precioFinal = document.getElementById("txtIdprecioDescuento").value;
  marca = document.getElementById("Marca").value;

  //Punto A
  if(cantLamparas >= 6) 
  {
    porcentaje = 0.5;
  }
  else if(cantLamparas == 5) //Punto B
  {
        if(marca == "ArgentinaLuz")
        {
          porcentaje = 0.4;
        }
        else
        {
          porcentaje = 0.3;
        }
  }  
  else if(cantLamparas == 4) //Punto C
  {
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
        {
          porcentaje = 0.25;
        }
        else
        {
          porcentaje = 0.2;
        }
  }
  else if(cantLamparas == 3)//Punto D
  {
        if(marca == "ArgentinaLuz") 
        {
          porcentaje = 0.15;
        }
        else if(marca == "FelipeLamparas") 
        {
          porcentaje = 0.1;
        }
        else
        {
          porcentaje = 0.5;
        } 
  }
  else
  {
    precioFinal = cantLamparas * VALORXUNIDAD;
  }  
  
  if(porcentaje > 0)
  {
    precioFinal = cantLamparas * VALORXUNIDAD * porcentaje;
  }
  
  //Punto E
  if(precioFinal >= 120)
  {
    iibb = cantLamparas * VALORXUNIDAD / 0.1;
    alert(`Usted pago ${iibb} de IIBB.`)
  }
  document.getElementById("txtIdprecioDescuento").value = precioFinal;
}
