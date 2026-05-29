//EJERCICIO 1: Funciones Flecha

//1)
const saludar = () => {
    console.log("Hola estudiantes")
};
saludar();

//2)
const multiplicar = (numero1, numero2) => {
    let resultado1 = numero1 * numero2;
    return resultado1;
}
console.log(multiplicar(5,3));

//3)
const obtenerNombreCompleto = (nombre, apellido) =>{
    let nombreCompleto = nombre + " " + apellido;
    return nombreCompleto;
}
console.log(obtenerNombreCompleto("Bruno", "Hernández"))

//EJERCICIO 2: Callback

//1)
function mostrarResultado (parametro) {
    console.log(parametro);
}
//2)
function calcular(numeroUno, numeroDos, funcionCallBack){
    let resultado = numeroUno + numeroDos;

    funcionCallBack(resultado);
}

calcular(10,8, mostrarResultado);

//EJERCICIO 3: setTimeOut

//1)
function ejercicio3Inicio() {
    console.log("Inicio del programa");
}
//2)
function ejercicio3Medio() {
    console.log("Han pasado 5 segundos");
}

//3)
function ejercicio3Final() {
    console.log("Final del programa");
}

ejercicio3Inicio();

setTimeout(ejercicio3Medio, 5000);

setTimeout(ejercicio3Final, 7000);

//EJERCICIO 4: setInterval

const contador = () => {
    let numeroContador = 1;

    setInterval(() => {

        if (numeroContador <= 10) {
            console.log(numeroContador);
            numeroContador++;
        }

    }, 1000);
};

contador();

//EJERCICIO 5: Promesas

let PromesaEjercicio5 = new Promise((resolve, reject) => {

    let usuarioLogueado = true;

    if(usuarioLogueado){
        resolve("Usuario logueado correctamente");
    }else{
        reject("Usuario incorrecto")
    }

});


PromesaEjercicio5
    .then((correcto) => {
        console.log(correcto);
    })
    .catch((incorrecto) => {
        console.log(incorrecto);
    });

//EJERCICIO 6: Async y Await

async function mensajeAsync() {

    let promesaejercicio6 = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Proceso finalizado");
        }, 3000);

    });
    let resultado = await promesaejercicio6;
    console.log(resultado);
    }
    mensajeAsync();