function Mostrar()
{
	var contador=0

	for(contador;contador-10;contador++)
	{
		document.write("<br>"+contador);
		if(contador==10)
		{
			break;
		}
		if(contador==5)
		{
			continue;
		}

		document.write("despues de continue");
	}

	

}
