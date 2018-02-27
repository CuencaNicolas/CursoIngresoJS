/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    /*var numero uno
    var numero dos
    var suma
    
    var numero uno=document.getElementById('numeroUno').value;
    
    var numero dos=document.getElementById('numeroDos').value;
    
    var suma=parseInt(numero uno) + parseInt(numero dos);
    
    alert("la suma es:"+numeroUno+numeroDos);*/

    //codigo con error, la idea es que las dos primeras variables se puedan convertir en enteros y sumarlos entre ellos.
   /*var resultado;
   var numeroUno;
   var numeroDos;	

   numeroUno="2";
   numeroDos="3";
   resultado=numeroUno+numeroDos;
   alert(resultado);
*/ 
	
	//defino la variable
	var numeroUno;
	var numeroDos;
	var resultado;

	//encuentro las ID de las casillas donde se tiene que ingresar el numero (numeroUno y numeroDos)
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

    //transformo de letras a numeros enteros y evito concatenar a la hora de poer el signo mas
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	//pongo que la variable resultado es el igual a las dos casillas vacias que debemos rellenar al sumar 
	resultado=numeroUno+numeroDos;
	
	//demostramos el resultado de los numeros que queramos sumar
	alert("La suma es "+resultado);




}

