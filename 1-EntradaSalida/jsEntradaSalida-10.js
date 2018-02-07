/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{   
	//defino a variable
	var importe
	var resultado
    
    //busco los ID de importe y resultado
	importe=document.getElementById('importe').value;
	resultado=document.getElementById('resultado').value;
    
    //no pongo parseInt si no habra concatenacion mediante el signo +
/*	importe=parseInt(importe);
	resultado=parseInt(resiultado);
*/
	
    //para que salga el resultado basado en el importe que ingreses menos el 25% de descuento
	resultado=importe*(1-0.25);

	alert(resultado);

}
