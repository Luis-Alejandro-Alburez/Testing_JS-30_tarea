/*             Debugging Review    

Acabas de aprender tÃ©cnicas para ayudarte a superar cualquier
situaciÃ³n de depuraciÃ³n.
Resumamos lo aprendido en un proceso de depuraciÃ³n:

1. Â¿Tu cÃ³digo genera errores? Si es asÃ­, consulta el 
   seguimiento de errores para conocer el tipo, la
   descripciÃ³n y la ubicaciÃ³n del error.  Accede a la
   ubicaciÃ³n del error e intenta solucionarlo.
   
2.Â¿Tu cÃ³digo estÃ¡ roto pero no genera errores?
  Revisalo usando declaraciones console.log().
  Cuando se produzcan resultados inesperados, aÃ­sle el 
  error e intente solucionarlo.
  
3. Â¿Encontraste el error siguiendo los pasos 1 y 2, pero
   no puedes solucionarlo?
   Consulta la documentaciÃ³n para asegurarte de usar 
   correctamente todas las funciones de JavaScript.
   Si sigues sin poder solucionarlo, busca el problema
   en Google y consulta Stack Overflow para obtener ayuda.
   TambiÃ©n puedes utilizar inteligencia artificial, pero
   ten cuidado con el cÃ³digo que esta genere
   
Puede llevar algo de tiempo y prÃ¡ctica, pero  asÃ­ es como
todos los desarrolladoresresuelven sus problemas, asÃ­
que no te rindas y serÃ¡s un experto en poco tiempo.*/

/*Ejercicio:
En el editor de cÃ³digo, le proporcionamos una 
implementaciÃ³n fallida de una funciÃ³n llamada 
isStringPerfectLength(). 
Esta funciÃ³n toma una cadena ( string), con una longitud
mÃ­nima ( minLength) y una longitud mÃ¡xima ( maxLength). 
Debe devolver si el valor proporcionado string estÃ¡ 
dentro del rango de las dos longitudes. 
MÃ¡s especÃ­ficamente, si es mÃ¡s largo que el valor 
minLength y mÃ¡s corto que el valor maxLength.

Hemos proporcionado tres casos de prueba de ejemplo al 
final del archivo. 
El primero comprueba si la cadena 'Dog'estÃ¡ en el rango 
de longitud de 2 y 4. En este caso, la funciÃ³n deberÃ­a 
devolver la funciÃ³n true porque la longitud de la cadena 
es 3, que se encuentra entre esos dos valores. 
Los dos ejemplos siguientes fallan. 
El primero falla porque la cadena es demasiado larga. 
El segundo falla porque la cadena es demasiado corta.

Utilizando el proceso de depuraciÃ³n que aprendiÃ³, 
descrito anteriormente, busque y corrija todos los 
errores en este cÃ³digo.

El cÃ³digo te mostrarÃ¡ errores desde el principio, 
pero recuerda, Â¡es algo bueno! Creemos que ya tienes 
todas las habilidades para depurarlo. 
Â¡No te rindas y muÃ©stranos lo que has aprendido! 
Sabemos que puedes lograrlo.*/

//Descomenta el siguiente cÃ³digo para ver el error

function isStringPerfectLength(string, minLength, maxLength) {
  const stringLength = string.length;

  if ((stringLength > minLength) & (stringLength < maxLength)) {
    return true;
  } else {
    return false;
  }
}

// Should return true
console.log(
  "isStringPerfectLength('Dog', 2, 4) returns: " +
    isStringPerfectLength("Dog", 2, 4)
);

// Should return false
console.log(
  "isStringPerfectLength('Mouse', 2, 4) returns: " +
    isStringPerfectLength("Mouse", 2, 4)
);

// Should return false
console.log(
  "isStringPerfectLength('Cat', 4, 9) returns: " +
    isStringPerfectLength("Cat", 4, 9)
);
