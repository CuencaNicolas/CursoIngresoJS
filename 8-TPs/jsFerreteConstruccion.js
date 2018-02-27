/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

	var largo;
	var ancho;
	var radio;
	var cantidadDeAlambre;
	var cantidadDeCemento;
	var cantidadDeCal;


function Rectangulo () 

{
	
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	cantidadDeAlambre=(largo*ancho)*3;

	alert("Se necesitara "+cantidadDeAlambre+"mtrs. de alambre.");


}

function Circulo () 

{
	//Para lograr saber la superficie del terreno circular en base a la radio el calculo es "el PI(3.14) por el radio al cuadrado. 

	radio=document.getElementById('Radio').value;

	radio=parseInt(radio);

	cantidadDeAlambre=(Math.PI*radio*radio)*3;
	//cantidadDeAlambre=(3.14*radio*radio)*3; (tambien funciona);

	alert("Se necesitara "+cantidadDeAlambre+"mtrs. de alambre.");
}

function Materiales () 

{	
	var cantidadDeCemento;
	var cantidadDeCal;
	
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	cantidadDeCemento=(largo*ancho)*2;
	cantidadDeCal=(largo*ancho)*3;
	
	alert("Se necesitan "+cantidadDeCemento+" bolsas de cemento y "+cantidadDeCal+" bolsas de cal.");

}