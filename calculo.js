var numero;
var resultado;
numero= parseInt(prompt("Ingrese un numero menor a 1000"));

if(numero==0 || numero <0 || numero.toString().length >3){
    resultado= "Numero no valido";
} else if(numero.toString().length ==1){
    resultado=Math.pow(numero, 2);
} else if(numero.toString().length ==2){
    resultado=numero * 2;
} else if(numero.toString().length ==3){
    resultado= numero - 100;
} 
alert(resultado);

//Daniela Londoño
//Parcial1- Programacion 1
