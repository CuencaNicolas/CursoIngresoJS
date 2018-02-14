function Mostrar()
{
//tomo la edad  

	var edad;
	var estadoCivil;
	
	//en la consola de la pagina apretando F12 aparecera el mensaje que quieras poner
	console.log("hola");

	edad=document.getElementById('edad').value;	
	estadoCivil=document.getElementById('estadoCivil').value;

	alert(estadoCivil);

	if(estadoCivil !="Soltero" && edad <18)
		{
			alert("Es muy pequeño para NO ser soltero");
		}
}//FIN DE LA FUNCIÓN