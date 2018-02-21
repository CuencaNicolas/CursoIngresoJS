function Mostrar()
{

//ar repetciones = prompt("ingrese el número de repeticiones");
	var numeroRandom;
	var interaciones=100;
	var	contadorDeCero=0;
	var contadorDeUno=0;
	var contadorDeDos=0;
	var contadorDeTres=0;
	var contadorDeCuatro=0;
	var contadorDeCinco=0;
	var contadorDeSeis=0;
	var contadorDeSiete=0;
	var contadorDeOcho=0;
	var contadorDeNueve=0;
	var contadorDeDiez=0;

	
	for(contador=0;contador<interaciones;contador++)
	{
		//document.write("<br>"+contador);
		numeroRandom=Math.floor(Math.random()*10);
		document.write(numeroRandom+);
        switch(numeroRandom)
        {
        	case 0:
        		contador0++;
        		break;
        		
        	case 1:
        		contador1++;
        		break;
        
			case 2:
        		contador2++;
        		break;
        
			case 3:
        		contador3++;
        		break;
            var porcen=(ContadorDeTres/interaciones)*100;
            	if(porcen>7)
            	{}
			case 4:
        		contador4++;
        		break;
        
			case 5:
        		contador5++;
        		break;
        
			case 6:
        		contador6++;
        		break;
        
			case 7:
        		contador7++;
        		break;
       
			case 8:
        		contador8++;
        		break;
        
			case 9:
        		contador9++;
        		break;
       
			case 10:
        		contador10++;
        		break;
        }
        }
        document.write("cero:"+contador0);
	}


}//FIN DE LA FUNCIÓN