/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var conversor;
	
	temperatura=document.getElementById('Temperatura').value;

	temperatura=parseInt(temperatura);
	
	conversor=(temperatura-32)/1.8;

	alert(temperatura+"º Fahrenheit son "+conversor+"º Centígrados"); 
	
}

function CentigradosFahrenheit () 

{
	
	var temperatura;
	var conversor;

	temperatura=document.getElementById('Temperatura').value;

	temperatura=parseInt(temperatura);

	conversor=(temperatura*1.8)+32;

	alert(temperatura+"º Centigrados son "+conversor+"º Fahrenheit.");

}
	