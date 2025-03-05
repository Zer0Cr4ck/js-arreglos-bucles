cc// 
// // Reto 1: Suma de Elementos
function sumarElementos(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar la suma de todos los elementos del arreglo
    let suma=0;
    for(let i=0 ; i<arreglo.length ; i++){
        suma += arreglo[i]  ;
    }
    return suma ;
    ;



}

// Reto 2: Número Mayor
function encontrarMayor(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar el número más grande del arreglo

   // return Math.max(...arreglo);

   let mayor=arreglo[0];  //Escojo el primer numero para compararlos con los demas en el bucle

   for(i=1; i<arreglo.length; i++){

        if(mayor<arreglo[i]){
            mayor= arreglo[i];
        }

   }

   return mayor;



}

// Reto 3: Filtrar Pares
function filtrarPares(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo solo con los números pares



        // for(i=0; i<arreglo.length;i++){

        //     if(arreglo[i] %2 != 0){
        //         arreglo.splice(i,1);
        //     }
        // }


        // return arreglo;

    // return arreglo.filter(num => num %2 === 0);


    let pares=[];

    for(let i=0; i<arreglo.length;i++){

        if(arreglo[i] %2 == 0){
            pares.push(arreglo[i]);
        }
    }

    return pares;



}

// Reto 4: Contar Vocales
function contarVocales(texto) {
    // Los estudiantes implementarán esta función
    // Debe retornar el número de vocales en el texto

        let count=0;
        for(let i=0 ; i< texto.length ;i++){

            if(texto[i] === "a" || texto[i] === "e" || texto[i]==="i" ||texto[i]==="o"||texto[i]==="u"){
                count += 1;
            }
        }

        return count;





}

// Reto 5: Invertir Arreglo
function invertirArreglo(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo con los elementos en orden inverso


    let newArray =[];

    for(let i = arreglo.length -1; i>=0 ;i--){

    newArray.push(arreglo[i]);
    }

    return newArray;


}

// Reto 6: Promedio de Notas
function calcularPromedio(notas) {
    // Los estudiantes implementarán esta función
    // Debe retornar el promedio de las notas
    let suma=0;
    for(let i=0; i<notas.length;i++){
        suma = suma + notas[i];
    }

    return suma/(notas.length);
}

// Reto 7: Contador de Letras
function contarLetra(texto, letra) {
    // Los estudiantes implementarán esta función
    // Debe retornar cuántas veces aparece la letra en el texto

        let count=0;

    for(let i=0 ; i<texto.length;i++){

        if(texto[i]=== letra){
            count += 1;
        }

    }

    return count;



}

// Reto 8: Elementos Únicos
function obtenerUnicos(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo sin elementos duplicados

        // let newArray=[];

        // for(let i=0; i<arreglo.length; i++){

        //     if(!newArray.includes(arreglo[i])){
        //         newArray.push(arreglo[i]);
        //     }


        // }


        // return newArray;

        let newArray=[];

        for(let i=0; i<arreglo.length;i++){

            if(newArray.includes(arreglo[i])){
                continue;
            }

            newArray.push(arreglo[i]);




        }


        return newArray;




}

// Reto 9: Palíndromo
function esPalindromo(texto) {

/*
    let newArray=[];
    for(let i=texto.length-1; i>=0 ;i--){

        newArray.push(texto[i]);

    }

    Convertimos nuestro array nuevo en string

    let textoInvertido = newArray.join('');


    return textoInvertido === texto;

*/


return texto === texto.split('').reverse().join('');








}