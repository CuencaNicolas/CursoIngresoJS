/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero uno
    var numero dos
    var suma
    
    var numero uno=document.getElementById('numeroUno').value;
    
    var numero dos=document.getElementById('numeroDos').value;
    
    var suma=parseInt(numero uno) + parseInt(numero dos);
    
    alert("la suma es:"+numeroUno+numeroDos);

    //codigo con error, la idea es que las dos primeras variables se puedan convertir en enteros y sumarlos entre ellos.
}

