function Mostrar()
{
	/*var contador=0;	
	var interaciones=10;
	
	for(;;)
	{
		document.write("<br>"+contador);

		contador++;
		
		if(contador==10)
			break;
	}
		document.write("<br>"+contador);contador++;
	*/



		//otra manera de hacerlo:

		/*var contador
		  var interaciones

		  for(contador=0;contador<10;contador++)
		  {
			document.write("<br>"+contador);
		  }
			document.write("<br>"+contador);
			*/

		//otra manera de hacerlo:
		
	var contador=0;
	var interaciones=10;
	var contadorDePar=0;
	var contadorDeImpar=0;
	var contadorDeCero=0;
	var	contadorPositivo=0;
	var contadorNegativo=0;


	for(;;)
	{
		//document.write("<br>"+contador);
		if(contador==0)
		{
			contadorDeCero++;
		}
		else
		{
		if(contador%2==0)
		{
			contadorDePar++;
		}
		else
		{
			contadorDeImpar++;
		}
		if(contador<0)
		{
			contadorNegativo++;
		}
		else
		{
		if(contador>0)
		{
			contadorPositivo++;
		}
		contador++
		if(contador==interaciones)
			break;
		}
	}

	}	
		//document.write("<br>"+contador);
		document.write("<br> par:"+contador);
		document.write("<br> impar:"+contador);
		document.write("<br> positivo:"+contador);
		document.write("<br> negativo:"+contador);
		document.write("<br> ceros:"+contador);
		

				


}

