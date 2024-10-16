// Definicion de una Funcion:
/*
function hello(){
    console.log("hola Clase");
    console.log("5IV7");
};

//Llamada a la funcion

hello();
hello();
hello();
hello();
hello();
*/

//  Retorno de una funcion
/*
function hello(){
    return 'Hola clase';
};

const resultado = hello()
console.log(resultado)
*/

// Funcion que retorna una funcion
/*
function hello(){
    return function (){
        return 'Funcion 2';
    }
};

console.log(hello()())
*/
// Funcion con parametros
/*
function add(x){
    console.log(x);
}

add(5);
*/

// Multiárametros
/*
function add(x, y){

    console.log(x + y);
}

add(5, undefined);
*/
// Control de error en multiparametros
/*
function add(x, y=undefined){
    if(y === undefined){
        y=0
    }
    console.log(x + y);
}

add(5, undefined);
*/

// Parametro de tipo cadena
/*
function add(name){

    console.log('Hola ' + name);
}

add('Clase js');
*/

// OBJETOS

const user = {
    nombre:'jomita', 
    apellidoP: 'Sil', 
    apellidoM: 'Cruz',
    edad: 17,
    direccion:{
        calle: 'Av. Industria',
        numero: 130,
        colonia: 'Moctezuma',
        delegacion: 'V.C.'
    },
    amigos:['Leoymarx', 'tfcath'],
    activo:true
}

// Consola nombre apellidoP apellidoM
console.log(user.nombre, user.apellidoP, user.apellidoM);

// alert activo;
alert(user.activo);

// consola edad
console.log(user.edad);

// alert calle no. colonia delegacion
alert(user.direccion.calle, user.direccion.colonia, user.direccion.numero);
// consola amigos
console.log(user.amigos)





