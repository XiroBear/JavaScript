Ahora que sabes cómo guardar datos en variables, es momento de aprender a manipularlos. En JavaScript, utilizamos Operadores para realizar cálculos o acciones sobre nuestros valores. Hoy nos enfocaremos en los operadores aritméticos básicos y en un comportamiento especial con los textos (Strings).

## Operadores Matemáticos Básicos:

    Suma (+)
    Resta (-)
    Multiplicación (*)
    División (/)
    Módulo (%): Este operador es muy útil; no devuelve el resultado de una división, sino el resto o residuo de la misma. (Ejemplo: 10 % 3 devuelve 1, porque 3 cabe 3 veces en 10, y sobra 1).

## El caso especial de la Suma (+): La Concatenación
Cuando utilizas el signo + entre dos números, JavaScript los suma matemáticamente. Sin embargo, si utilizas el signo + y al menos uno de los valores es un String (texto), JavaScript une los textos uno al lado del otro. A esta acción de unir cadenas de texto se le llama concatenación.

## Ejemplos Prácticos
Observa cómo aplicamos las matemáticas y cómo unimos textos:

    // Operaciones matemáticas
    let precioBase = 100;
    let impuesto = 20;

    let precioTotal = precioBase + impuesto; // Suma normal
    console.log("El precio total es:", precioTotal); 

    let base = 10;
    let altura = 5;
    let area = (base * altura) / 2; // Multiplicación y división combinadas
    console.log("El área es:", area);

    let residuo = 10 % 2; // 10 dividido 2 es 5 exacto, no sobra nada.
    console.log("El residuo de 10/2 es:", residuo); // Imprime 0

    // Concatenación de Strings
    const saludo = "Hola";
    const usuario = "Xiro";

    // Si solo ponemos saludo + usuario, el resultado sería "HolaXiro" (sin espacio)
    // Por lo tanto, concatenamos un espacio en blanco " " en el medio:
    const mensajeCompleto = saludo + " " + usuario; 
    console.log(mensajeCompleto); // Imprime: Hola Xiro

## Ejercicio

Es tu turno de practicar la manipulación de datos. Tu misión es:

    Declara dos variables numéricas, numero1 y numero2, y asígnales los valores que desees.
    Crea una tercera variable llamada resultadoMultiplicacion que almacene la multiplicación de tus dos primeros números.
    Declara dos variables de texto: una con tu nombre y otra con tu apellido.
    Crea una variable llamada nombreCompleto que concatene tu nombre, un espacio en blanco, y tu apellido.
    Utiliza console.log() para imprimir resultadoMultiplicacion y nombreCompleto.

