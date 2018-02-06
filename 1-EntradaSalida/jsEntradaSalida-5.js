/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
    /*var nombre
    nombre=prompt("Franco");	
    alert("su nombre es: "+Franco);

    var edad
    edad=prompt("22");
    alert("su edad es: "+22);*/ 
    /*var nombre;
    nombre=prompt("ingrese su nombre","franco");
    document.getElementById('franco');

    var edad;
    edad=prompt("ingrese su nombre","franco");
    document.getElementById('22');*/

    var nombre;
    var edad;
    nombre=document.getElementById('elNombre').value;
    edad=document.getElementById('laEdad').value;

    alert("Usted se llama "+nombre +" y tiene "+edad +" años");
}

