function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;
	var iteracciones=5;

	while(contador<iteracciones)
	{
		contador++;
		numero=prompt("");
		numero=parseint(numero);
		acumulaor=acumulador+numero;
	}
	
	promedio=acumulador/contador;

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador;

}//FIN DE LA FUNCIÓN