/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
  //defino la variable
  var sueldo;
  var resultado;
  
  //encuentro el ID del sueldo y resultado
  sueldo=document.getElementById('sueldo').value;
  resultado=document.getElementById('resultado').value;
  
  //evito que al poner el signo + no se me concatene y funcione para sumar
  sueldo=parseInt(sueldo);
  resultado=parseInt(resultado);
  
  //para que en el resultado me de basado en el importe que le de + el aumento del diez porciento
   
  resultado=sueldo*(1+0.10);

  alert(resultado);
	
}
