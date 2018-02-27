function Mostrar()
{
//tomo la edad  

	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	
	estadoCivil=document.getElementById('estadoCivil').value;

	if(estadoCivil="Soltero" && edad >=18)
	{
		alert("Es Soltero y no es menor");
	}
}//FIN DE LA FUNCIÓN