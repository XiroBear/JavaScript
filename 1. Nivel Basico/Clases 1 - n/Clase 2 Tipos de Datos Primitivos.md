# Clase 2: Tipos de Datos Primitivos

## Contenido Teórico

En JavaScript, las variables no solo guardan información, sino que esa información tiene un tipo específico. Conocer los tipos de datos es vital para saber qué operaciones lógicas o matemáticas podemos hacer con ellos. Hoy veremos los tres tipos de datos primitivos fundamentales:

    String (Cadena de texto): Representa caracteres y texto. Se debe envolver siempre entre comillas dobles (" "), comillas simples (' ') o comillas invertidas/backticks (` `).

    Number (Número): Representa valores numéricos, ya sean enteros o con decimales. A diferencia de los Strings, los números no llevan comillas.

    Boolean (Booleano): Representa un valor lógico que estrictamente solo puede tener dos estados: true (verdadero) o false (falso). Son la base para tomar decisiones en el código más adelante.

Adicionalmente, JavaScript nos provee un operador nativo llamado typeof. Este operador se coloca antes de un valor o variable y nos devuelve un String indicando qué tipo de dato contiene.

## Ejemplos Prácticos
Observa cómo declaramos diferentes tipos de datos y cómo consultamos su tipo:

    // 1. String
    const lenguaje = "JavaScript";
        
    // 2. Number
    let anioActual = 2026;
    const gravedad = 9.8; // Los decimales se separan con punto, no con coma
        
    // 3. Boolean
    let esDivertido = true;
    let estaLloviendo = false;

    // Imprimiendo valores
    console.log("Lenguaje:", lenguaje);

    // Uso del operador typeof para descubrir qué tipo de dato guardamos
    console.log(typeof lenguaje);       // Imprimirá en consola: string
    console.log(typeof anioActual);     // Imprimirá en consola: number
    console.log(typeof estaLloviendo);  // Imprimirá en consola: boolean

## Ejercicio

Para certificar tu comprensión antes de la prueba, tu misión es la siguiente:

Imagina que estás modelando un sistema de inventario para una tienda. Declara tres variables:

    Una para el nombre del producto (tipo String).
    Una para el precio del producto (tipo Number).
    Una que indique si el producto está en oferta o no (tipo Boolean).

Imprime las tres variables en la consola usando console.log().

Imprime en la consola el tipo de dato de tu variable de precio utilizando el operador typeof.