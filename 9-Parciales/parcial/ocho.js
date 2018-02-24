
/* 
   alumnos     nota   edad
	
	Maria       10     20
	Jose		0	   30
	Gabriela	2	   40
	Martin      5	   17
	Edi			6	   30
	Axel		9	   40
	Flor		0	   25
	Lucas		4	   33
	Lidia       7	   37	

*/
/*Lo que hay que saber:
	1.cantidad de alumnos
	2.nota de alumno
	3.promedio total de la nota
	4.cantidad de varones(5)
	5.cantidad de mujeres(4)
	6.cantidad de varones desaprobados
	7.nombre de la mejor nota
	8.promedio de la nota de las mujeres
	9.tipo de sexo del menor de edad
	10.promedio de la edades de los aprobados 
*/

function Mostrar()

{
	var nombreDeAlumno;
	var contador=0;
	var seguir="";
	var cantidadDeAlumnos;
	var acumulador;
	var nota;
	var promedio;
	var continuar;
	var cantidadDeMujeres;
	var cantidadDeVarones;
	var masculino;
	var femenino;
	var edad;
	var sexo;
	
	while(seguir !="no")

	{
		nombreDeAlumno= prompt("Ingrese nombre de alumno");
		contador= contador +1;
		seguir=prompt("No para salir");
		nota=prompt("ingrese nota");
		nota=parseInt(nota);
		acumulador=acumulador+nota;
	}
		document.write("Son" +contador+"de alumnos");

	
	while(nota <0 || nota>10)
	{
		nota=prompt("ingrese nota");
		nota=parseInt(nota);
	}

				
	promedio=acumulador/cantidadDeAlumnos

	while(!(sexo "M" && sexo "F"))
	{
		sexo=prompt("Ingrese Sexo Femenino o Masculino")
	}
	while()

		
		

	}
	
		




}
