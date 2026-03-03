# Clase 1: Tu primer contacto con JavaScript y Variables

## Contenido Teórico
¿Qué es JavaScript (JS)?
Es un lenguaje de programación interpretado que se ejecuta principalmente en los navegadores web para hacer que las páginas sean interactivas.

Salida de datos:
Para que podamos ver lo que hace nuestro código, utilizamos la "consola" del navegador (o entorno). La instrucción fundamental para imprimir mensajes o valores es:

    console.log(valor_a_imprimir);

## Variables:

Una variable es como una "caja" donde guardamos datos para usarlos más tarde. En JavaScript moderno, utilizamos dos palabras reservadas principales para crear (declarar) estas cajas:

    let: Se usa para declarar una variable cuyo valor puede cambiar (mutar) a lo largo del tiempo.

    const: Se usa para declarar una variable cuyo valor es constante y no cambiará una vez asignado.
    (Nota: Existe una tercera llamada var, pero es una práctica antigua que evitaremos por ahora para enseñarte los mejores estándares actuales).

##  Ejemplos Prácticos

Presta atención a cómo declaramos las variables y cómo mostramos sus valores:

    // Usamos 'let' porque la edad puede cambiar el próximo año
    let edad = 25; 

    // Usamos 'const' porque el país de nacimiento generalmente no cambia
    const paisDeNacimiento = "Chile"; 

    // Podemos imprimir texto directo
    console.log("Iniciando el programa...");

    // Podemos imprimir el valor de las variables
    console.log(edad);
    console.log(paisDeNacimiento);

    // Podemos reasignar el valor de una variable 'let' (sin escribir 'let' de nuevo)
    edad = 26;
    console.log("Nueva edad:");
    console.log(edad);

Si intentáramos hacer paisDeNacimiento = "Argentina";, JavaScript nos daría un error, porque una constante (const) no se puede modificar.

## Ejercicio

Es tu turno de escribir código. Tu misión es la siguiente:

    Declara una variable que almacene tu nombre (piensa bien si debes usar let o const).
    Declara una variable que almacene tu año de nacimiento.
    Declara una variable que almacene el año actual (2026).
    Utiliza console.log() para imprimir las tres variables.

