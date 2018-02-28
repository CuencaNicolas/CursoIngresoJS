//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
//solamente se usa if
//se ingresan dos numeros si son iguales y que se contatenan si es mayor es el primero se multiplica de lo contrario se resta
//si el resultado de la multiplicacion es par agregar " es par"
function Mostrar()
{
	
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Ingrese primer número");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("Ingrese segundo número");
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
    {
		resultado=numeroUno+""+numeroDos;
	}
	else
	{
		if(numeroUno<numeroDos)
		{
			resultado=numeroUno*numeroDos;
	    }
	    if(numeroUno>numeroDos)
	    {
		    resultado=numeroUno-numeroDos;
	    }
	    if(resultado%2==0 && resultado!=0)
	    {
	    	resultado=resultado+" es par";
	    }
    }
	    alert(respuesta);
	


}

 
